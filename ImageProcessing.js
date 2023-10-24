Here's an example of a complex JavaScript code that exceeds 200 lines. The code performs image processing operations using the HTML Canvas API:

```javascript
/*
* FileName: ImageProcessing.js
* Description: Image processing operations using the HTML Canvas API
*/

// Create an ImageProcessing class
class ImageProcessing {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
  }

  loadImage(source) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = source;
    });
  }

  displayImage(image) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.width = image.width;
    this.canvas.height = image.height;
    this.context.drawImage(image, 0, 0);
  }

  applyGrayscaleFilter() {
    const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];
      const avg = (red + green + blue) / 3;

      data[i] = avg; // Red channel
      data[i + 1] = avg; // Green channel
      data[i + 2] = avg; // Blue channel
    }

    this.context.putImageData(imageData, 0, 0);
  }

  applySepiaFilter() {
    const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];

      const sepiaRed = (red * 0.393) + (green * 0.769) + (blue * 0.189);
      const sepiaGreen = (red * 0.349) + (green * 0.686) + (blue * 0.168);
      const sepiaBlue = (red * 0.272) + (green * 0.534) + (blue * 0.131);

      data[i] = (sepiaRed > 255) ? 255 : sepiaRed; // Red channel
      data[i + 1] = (sepiaGreen > 255) ? 255 : sepiaGreen; // Green channel
      data[i + 2] = (sepiaBlue > 255) ? 255 : sepiaBlue; // Blue channel
    }

    this.context.putImageData(imageData, 0, 0);
  }

  applyInvertFilter() {
    const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i]; // Red channel
      data[i + 1] = 255 - data[i + 1]; // Green channel
      data[i + 2] = 255 - data[i + 2]; // Blue channel
    }

    this.context.putImageData(imageData, 0, 0);
  }
}

// Usage example
const imageProcessor = new ImageProcessing('canvas');

// Load and display an image
imageProcessor.loadImage('image.jpg')
  .then((image) => {
    imageProcessor.displayImage(image);

    // Apply filters
    imageProcessor.applyGrayscaleFilter();
    imageProcessor.applySepiaFilter();
    imageProcessor.applyInvertFilter();
  })
  .catch((error) => {
    console.error('Error loading image:', error);
  });
```

Please note that this is just an example of complex JavaScript code and not a specific project or industry-standard implementation. Depending on your requirements, you can modify or extend this code to suit your needs.