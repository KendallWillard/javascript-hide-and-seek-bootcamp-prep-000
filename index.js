function getFirstSelector(selector) {
  const result = document.querySelector(selector)
  return result
}

function nestedTarget() {
  const result = document.querySelector("#nested").querySelector(".target")
  return result
}

function increaseRankBy(n) {
  var result = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for( let i = 0; i < result.length; i++ ) {
    
    parseInt(result[i].innerHTML += n)
    console.log(result[i].innerHTML)
  }
  return result
}

function deepestChild() {
  
}