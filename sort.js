(function(i,e){
  i.sort = e()
}(this, function(){
  let o = {}
  o.quicksort = (arr, start, end) => {
    if (start >= end) {
      return true
    } else {
      let index = partition(arr, start, end)
      o.quicksort(arr, start, index - 1)
      o.quicksort(arr, index + 1, end)
    }
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
  }
  o.bubble = (arr) => {
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<i; j++){
        if(arr[j]> arr[j+1]){
          swap(arr, j, j+1)
        }
      }
    }
  }
  o.insertion = (arr) => {
    for(let i=1; i<arr.length; i++){
      for(let j=0; j<i; j++){
        if(arr[j]>arr[i]){
          swap(arr, j, i)
        }
      }
    }
  }
  return o
}))