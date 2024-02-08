// import 'Hello'

function suma(numA: number, numB: number): void {
    console.log(2222);
    
    // return 435345
    
    // numA + numB;

    // return numA + numB
}

const a = suma(1, 435);
console.log(a);


let b: string = 'dgdfgfd';
let c: number = 53;
let d: null = null;
let e: undefined = undefined;
let vv: boolean = true;
// let sd: symbol = Symbol('dfs');
// let df: bigint = 2;
let ob: object = {
    df: 'dfd',
    dfd: 444
};


let a1: any = '45treger';

a1 = 434

// a1.dfd()

let a4: unknown = 'dgfsdgs';

a4 = 43534534;
a4 = true;
a4 = {
    dfsdpkg: 'dgfdgdf'
}

// a4.filter()

enum GENDER {
    MALE = 'male',
    FEMALE = 'female'
}

type onlyIntAndStrNum = number | string | boolean;

type Usss =  {
    id: onlyIntAndStrNum;
    name?: string;
    username: string
    email: string;
    gender: GENDER
}

type Uss2 = Usss & {
    isAdmin: boolean
}


// type BB = { id: number }
// type BB = {o: string}

interface CC { id: number }
interface CC {o: string}

let ff: CC = {
    id: 2,
    o: 'd'
}

interface Dfd extends Usss {
    dd: number | string
    // d3 | hell: 
}

// interface INum { number }

let aaa: Uss2 = {
    id: 'dfmdgmfd2dgjdfn',
    name: 'dfsd',
    username: 'dfsd',
    email: '@dd',
    gender: GENDER.MALE,
    isAdmin: true,
}

interface IUser {
    id: onlyIntAndStrNum;
    name?: string;
    username: string;
    email: string;
    gender: GENDER;
}

interface IAdmin {
    isAdmin: boolean | number;
}

interface IUserAdmin extends IUser, IAdmin {
    age: number
}


let uuuuu: IUserAdmin = {
    id: 'dfmdgmfd2dgjdfn',
    name: 'dfsd',
    username: 'dfsd',
    email: '@dd',
    gender: GENDER.MALE,
    isAdmin: true,
    age: 33
}

let ggg: number | string = 43534;

ggg = 'dgdfg'

let a5: never;

let users: IUser[];
// let users: Array<any>;

let user1: IUser = {
    id: 'dfmdgmfd2dgjdfn',
    name: 'dfsd',
    username: 'dfsd',
    email: '@dd',
    gender: GENDER.MALE,
}

let user2: IUser = {
    id: 1,
    // name: 'dfsd',
    username: 'dfsd',
    email: '@dd',
    gender: GENDER.FEMALE,
}

let user3: IUser = {
    id: false,
    // name: 'dfsd',
    username: 'dfsd',
    email: '@dd',
    gender: GENDER.FEMALE,
}

console.log(user1, user2);

let smth: onlyIntAndStrNum = 'dfsdg';

smth = 1333;



fetch('https://jsonplaceholder.typicode.com/users')
.then(d => d.json())
.then((d: IUser[]) => {
    users = d;
    console.log(users);
    
})
// .catch((err: never))

let action: any;
let count: number = 0
let store: any;

// let fgf = () => { 
//     switch (action.type) {
//     case 'dfd': return {...store, count: count + 1};
//     case 'dfdf': return {...store, count: count - 1};
//     case 'dfdf': return {...store, count: 0};
//     default: return {...store, count};
// }}


// console.log(users);

abstract class A {
    private ddd = 323
    protected s = 3
    public f = 'df';
    d = true
}

class B {

}

// class C extends A, B {

// }

class C extends A {
    constructor() {
        super()


        console.log(this.s);
        
    }


    static dddf() {

    }

    ffdg() {}
}


C.dddf()
// C.ffdg()
// let a2 =  new A();
// a2.
// a2.s

// 

let myF = (n1: number, n2: number): number => {
    console.log(n1);
    return n2
}


type ofF = (p: number, p2: number) => number
interface Fff {
    (p: number, p2: number): number 
}

const myF2: ofF = (n1, n2) => {
    console.log(n1);
    return n2
}


const myF3: Fff = (n1, n2) => {
    console.log(n1);
    return n2
}


