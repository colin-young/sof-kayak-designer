var path = new Path();
path.strokeColor = '#567e37';
path.strokeWidth = 5;

var firstPoint = new Point(0, 550);
path.add(firstPoint);

var throughPoint = new Point(75, 400);
var toPoint = new Point(100, 250);
path.arcTo(throughPoint, toPoint); 