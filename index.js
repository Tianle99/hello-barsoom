import * as core from '@actions/core';

const name = core.getInput('name');
const output_val = `Hello ${name}!`;
core.setOutPut("greeting", output_val)