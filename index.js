const core = require('@actions/core');
const github = require('@actions/github');

try {
    console.log('index.js:+');
    const env_name = core.getInput('env-name');
    console.log(`index.js: env_name=${env_name}`);
    const env_value = core.getInput('env-value');
    console.log(`index.js: env_value=${env_value}`);
    core.exportVariable(env_name, env_value);
} catch (error) {
    core.setFailed(error.message);
} finally {
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`index.js:- event payload: ${payload}`);
}
