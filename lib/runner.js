const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const spawn = require('cross-spawn');
const chalk = require('chalk');

const logger = (...input) => console.log(chalk.blue.bold(...input));

function runner(settings) {
  const { scriptSegment, promptSettings } = settings;

  function getDirectories() {
    const scriptPath = path.resolve(scriptSegment);
    const results = fs.readdirSync(scriptPath);
    const directories = results.filter((result) =>
      fs.statSync(path.resolve(scriptSegment, result)).isDirectory()
    );
    return directories;
  }

  function promptScripts(choices = [], settings = {}) {
    const {
      message = 'Select a script to install & run ⚡️',
      type = 'list',
      name = 'script',
      prefix = '',
      ...rest
    } = settings;

    const formattedChoices = choices.map((choice) => ({
      name: `${prefix} ${choice}`,
      value: choice,
    }));

    return inquirer.prompt([
      {
        choices: formattedChoices,
        message,
        name,
        type,
        ...rest,
      },
    ]);
  }

  function spawnScript(scriptPath, commands) {
    spawn.sync('npm', [...commands, '--prefix', scriptPath], {
      stdio: 'inherit',
    });
  }

  async function start() {
    const directories = getDirectories(scriptSegment);
    const { script } = await promptScripts(
      directories,
      promptSettings
    );
    const scriptPath = path.join(scriptSegment, script);

    logger('Installing Dependencies ⚡️');
    spawnScript(scriptPath, ['install']);

    logger('Running Dev Server ⚡️');
    spawnScript(scriptPath, ['run', 'dev']);
  }

  return {
    start,
  };
}

const runnerSettings = {
  scriptSegment: 'lecciones',
  promptSettings: {
    message: 'Selecciona tu siguiente lección ⚡️:',
    prefix: '● Lección',
    loop: false,
  },
};

logger('♿️ Accesibilidad web en aplicaciones React ');
runner(runnerSettings).start();
