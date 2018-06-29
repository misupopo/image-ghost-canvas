'use strict';

export declare interface ImageGhostOptions {
    size?: number
}

class ImageGhostCanvas {
    public size: number = 320;

    constructor(options?: ImageGhostOptions) {
        if (options) {
            this.size = options.size || this.size;
        }
    }

    public resizeImage (imageData: any, callback?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const image = new Image();

            image.onload = () => {
                const imgWidth = image.width,
                    imgHeight = image.height,
                    imgRate = imgWidth / imgHeight;

                let imgPos = 0;

                canvas.width = this.size;
                canvas.height = this.size;

                if (imgRate >= 1.0) {
                    imgPos = Math.floor((this.size - (this.size * imgRate)) / 2);

                    ctx.drawImage(image, imgPos, 0, this.size * imgRate, this.size);
                } else {
                    imgPos = Math.floor((this.size - (this.size / imgRate)) / 2);

                    ctx.drawImage(image, 0, imgPos, this.size, this.size / imgRate);
                }

                resolve(canvas.toDataURL());
            };

            image.onerror = (error: any) => {
                reject(new Error('image onerror'));
            };

            image.src = imageData;
        });
    };
}

export default ImageGhostCanvas;
