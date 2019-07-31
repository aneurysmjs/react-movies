const chalk = require('chalk');

const logMessage = (message, level = 'info') => {
  // eslint-disable-next-line no-nested-ternary
  const color = level === 'error' ? 'red' : level === 'warning' ? 'yellow' : 'white';
  // eslint-disable-next-line no-console
  console.log(`[${new Date().toISOString()}]`, chalk[color](message));
};

const compilerPromise = (name, compiler) => new Promise((resolve, reject) => {
  compiler.hooks.compile.tap(name, () => {
    logMessage(`[${name}] Compiling `);
  });
  compiler.hooks.done.tap(name, (stats) => {
    const info = stats.toJson();

    if (!stats.hasErrors()) {
      resolve();
    }
    // eslint-disable-next-line no-console
    console.error(info.errors);

    return reject(new Error(`Failed to compile ${name}`));
  });
});

const findCompiler = multiCompiler => compilerName => (
  multiCompiler.compilers.find(compiler => compiler.name === compilerName)
);

module.exports = {
  logMessage,
  compilerPromise,
  findCompiler,
};
