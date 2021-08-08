
const picture = document.querySelector("#picture");
const pic = document.createElement("img");

function changePic(){
 const images =["jk.jpg","jhope.jpg","jimin.jpg","jin.jpg","rm.jpg","v.jpg","suga.jpg"];
 const chosenImage =images[Math.floor(Math.random() * images.length)];

 pic.src = `bgimg/${chosenImage}`;
 picture.appendChild(pic);
}

setInterval(changePic,1000);

