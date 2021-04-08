import fs from 'fs'

export const makeDir = async (dirPath: string, options?: fs.MakeDirectoryOptions) => {
  return fs.promises.mkdir(dirPath, options)
}