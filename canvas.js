view = paper.view;

var path = new Path.Circle({
    center: new Point(100, 100) /*view.center*/,
    radius: 50,
    strokeColor: 'black',
    strokeWidth: 2
});

drawGrid(view.size.width, view.size.height);
drawAxis(4000);
