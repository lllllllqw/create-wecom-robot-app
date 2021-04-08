import { execSync } from 'child_process'

export const initGit = () => {
  execSync('git init')
  execSync('git checkout -b main')
  execSync('git add .')
  execSync('git commit -m "Init wecom robot app"')
}