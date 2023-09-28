/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
// async/await Syntax
var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    if (functions.length == []) {
      resolve([])
      return
    }

    const res = new Array(functions.length).fill(null)

    let resolvedCount = 0

    functions.forEach(async (el, idx) => {
      try {
        const subResult = await el()
        res[idx] = subResult
        resolvedCount++
        if (resolvedCount === functions.length) {
          resolve(res)
        }
      } catch (err) {
        reject(err)
      }
    })
  })
}

// then/catch Syntax
// var promiseAll = function(functions) {
//     return new Promise((resolve,reject) => {
//         if(functions.length === []) {
//             resolve([])
//             return
//         }

//         const res = new Array(functions.length).fill(null)

//         let resolvedCount = 0

//         functions.forEach((el,idx) => {
//             el().then((subResult) => {
//                 res[idx] = subResult
//                 resolvedCount++
//                 if(resolvedCount === functions.length) {
//                     resolve(res)
//                 }
//             }).catch((err) => {
//                 reject(err)
//             })
//         })
//     })
// };

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
