(function(i,e){
  i.sort = e()
}(this, function(){
  let o = {}
  o.quicksort = (arr, start, end) => {
    if (start >= end) {
      return arr
    } else {
      let index = partition(arr, start, end)
      o.quicksort(arr, start, index - 1)
      o.quicksort(arr, index + 1, end)
    }
    return arr
  }
  function partition(arr, start, end) {
    let pivot = end
    let index = start
    for (let i = start; i < end; i++) {
      if (arr[i] < arr[pivot]) {
        swap(arr, i, index)
        index++
      } else {

      }
    }
    swap(arr, pivot, index)
    return index
  }
  function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
  o.selection = (arr) => {
    for(let i=0; i<arr.length; i++){
      let smallest = Infinity  
      let m = 0
      for(let j=i; j<arr.length; j++){
        if(arr[j]<smallest){
          smallest = arr[j]
          m = j
        }
      }
      swap(arr, i, m)
    }
    return arr 
  }
  o.bubble = (arr) => {
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr.length-i-1; j++){
        if(arr[j]> arr[j+1]){
          swap(arr, j, j+1)
        }
      }
    }
    return arr
  }
  o.insertion = (arr) => {
    let j, key, i, length
    for (j = 1, length = arr.length; j < length; j++) {
      key = arr[j]
      i = j - 1
      while (i >= 0 && arr[i] > key) {
        arr[i + 1] = arr[i];
        i = i - 1
      }
      arr[i + 1] = key
    }
    return arr
  }
  return o
}))
