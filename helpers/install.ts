import spawn from "cross-spawn"

export const install = () => new Promise<void>((resolve) => {
  const childProcess = spawn('yarn install', {
    stdio: 'inherit',
    env: { ...process.env, ADBLOCK: '1', DISABLE_OPENCOLLECTIVE: '1' },
  })

  childProcess.on('close', () => {
    resolve()
  })
})