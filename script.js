"use srict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);


// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; // передает ссылку на уже существующий объект obj
// copy.a = 10;

// console.log(copy);
// console.log(obj);


function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
}

const clone = (Object.assign({}, add));

clone.d = 20;
// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //копирование масссива

newArray[1] = 'asdasd';
console.log(newArray);
console.log(oldArray);

// Spred operator (ES6-ES9)
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'bloger'],
      internet = [...video, ...blogs, 'vk', 'facebock'];

console.log(internet);

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];

const newCopyArray = [...array];