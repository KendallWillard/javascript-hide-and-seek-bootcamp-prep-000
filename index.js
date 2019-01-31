function getFirstSelector(selector) {
  const result = document.querySelector(selector)
  return result
}

function nestedTarget() {
  const result = document.querySelector("#nested").querySelector(".target")
  return result
}

function increaseRankBy(n) {
  const result = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for( let i = 0; i < result.length; i++ ) {
    var curr = result[i].innerHTML
    result[i].innerHTML = parseInt(n + curr)
  }
  return result
}

function deepestChild() {
  
}