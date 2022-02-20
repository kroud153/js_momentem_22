const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];

const backgroundImage = document.createElement("img");
//const body = document.body;

const chosenImage = images[Math.floor(Math.random() * images.length)];
backgroundImage.src = `./img/${chosenImage}`;


document.body.appendChild(backgroundImage);
//document.body.appendChild(d);