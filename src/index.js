/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  preferences.forEach(function(item, index, arr) {
      let firstInd =arr[index];
      let secondInd = arr[firstInd-1] ;
      if(arr[secondInd-1] == index + 1 && arr[index]!=index+1){
        count++;
  }
});
  return count/3;
};
