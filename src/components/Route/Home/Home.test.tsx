import React from "react";
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './';


Enzyme.configure({adapter: new Adapter()});

describe('<Home />', () => {

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home initialText=''/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    /**
     * Snapshot test using 'react-test-renderer'
     */
    it('should have valid snapshot', () => {
        const component = renderer.create(<Home initialText=''/>)
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    /**
     * DOM test using 'enzyme'
     */
    it('should update the header on form submit', () => {
        const component = shallow(<Home initialText='' />);

        component.find('input[type="text"]').simulate('change', { target: { value: 'New Value' } });
        component.find('form').simulate('submit', { preventDefault: () => {} });
        
        let headerText = component.find('h2').text();
        expect(headerText).toBe('Stored text: New Value')
    });

});