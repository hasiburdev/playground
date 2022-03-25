let img;
function preload() {
  img = loadImage("./me.jpg");
}

function setup() {
  createCanvas(500, 500);
  console.log(img);
}
function draw() {
  background(200);
  image(img, 0, 0, width, height);
  loadPixels();
  //   for (let i = 0; i < img.width; i++) {
  //     for (let j = 0; j < img.height; j++) {
  //       console.log({
  //         R: img.pixels[i + j],
  //         G: img.pixels[i + j + 1],
  //         B: img.pixels[i + j + 2],
  //         A: img.pixels[i + j + 3],
  //       });
  //     }
  //   }
  updatePixels();
  noLoop();
}
