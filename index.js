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
    var temp = parseInt(result[i].innerHTML)
    temp += n
    result[i].innerHTML = temp 
   
  }
  return result
}

function deepestChild() {
  var curr = document.querySelector("#grand-node");
  var next = curr.children[0]
  
  // Traverse until there are no more children left to find the deepest child using a depth-first search
  while( next ) {
    curr = next;
    next = curr.children[0]
  }
  
  return curr
}