'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class ImageGhostCanvas {
    constructor(options) {
        this.size = 320;
        if (options) {
            this.size = options.size || this.size;
        }
    }
    resizeImage(imageData, callback) {
        return new Promise((resolve, reject) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const image = new Image();
            image.onload = () => {
                const imgWidth = image.width, imgHeight = image.height, imgRate = imgWidth / imgHeight;
                let imgPos = 0;
                canvas.width = this.size;
                canvas.height = this.size;
                if (imgRate >= 1.0) {
                    imgPos = Math.floor((this.size - (this.size * imgRate)) / 2);
                    ctx.drawImage(image, imgPos, 0, this.size * imgRate, this.size);
                }
                else {
                    ctx.drawImage(image, 0, 0, this.size, this.size / imgRate);
                }
                resolve(canvas.toDataURL());
            };
            image.onerror = (error) => {
                reject(new Error('image onerror'));
            };
            image.src = imageData;
        });
    }
    ;
}
exports.default = ImageGhostCanvas;
