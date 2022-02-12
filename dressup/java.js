function toggleonoff(id) {

       var element = document.getElementById(id);
       var parent = element.parentNode;
       var number = parent.childNodes.length;

       for (let i =0; i < number ; i++ ) {
         let child = parent.childNodes.item(i);
         // if it is equal to
         console.log(child)
         if (child.nodeType == 1){
           if (child.id == id) {
             child.style.display = 'block';
           } else {
             child.style.display = 'none';
           }
         }

       }

       // console.log(parent);
       // console.log(parent.childNodes);


      // parent.childNodes.forEach(onoff);
    }



// function onoff(element) {
//   console.log(element);
//   if (element.nodeType == 1){
//         if(element.style.display == 'block')
//           element.style.display = 'none';
//         else
//           element.style.display = 'block';
//         }
//     }
