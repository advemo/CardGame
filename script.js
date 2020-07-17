var buttonPlay = document.getElementById("play");
var buttonReset = document.getElementById("reset");
var tier1 = document.getElementById("Tier1");
var tier2 = document.getElementById("Tier2");
var tier3 = document.getElementById("Tier3");


// var img2 = document.getElementById("pic2");
// var img3 = document.getElementById("pic3");
// var img4 = document.getElementById("pic4");
// var img5 = document.getElementById("pic5");
// var img6 = document.getElementById("pic6");
// var img7 = document.getElementById("pic7");
// var img8 = document.getElementById("pic8");
// var img9 = document.getElementById("pic9");
// var img10 = document.getElementById("pic10");
// var img11 = document.getElementById("pic11");
// var img12 = document.getElementById("pic12");
// var img13 = document.getElementById("pic13");
// var img14 = document.getElementById("pic14");
// var img15 = document.getElementById("pic15");
// var img16 = document.getElementById("pic16");
// var img17 = document.getElementById("pic17");
// var img18 = document.getElementById("pic18");


var Img1Count;
var Img2Count;
var LastImageFlipped;
var CurentImageFlipped;
var completedGame;
var cardCounter = 0;
//PLAY AND RESET BUTTON
buttonPlay.addEventListener("click", showCards);
buttonReset.addEventListener("click", hideCards);

// DISPLAY CARDS AFTER SHOSSING LEVEL


function showCards(e) {
  e.preventDefault();

  if (document.getElementById("select-game").value === "1") {
    tier1.style.visibility = "visible";
  }

  if (document.getElementById("select-game").value === "2") {
    tier1.style.visibility = "visible";
    tier2.style.visibility = "visible";
  }

  if (document.getElementById("select-game").value === "3") {
    tier1.style.visibility = "visible";
    tier2.style.visibility = "visible";
    tier3.style.visibility = "visible";
  }
  completedGame = document.getElementById("select-game").value * 6;
  document.getElementById("select-game").value = "0";
}


// RESET GAME

function hideCards(e) {
  e.preventDefault();

   tier1.style.visibility = "hidden";
   tier2.style.visibility = "hidden";
   tier3.style.visibility = "hidden";

  var images = document.querySelector('#images');
  
 for (let i = 0; i < document.images.length; i++) {
  document.images[i].src = "img/Init.jpg";   
 }

  // images.forEach(element => images.src = );
  
  // //images.src = "img/Init.jpg"; 
  console.log(document.images.length);
  document.getElementById("select-game").value = "0";
}


//document.getElementById("pic1").addEventListener("click", toggleImage('pic1', 'img/1.jpg'));


//SHOW IMAGE AND COMPARE WITH SECOND IMAGE
function toggleImage(ImgName, NewImg) {
  var resetImage = "img/Init.jpg";
  var imgElement = document.getElementById(ImgName);
  imgElement.src = NewImg;


  if (Img1Count) {
    Img2Count = document.getElementById(ImgName).src;
    CurentImageFlipped = document.getElementById(ImgName);
    if (Img2Count != Img1Count) {
      CurentImageFlipped.src = resetImage;
      LastImageFlipped.src = resetImage;
      Img1Count = null;
      Img1Count = null;
    }
    if (Img2Count == Img1Count) {
      CurentImageFlipped.src = "img/OK.jpg";
      LastImageFlipped.src = "img/OK.jpg";
      Img1Count = null;
      Img1Count = null;
      cardCounter = cardCounter + 2;
     console.log(cardCounter);
     console.log(completedGame);

     if (cardCounter == completedGame) {

      tier1.style.visibility = "hidden";
     tier2.style.visibility = "hidden";
     tier3.style.visibility = "hidden";
     completedGame = document.getElementsByClassName(h2);
     console.log(completedGame);
     completedGame.visibility = "display";
     completedGame.display = "block";
    window.alert("Congrats you Won!!!")

    }
   
    }
  } else {
    Img1Count = document.getElementById(ImgName).src;
    LastImageFlipped = document.getElementById(ImgName);
  }
   

   
  
}

