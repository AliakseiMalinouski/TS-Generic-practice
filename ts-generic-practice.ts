interface Asus {
    id: number,
    power: number
}

interface Lenovo {
    id: number,
    power: number
}

interface Laptop<T> {
    isCreated: boolean,
    isNotOriginal: boolean,
    laptop: T
}

type LenovoType = Laptop<Lenovo>;
type AsusType = Laptop<Asus>;

const asus: AsusType = {
    isCreated: false,
    isNotOriginal: true,
    laptop: {
        id: 999,
        power: 1000
    }
}

const lenovo: LenovoType = {
    isCreated: true,
    isNotOriginal: false,
    laptop: {
        id: 1000,
        power: 2000
    }
}

function createRandomString (length: number): string {
    let result = "";
    let chars = 'QWERTYUIOASDFGHJKLPZXCVBNMqwertyuiopasdfghjklzxcvbnm';
    let charsLength = chars.length;
    let counter = 0;

    while(counter < length) {
        result += chars.charAt(Math.floor(Math.random() * charsLength));
        counter += 1;
    }

    return result;
}

console.log(createRandomString(10))


function returnSomething<T>(arg: T): T {
    return arg;
}

let string = returnSomething('string');
let int = returnSomething(1000);

function getRandomElem<T>(array: T[]): T {
    let randomIndex = array[Math.floor(Math.random() * array.length)];

    return randomIndex;
}

let randomFromArrayOfNumbers = getRandomElem([1,2,3,4,5,6]);
let randomFromArrayOfString = getRandomElem(['Hi', 'Me']);


function merge<T, V>(firstObject: T, secondObject: V): T & V {
    return {
        ...firstObject, ...secondObject
    }
}

let mergedObjects = merge({first: 1}, {second: 2});


async function mockRequest () {
    return true;
}

let resultMockRequest: Promise<boolean> = mockRequest();

interface isLength {
    length: number
}

function returnStringOrArray<T extends isLength> (elem: T) {
    return elem.length;
}

let resulting = returnStringOrArray([1,2,4]);
let resulting2 = returnStringOrArray('strjfg');

interface objExample {
    name: string,
    age: number
}

function colc<T extends object, U extends keyof T> (obj: T, prop: U) {
    return obj[prop];
}


function findByValue<T extends object, U extends keyof T> (obj: T, value: T[U]) {
    let elem = (Object.keys(obj) as Array<U>).find(k => obj[k] === value);

    return elem;
}

let r = findByValue({name: 'Aleksy'}, "Aleksy")


function patchField<T extends object, U extends keyof T, V extends T[U]>(obj: T, key: U, value: V) {

}

let pResult = patchField({f: 1}, 'f', 1);

// type FunctionComponents<T extends object = object> = (props: T & {children: any}) => any;

// const Component: FunctionComponents = <{name? : string, age? : number }> = ({age, name}) => {

// }; 