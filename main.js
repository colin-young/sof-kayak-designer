drawGrid = function (width, height) {
    var line, lineStyle, x, y, _i, _j, _results;
/*
    new paper.Path.Rectangle({
        from: [0, 0],
        to: [width, height],
        fillColor: 'white'
    });
*/
    lineStyle = function (coord) {
        if (coord % 50 === 0) {
            return {
                strokeColor: 'lightblue',
                strokeWidth: 2,
                opacity: 0.35
            };
        } else {
            return {
                strokeColor: 'lightblue',
                strokeWidth: 1,
                opacity: 0.25
            };
        }
    };
    for (x = _i = 0; _i <= width; x = _i += 10) {
        line = new paper.Path.Line({
            segments: [[x, 0], [x, height]]
        });
        line.set(lineStyle(x));
    }
    _results = [];
    for (y = _j = 0; _j <= height; y = _j += 10) {
        line = new paper.Path.Line({
            segments: [[0, y], [width, y]]
        });
        _results.push(line.set(lineStyle(y)));
    }
    return _results;
};

drawAxis = function (length) {
    line = new paper.Path.Line(
        new Point(10, 10),
        new Point(length + 10, 10)
    );
    line.set({
        strokeColor: 'black',
        strokeWidth: 2
    });
};