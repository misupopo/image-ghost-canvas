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
resizeImage method results image's data base64 url.
```js
imageGhostCanvas.resizeImage();
```

### Example
```js
// success
const imageSrc = await imageGhostCanvas.resizeImage(imageData);

// error
await imageGhostCanvas.resizeImage(imageData)
.catch((error) => {
    if (error) {
        // when it result error, write something for error.
        return;
    }
}); 

```
