function sum(x: number, y: number): number {
    return x + y;
}

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

function returnNothing(): void {
    console.log('I am just saying hello world')
}

interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width + this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})

interface Person {
    name: string;
    age?: number;
}

type Developer = Person & {
    skills: string[];
}

const person: Person = {
    name: '김사람',
    age: 20
}

const expert: Developer ={
    name: '김개발',
    skills: ['javascript', 'react']
}

const people: Person[] = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];

function merge1(a: any, b: any): any {
    return {
        ...a,
        ...b
    };
};

const merged1 = merge1({ foo: 1 }, { bar: 1 });

function merge2<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    };
};

const merged2 = merge2({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
    return {
        param
    }
}

const wrapped = wrap(10);

interface Items<T> {
    list: T[];
}

const items: Items<string> = {
    list: ['a', 'b', 'c']
};

class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }

    enqueue(item: T) {
        this.list.push(item);
    }

    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

