function addLeftClassToNode(node) {
  node.classList.add("aikajanaKuplaVasen", "tri-left", "left-in", "aikajanaTekstit")
  var j=0;
}

function addRightClassToNode(node) {
  node.classList.add("aikajanaKuplaOikea", "tri-right", "left-in", "aikajanaTekstit")
  var i=0;
}

// document.querySelectorAll(".pvmC div:not(:last-child):nth-child(even):not(.aikajanaKatkaisin):not(.kuukaudet)").forEach(addLeftClassToNode);
//
// document.querySelectorAll(".pvmC div:not(:last-child):nth-child(odd):not(.aikajanaKatkaisin):not(.kuukaudet)").forEach(addRightClassToNode);

// document.querySelectorAll(".pvmC span:nth-child(even)").forEach(addLeftClassToNode);
//
// document.querySelectorAll(".pvmC span:nth-child(odd)").forEach(addRightClassToNode);

// document.querySelectorAll("span:nth-child(even)").forEach(addLeftClassToNode);
//
// document.querySelectorAll("span:nth-child(odd)").forEach(addRightClassToNode);

function jaaOikeaVasen(){
  var j = document.querySelectorAll("span");

  var k = document.getElementsByTagName("span");
  var length = k.length;
  var leftList = [];
  var rightList = [];
  for (var i = 0; i<length; i++){
    if (i % 2 == 0){
      k[i].classList.add("aikajanaKuplaVasen", "tri-left", "left-in", "aikajanaTekstit")
      leftList.push(k[i]);
    }
    else{
      k[i].classList.add("aikajanaKuplaOikea", "tri-right", "left-in", "aikajanaTekstit")
      rightList.push(k[i]);
    }
  }
}

jaaOikeaVasen();
