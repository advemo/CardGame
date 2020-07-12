var buttonPlay = document.getElementById("play");
var buttonReset = document.getElementById("reset");
var tier1 = document.getElementById("Tier1");
var tier2 = document.getElementById("Tier2");
var tier3 = document.getElementById("Tier3");
var h2 = document.getElementsByClassName("h2");

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

  var images = document.getElementsByClassName("images");
  
  // images.forEach(element => images.src = "img/Init.jpg");
  
  images.src = "img/Init.jpg"; 
  console.log(images);
  document.getElementById("select-game").value = "0";
}

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
     window.alert("Congrats you Won!!!")    
    }

    }
  } else {
    Img1Count = document.getElementById(ImgName).src;
    LastImageFlipped = document.getElementById(ImgName);
  }
   

   
  
}

