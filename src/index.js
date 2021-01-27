import { createImageQueue } from 'load-image-queue';

export const ImgSequenceCanvas = class ImgSequenceCanvas{
  constructor(el, config){
    this.$el = $(el);
    this.config = {
      height: 730,
      width: 1000,
      ...config,
    }

    this.init();
  }

  init = () => {
    this.buildCanvas();
    this.setUpImages();
    this.setFirstFrame()
  }

  setUpImages = ()=>{
    this.queue = window.CanvasQueue || createImageQueue(10);
    window.CanvasQueue = this.queue;
    this.images = this.config.images.map(this.buildImgObject)

  }

  setFirstFrame = () => {
    var cached = this.loadImage(0);
    if(cached)
    {
      this.setCanvasFrame(0);
    }else{
      var self = this;
      this.images[0].img.addEventListener("load", function(){
        self.setCanvasFrame(0);
      });
    }
  }

  buildImgObject = (src, index) => {
    const img = new Image();

    let queueEntry = this.queue.add(src, (url)=>{
      this.loadImage(index);
    }, (e) => {console.error(e)});

    return {
      img : img,
      src : src,
      queueEntry: queueEntry
    };
  }

  loadImage = (i)=>{
    var image = this.images[i];
    if(!image.img.src){
      image.img.src = image.src;
    }
    return image.img.complete;
  }

  buildCanvas = ()=>{
    this.$canvas = $(`<canvas height="${this.config.height}" width="${this.config.width}"></canvas>`);
    this.$el.append(this.$canvas);
    this.context = this.$canvas[0].getContext("2d");
  }

  setCanvasFrame = (currentFrame) => {
    if( currentFrame != this.currentFrame && this.images[currentFrame] ){
      this.currentFrame = currentFrame;
      var img = this.images[currentFrame].img;
      if(img.naturalWidth > 0){
        this.context.drawImage(img, 0, 0, img.width, img.height, 0, 0, this.$canvas[0].width, this.$canvas[0].height);
      }
    }
  }
}
