import path from 'path'
import { downloadRepo } from './helpers/download-repo'
import { isWriteableDir } from './helpers/is-writeable-dir'
import { makeDir } from './helpers/make-dir'
import { install } from './helpers/install'
import { initGit } from './helpers/git'

type CreateAppOptions = {
  appName: string
}

export const createApp = async (options: CreateAppOptions) => {
  const { appName } = options

  const rootPath = path.resolve('./')
  if (!(await isWriteableDir(rootPath))) {
    console.log('this app path is not writeable')
    process.exit(1)
  }

  await makeDir(appName)
  process.chdir(appName)
  console.log('Downloading template...')
  await downloadRepo()
  console.log('Installing dependencies...')
  await install()
  initGit()
  console.log('App-createing Success!')
}
