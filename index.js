import * as core from '@actions/core';
import * as github from '@actions/github';
try {
    const name = core.getInput('name');
    const output_val = `Hello ${name}!`;
    core.setOutPut("greeting", output_val)

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}