# image-ghost-canvas
image-ghost-canvas is a tool for image you want to trimming cut on Browser.
for example if you want to cut with keeping the image's aspect ratio, I recommend this tool for that.

### Demo
<a target="_blank" href="https://plnkr.co/edit/kyFSt7SrA1lgZE381vYw?p=preview">Plunker</a>

### Usage
```js
import ImageGhostCanvas from 'image-ghost-canvas';
public imageGhostCanvas = new ImageGhostCanvas(option);
```
`option` \<Object>
* size \<Number> Size for trimming image size.

#### Resize image
```js
imageGhostCanvas.resizeImage(data);
```
`data` \<[data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)> you can git encoded image data that its type jpeg or ping. 

`Return:` \<Promise>

### Example
```js
// success
imageGhostCanvas.resizeImage(imageData)
.then((data) => {
    imageSrc = data;
});

// error
imageGhostCanvas.resizeImage(imageData)
.catch((error) => {
    // when it result error, do something for error.
}); 

```
