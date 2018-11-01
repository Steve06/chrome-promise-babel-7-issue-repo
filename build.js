require('shelljs/global');
const fs = require('fs');

//Copy all files/dirs of source to cleared build directory
console.log('[Copy assets]');
console.log('-'.repeat(80));
rm('-rf', 'build');
mkdir('build');
cp('-R', 'source/*', 'build');

console.log('Execute webpack...');
if (process.platform==='win32') {
	console.log("Windows detected.");
	exec('node_modules\\.bin\\webpack --config webpack.config.js --progress --profile --colors'); // Windows
} else {
	console.log("Mac detected.");
	exec('node_modules/.bin/webpack --config webpack.config.js --progress --profile --colors'); // Mac
}