type Shape = Square | Rectangle | Circle;

export interface Square {
    type: "square";
    size: number;
}
export interface Rectangle {
    type: "rectangle";
    width: number;
    height: number;
}
export interface Circle {
    type: "circle";
    radius: number;
}

export function area(shape: Shape) {
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