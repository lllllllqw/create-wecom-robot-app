import path from 'path'
import { downloadRepo } from './helpers/download-repo'
import { isWriteableDir } from "./helpers/is-writeable-dir"
import { makeDir } from './helpers/make-dir'

type CreateAppOptions = {
  appName: string
}

export const createApp = async (options: CreateAppOptions) => {
  const { appName } = options

  const rootPath = path.resolve('./')
  if(!await isWriteableDir(rootPath)) {
    console.log('this app path is not writeable')
    process.exit(1)
  }

  await makeDir(appName)
  process.chdir(appName)
  downloadRepo()
}