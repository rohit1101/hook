// debounce function
export function debounce(fn, delay) {
  let timer
  return function (args) {
    console.log(args)
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
