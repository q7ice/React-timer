export function calculateSeconds(time) {
  return time.hours * 3600 + time.minutes * 60 + time.seconds
}

export function convertSeconds(seconds) {
  const time = Math.trunc(seconds)
  return {
    hours: Math.trunc(time / 3600),
    minutes: Math.trunc((time % 3600) / 60),
    seconds: time % 60
  }
}

export function calculateProgress(seconds, settings) {
  return Math.round(seconds / calculateSeconds(settings) * 100)
}