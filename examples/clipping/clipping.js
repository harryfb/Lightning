var isNode = !!(((typeof module !== "undefined") && module.exports));
if (isNode) {
    var Stage = require('../../wpe');
}

var options = {w: 1280, h: 720, measureDetails: false, useTextureAtlas:true, glClearColor: [1, 1, 1, 1], window: {title: "Clipping demo", fullscreen: false}};
var stage = new Stage(options);

if (!isNode) {
    document.body.appendChild(stage.getCanvas());
}

stage.root.x = 100;
stage.root.y = 100;
stage.root.w = 1080;
stage.root.h = 500;
stage.root.clipping = true;
stage.root.borderWidth = 5;
stage.root.rect = true;
stage.root.color = 0xff00ff00;
stage.root.borderColor = 0xff000000;

var bunny = stage.c({src: './bunny.png', x: 200, y: 200, rotation: 0.2, tag: 'bunny'});
bunny.setTransition('x',{duration: 10, delay: 2});
// bunny.x = 1050;
bunny.rotation = 4;
bunny.scale = 1;
bunny.setTransition('rotation',{duration: 5, delay: 2});
bunny.setTransition('scale',{duration: 5, delay: 2});
// bunny.rotation = 11;
// bunny.scale = 30;
stage.root.addChild(bunny);

var a = stage.animation({duration: 3, subject: stage.root.tag('bunny'), autostop: true, actions: [
//    {property: ['y'], value: {0:0,1:400}},
    {property: ['color'], value: {0:0xFFFFFFFF,1:0xFFFF0000}},

    // {property: ['texture.w'], value: {0.5:26, 1: 0.001}}
]});

a.start();
//
// setTimeout(function() {
//     stage.root.removeChild(bunny);
// }, 5000);
// setTimeout(function() {
//     stage.root.addChild(bunny);
// }, 6000);

setTimeout(function() {
    stage.pause();
}, 6000);
