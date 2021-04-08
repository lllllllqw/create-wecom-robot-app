import commander from 'commander'
import prompts from 'prompts'
import { createApp } from './create-app'

import packageJson from './package.json'

let projectName = ''

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-name>')
  .usage(`<project-name> [options]`)
  .action((name: string | undefined) => {
    if(name) {
      projectName = name
    }
  })
  .option('--use-npm')
  .parse()

const run = async () => {
  projectName = projectName.trim()
  if(projectName === '') {
    const res = await prompts({
      name: 'projectName',
      type: 'text',
      message: `What's your project named?`,
      initial: 'my-wecom-robot',
    })
    projectName = res.projectName
  }

  projectName = projectName.trim()
  
  if(!projectName) {
    console.log('Invalid project name')
    process.exit(1)
  }
  
  console.log('projectName', projectName)
  await createApp({
    appName: projectName
  })
}

run()