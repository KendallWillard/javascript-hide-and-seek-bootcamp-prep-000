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
    console.log(result[i].innerHTML)
    console.log(n)
    result[i].innerHTML += parseInt(n)
  }
  return result[0]
}

function deepestChild() {
  
}