import React from "react";
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './';


Enzyme.configure({adapter: new Adapter()});

describe('<App />', () => {

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App message=''/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    /**
     * Snapshot test using 'react-test-renderer'
     */
    it('should have valid snapshot', () => {
        const component = renderer.create(<App message='' />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    /**
     * DOM test using 'enzyme'
     */
    test('jest mocked the react logo svg image used', () => {
        const component = shallow(<App message='' />);

        const imageSource = component.find('img').prop('src');
        expect(imageSource).toBe('test-file-stub');
    });

})