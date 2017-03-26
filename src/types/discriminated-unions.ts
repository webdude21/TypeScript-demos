type Shape = Square | Rectangle | Circle;

interface Square {
    type: "square";
    size: number;
}
interface Rectangle {
    type: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    type: "circle";
    radius: number;
}

function area(shape: Shape) {
    switch (shape.type) {
        case "square": {
            return shape.size * shape.size;
        };
        case "rectangle": {
            return shape.height * shape.width;
        };
        case "circle": {
            return Math.PI * shape.radius ** 2;
        };
    }
}