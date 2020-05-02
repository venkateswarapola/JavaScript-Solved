//6.1 Recrusion
//1.Sum all numbers till the given one

//Varient 1
const sumTo = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
}
//Varient 2
const sumTo = (num) => {
    if (num == 1) {
        return 1;
    }
    else {
        return num + sumTo(num - 1);
    }
}

//varient 3
const sumTo = (num) => {
    return num * (num + 1) / 2
}

//2. Calculate factorial
const factorial = (num) => {
    if (num == 1 || num == 0) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}

//3. Fibonacci numbers
const fib = (num) => {
    if (num == 1 || num == 0) {
        return num;
    }
    else {
        return fib(num) + fib(num - 1);
    }
}

//4. Output a single linked list
const printList = (list) => {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}

//5.Output a single linkedlist in a reverse order
const reverseOrder = (list) => {
    if (list.next) {
        reverseOrder(list.next);
    }
    console.log(list.value);
}


//6.3 Variable scope
//1.Does the function pickup latest changes
//ANS : Pete

//2.Which variables are available
//ANS : Pete

//3.Are counters independent
//ANS : 0 and 1 ,they are independent

//4.Counter object
//ANS: 1,2,1

//5.Function in if
//ANS : Error function not found

//6.Sum  with clousures
function sum(a) {
    return function (b) {
        return a + b;
    }
}

//7. Is variable visible
//ANS : No, its an error

//8. Filter through function
const inArray = (arr) => {
    return (x) => {
        return arr.includes(x);
    };
}

//9.Sort by field
const byField = (fieldName) => {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1
}

//6.6 Function Object, NFE
//1. Set and decrease for functions
const makeCounter = () => {
    let count = 0;
    const counter = () => {
        return count++;
    }
    counter.set = (value) => count = value;
    counter.decrease = () => count--;
    return counter;
}

//6.8 Scheduling timeouts and timentervales
//1.Out put every second
const printNumbers = (from, to) => {
    let value = from;
    let timerInt = setInterval(() => {
        alert(value);
        if (value == to) clearInterval(timerInt);
        value++;
    }, 1000)
}

//2.What will setTimeout show?
//ANS 100000000

//6.10 Function binding
//1. Bound function as a method
//ANS. null


//2. Second bind
//ANS John, re-binding not allowed.

//3. Fix a function that loses "this"
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//4. Partial application for login
askPassword(user.login.bind(user, true), user.login.bind(user, false));


//8.Prototypes and Inheritence

//8.2 F.prototype
//1.Changing "prototype"
//ANS 1.true , 2.true , 3.true , 4.undefined

//2. Create an object with the same constructor
function obj(value) {
    this.value = value;
  }

//8.3 Native prototypes

//1. Add method "f.defer(ms)" to functions
Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};

//8.4 
//1.Add toString to the dictionary
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});

//2.The difference between calls
// ANS 1.Rabbit 2,3,4. Undefined