let singletoneRequire = require('../../lib/SingletonRequirer.js')(runtime, this)
let runningQueueDispatcher = singletoneRequire('RunningQueueDispatcher')
let commonFunctions = singletoneRequire('CommonFunction')
let { logInfo } = singletoneRequire('LogUtils')

runningQueueDispatcher.addRunningTask()
runningQueueDispatcher.showDispatchStatus()
logInfo('task3 start')
let count = 15
while (count-- > 0) {
  let content = 'Task3 Running count:' + count
  commonFunctions.showMiniFloaty(content, 400 - count * 10, 500 - count * 10, '#0000ff')
  sleep(1000)
}
logInfo('task3 end')
runningQueueDispatcher.showDispatchStatus()
runningQueueDispatcher.removeRunningTask()