import got from 'got'
import path from 'path'
import { Stream } from 'stream'
import { promisify } from 'util'
import tar from 'tar'

const pipeline = promisify(Stream.pipeline)
const TEMPLATE_URL = 'https://codeload.github.com/lllllllqw/robot-template/tar.gz/main'

export const downloadRepo = async () => {
    pipeline(
      got.stream(TEMPLATE_URL),
      tar.extract({
        cwd: path.resolve('./')
      })
    )

}