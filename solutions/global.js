const separator = '===================='
const log = console.log
const levelStart = (level) => {
  return log(`LEVEL ${level} START HERE ${separator}`)
}

export { separator, log, levelStart }
// * GLOBAL VARIABLE FOR CONSOLE LOGGING