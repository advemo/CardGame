
var buttonPlay = document.getElementById('play');
var buttonReset = document.getElementById('reset');
var tier1 = document.getElementById('Tier1');
var tier2 = document.getElementById('Tier2');
var tier3 = document.getElementById('Tier3');

// var pic1 = document.getElementById('pic1');
// var pic2 = document.getElementById('pic2');
// var pic3 = document.getElementById('pic3');
// var pic4 = document.getElementById('pic4');
// var pic5 = document.getElementById('pic5');
// var pic6 = document.getElementById('pic6');

var Img1Count;
var Img2Count;
var LastImageFlipped;
var CurentImageFlipped;

//PLAY AND RESET BUTTON 
buttonPlay.addEventListener('click', showCards);
buttonReset.addEventListener('click', hideCards);


// DISPLAY CARDS AFTER SHOSSING LEVEL

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

// RESET GAME
function hideCards(e){
   e.preventDefault();

   tier1.style.visibility = "hidden";
  //  tier2.style.visibility = "hidden";
  //  tier3.style.visibility = "hidden";

}



function CompareImages(img1, img2, SetThisOne, Current) {
   if (img1 =! img2) {
     CurentImageFlipped = SetThisOne;
     Current = SetThisOne;

   } 

   
   console.log(img1);
   console.log(img2);
}


function toggleImage(ImgName, NewImg) {
   
  var img11 = "img/Init.jpg";
   var imgElement = document.getElementById(ImgName);
   imgElement.src =  NewImg;

   CurentImageFlipped = imgElement;


   CompareImages(LastImageFlipped, CurentImageFlipped, img11, imgElement);

   LastImageFlipped = NewImg;

console.log(imgElement);
console.log(CurentImageFlipped);
console.log(Img1Count);
console.log(Img2Count);
console.log(LastImageFlipped);
console.log();

CurentImageFlipped = "";

}








// function ShowClickedImage(ImgName, Source){

//   image = document.getElementById(ImgName);
//   image.src = Source;

// }




// imgClicked2.addEventListener('click', imageClicked2);

//   function imageClicked2()
//   {
//     console.log("clicked");
//     document.getElementById('pic2').visibility = "visible";
// }





