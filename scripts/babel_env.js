const util = require('util');
const exec = util.promisify(require('child_process').exec);

(async () => {

    let envVars = '';
    let NODE_ENV = 'NODE_ENV=development';
    let AUTHOR = 'AUTHOR=codeceps';

    switch(process.argv[2]) {
        case 'basic': {
            envVars = `cross-env ${NODE_ENV}`
            break;
        }
        case 'extended': {
            envVars = `cross-env ${NODE_ENV} ${AUTHOR}`
            break;
        }
    }

    const {stdout, stderr} = await exec(`${envVars} babel ./src/printer.ts --out-file ./src/printer.js`);
    if (stderr) {
        console.error(stderr);
    }
    console.log(stdout);

})()