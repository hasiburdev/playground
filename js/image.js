const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "./screenshot01.png";
image.addEventListener("load", () => {
  canvas.width = image.width;
  canvas.height = image.height;

  ctx.drawImage(image, 0, 0);
  const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
  console.log(scannedImage);
  const imageData = scannedImage.data;
  for (let i = 0; i < scannedImage.data.length; i += 4) {
    let r = scannedImage.data[i];
    let g = scannedImage.data[i + 1];
    let b = scannedImage.data[i + 2];
    let avg = (r + b + g) / 3;

    imageData[i] = avg;
    imageData[i + 1] = avg;
    imageData[i + 2] = avg;
  }
  scannedImage.data = imageData;
  ctx.putImageData(scannedImage, 0, 0);
});
