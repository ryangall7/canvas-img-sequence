Usage
==========

**Setup:**
```js

  import { ImgSequenceCanvas } from "canvas-img-sequence";

  const config = {
      width: 1080,
      height: 1920,
      observer: true,
      images: [
        "/someimagesequenc-001.jpg",
        "/someimagesequenc-002.jpg",
        "/someimagesequenc-003.jpg",
        "/someimagesequenc-004.jpg",
        ...
        "/someimagesequenc-100.jpg"
      ]
  }

  const el = document.getElementByID("animated-canvas")

  const canvas = new ImgSequenceCanvas(el, config);


  ```

**Animate:**
Just change the `frame` attr on the `<div id="animated-canvas" frame=1 ></div>`

```js

const el = document.getElementByID("animated-canvas")

function animateCanvas(frame){
  setAttribute("frame", frame)
}
```
