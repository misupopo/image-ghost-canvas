'use strict';

import ImageGhostCanvas from '../index';
import * as Config from './image-ghost-canvas.config.spec';

describe('ImageGhostCanvas', () => {
    const urlData = Config.getConfig();
    const imageGhostCanvas: ImageGhostCanvas = new ImageGhostCanvas({});

    it('should be able to execute resizeImage', async(done) => {
        await imageGhostCanvas.resizeImage(urlData.imageSrc)
            .then((file: string) => {
                expect(urlData.resizedImage).toEqual(file);
                done();
            });
    });

    it('should be equal value with vertical', async(done) => {
        await imageGhostCanvas.resizeImage(urlData.imageSrcVertical)
            .then((file: string) => {
                expect(urlData.encodedImageSrcVertical).toEqual(file);
                done();
            });
    });

    it('should be equal value with horizontal', async(done) => {
        await imageGhostCanvas.resizeImage(urlData.imageSrcHorizontal)
            .then((file: string) => {
                expect(urlData.encodedImageSrcHorizontal).toEqual(file);
                done();
            });
    });

    describe('Error', () => {
        it('should be error because of text prefix', async(done) => {
            await imageGhostCanvas.resizeImage('data:text/plain;base64,44OV44Kh44Kk44OI44Gg44KI44Gj77yBCgo=')
                .catch((error: any) => {
                    if (error) {
                        expect(error.message).toEqual('image onerror');
                        done();
                    }
                });
        });

        it('should be error because of wrong value', async(done) => {
            await imageGhostCanvas.resizeImage('data:image/png;base64,44OV44Kh44Kk44OI44Gg44KI44Gj77yBCgo=')
                .catch((error: any) => {
                    if (error) {
                        expect(error.message).toEqual('image onerror');
                        done();
                    }
                });
        });
    });
});
