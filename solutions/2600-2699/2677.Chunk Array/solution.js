/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk = (arr, size) => {
  const chunkedArray = []

  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size)) // slice(start, end)
  }

  return chunkedArray
}

// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array[]}
//  */
// let chunk= (arr, size) =>{
//     const chunkedArray = [];
//     let index = 0;

//     while (index < arr.length) {
//       chunkedArray.push(arr.slice(index, index + size));
//       index += size;
//     }

//     return chunkedArray;
//   }

// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array[]}
//  */
// const chunk = (arr, size) =>
//   Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
//     arr.slice(index * size, index * size + size)
//   );

// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array[]}
//  */
// const chunk = (arr, size) => {
//     return arr.reduce((chunkedArray, element) => {
//       const lastChunk = chunkedArray[chunkedArray.length - 1];
//       if (!lastChunk || lastChunk.length === size) {
//         chunkedArray.push([element]);
//       } else {
//         lastChunk.push(element);
//       }
//       return chunkedArray;
//     }, []);
//   };
