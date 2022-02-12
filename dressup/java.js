function toggleonoff(id) {

  var element = document.getElementById(id);
  var parent = element.parentNode;
  var number = parent.childNodes.length;

  for (let i = 0; i < number; i++) {
    let child = parent.childNodes.item(i);
    // if it is equal to
    console.log(child)
    if (child.nodeType == 1) {
      if (child.id == id) {
        child.style.display = 'block';
      } else {
        child.style.display = 'none';
      }
    }

  }

}

