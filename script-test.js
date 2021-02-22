/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const shell = require('shelljs');

console.log('Ola mundo');

const resultado = shell.exec('git diff --name-only branch-scripts-testes..main', { silent: true });

console.log(resultado.stdout.split('\n'));
