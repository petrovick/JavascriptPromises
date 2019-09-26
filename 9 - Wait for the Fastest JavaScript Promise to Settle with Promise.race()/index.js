function resolveAfter(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, ms);
  })
}
/*
const promiseA = resolveAfter(1000, 'A')
const promiseB = resolveAfter(999, 'B')

const fastestPromise = Promise.race([promiseA, promiseB]);

fastestPromise.then(value => {
  console.log(value);
})
*/

function timeout(ms, promise) {
  let timeoutID;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutID = setTimeout(() => {
      reject(Error(`Operation timed out after ${ms},s`))
    }, ms);
  })

  return Promise.race([promise, timeoutPromise])
    .finally(() => {
      clearTimeout(timeoutID);
    })
}

const promise = resolveAfter(2000, "A")

timeout(5000, promise).then(
  value => {
    console.log(value)
  },
  error => {
    console.error(error.message)
  }
)
