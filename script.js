
var buttonPlay = document.getElementById('play');
var buttonReset = document.getElementById('reset');
var tier1 = document.getElementById('Tier1');
var tier2 = document.getElementById('Tier2');
var tier3 = document.getElementById('Tier3');


//show cards
buttonPlay.addEventListener('click', showCards);
buttonReset.addEventListener('click', hideCards);

function showCards(e){
        e.preventDefault();
    
  if (document.getElementById('select-game').value === '1') {
    tier1.style.visibility = "visible";

        }

    if (document.getElementById('select-game').value === '2') {
      tier1.style.visibility = "visible";
      tier2.style.visibility = "visible";
          }
  
        if (document.getElementById('select-game').value === '3') {
          tier1.style.visibility = "visible";
          tier2.style.visibility = "visible";
          tier3.style.visibility = "visible";
             }

document.getElementById('select-game').value = "0";

}

function hideCards(e){
   e.preventDefault();

   tier1.style.visibility = "hidden";
   tier2.style.visibility = "hidden";
   tier3.style.visibility = "hidden";

}

var imgClicked = document.getElementById('box-1');
var imgClicked2 = document.getElementById('box-2');

imgClicked.addEventListener('click', imageClicked);

  function imageClicked()
  {
    document.getElementById('pic1').visibility = 'visible';

    console.log(document.getElementById('pic1'));
    
}

// imgClicked2.addEventListener('click', imageClicked2);

//   function imageClicked2()
//   {
//     console.log("clicked");
//     document.getElementById('pic2').visibility = "visible";
// }







// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');
// // form submit event
// form.addEventListener('submit' , addItem);

// //delete event
// itemList.addEventListener('click', removeItem);

// //filter items
// filter.addEventListener('keyup', filterItems);


// function addItem(e){
//    e.preventDefault();

//    //get input value
// if (document.getElementById('item').value != '') {
    

//    var newItem = document.getElementById('item').value;

//    // crete new li element
   
//    var li = document.createElement('li');
//    //add class
//    li.className = 'list-group-item';
//    //add text node with input value
//    li.appendChild(document.createTextNode(newItem));
 
//    // create de delete button element
//    var deleteBtn = document.createElement('button');
//    // add clases to dlete button
//    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//    // append text node
//    deleteBtn.appendChild(document.createTextNode('X'));

//    //append button to li
//    li.appendChild(deleteBtn);

//    //append li to list
//    itemList.appendChild(li);
   
//   }
//   document.getElementById('item').value = '';
// }
// //remove item

// function removeItem(e){
//    if (e.target.classList.contains('delete')) {
//        if (confirm('Are you sure?')) {
//          var li = e.target.parentElement; 
//          itemList.removeChild(li);
//        }

//    }

// }

// function filterItems(e){
//    // convert to lowercase
//    var text = e.target.value.toLowerCase();
//     var items = itemList.getElementsByTagName('li');
//    // convert to array
//    Array.from(items).forEach(function(item){
//        var itemName = item.firstChild.textContent;
//        if (itemName.toLowerCase().indexOf(text) != -1) {
//            item.style.display = 'block';
//         }  else{
//              item.style.display = 'none';
//            }
//       });
// }