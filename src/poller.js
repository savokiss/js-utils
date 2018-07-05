// backoff polling
// using setTimeout insteadof setInterval
// inspired by https://blog.github.com/2009-07-30-smart-js-polling/
export function poller (callback, wait = 3000, multiplier = 1) {
  ;(function startPoller () {
    setTimeout(function () {
      callback.call(this, startPoller)
    }, wait)
    wait = wait * multiplier
  })()
}

export default poller
