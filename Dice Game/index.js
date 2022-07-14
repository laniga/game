var randomNumber = Math.random();
randomNumber = Math.floor((randomNumber * 6) + 1);

var dicePic = document.querySelector(".img1");

if (randomNumber == 1) dicePic.setAttribute("src", "images/dice1.png");
else if (randomNumber == 2) dicePic.setAttribute("src", "images/dice2.png");
else if (randomNumber == 3) dicePic.setAttribute("src", "images/dice3.png");
else if (randomNumber == 4) dicePic.setAttribute("src", "images/dice4.png");
else if (randomNumber == 5) dicePic.setAttribute("src", "images/dice5.png");
else dicePic.setAttribute("src", "images/dice6.png");

var randomNumberTwo = Math.random();
randomNumberTwo = Math.floor((randomNumberTwo * 6) + 1);

var dicePicTwo = document.querySelector(".img2");

if (randomNumberTwo == 1) dicePicTwo.setAttribute("src", "images/dice1.png");
else if (randomNumberTwo == 2) dicePicTwo.setAttribute("src", "images/dice2.png");
else if (randomNumberTwo == 3) dicePicTwo.setAttribute("src", "images/dice3.png");
else if (randomNumberTwo == 4) dicePicTwo.setAttribute("src", "images/dice4.png");
else if (randomNumberTwo == 5) dicePicTwo.setAttribute("src", "images/dice5.png");
else dicePicTwo.setAttribute("src", "images/dice6.png");

var heading = document.querySelector("h1");

if (randomNumber > randomNumberTwo) heading.innerHTML = "Player 1 wins!";
else if (randomNumber < randomNumberTwo) heading.innerHTML = "Player 2 wins!";
else heading.innerHTML = "Draw!";
