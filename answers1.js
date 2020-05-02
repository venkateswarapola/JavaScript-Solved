
const hello = () => {//Hello world task 1.1
    alert("Iam JavaScript");
};

const variable = () => {
    //Working with vaiables
    let admin;
    let name;
    name = "John";
    admin = name;
    alert(admin);

    //Giving the right name
    let ourPlanet = "earth";
    let currentUserName = "John";


    //Uppercase const?
    /*
    BIRTHDAY in caps  --hardcoded.
    age in small  --runtime evaluation.
    */
};

const datatypes = () => {
    alert("answer 1 Hello");
    alert("answer 1 Hello name");
    alert("answer 1 Hello Ilya");
};

const operators = () => {
    //The post fix and prefix forms
    //c = 2,a = 2
    //b = 2,d = 1

    //Assignment result
    // x = 5

    //Type Conversion
    "" + 1 + 0          //"10"
    "" - 1 + 0          //-1
    true + false        //1
    6 / "3"             //2
    "2" * "3"           //6
    4 + 5 + "px"        //"9px"
    "$" + 4 + 5         //"S45"
    "4" - 2             //2
    "4px" - 2           //NaN
    7 / 0               //Infinity
    "  -9  " + 5        //" -9 5"
    "  -9  " - 5        //-14
    null + 1            //1
    undefined + 1       //NaN
    " \t \n" - 2        //-2 
};

const comparisons = () => {
    5 > 4                      //true
    "apple" > "pineapple"      //false
    "2" > "12"                 //true
    undefined == null          //true
    undefined === null         //false
    null == "\n0\n"            //false
    null === +"\n0\n"          //false
};

const interaction = () => {
    let name = prompt("Whats your name?");
    alert(`You have entered ${name}`);
};

const conditional = () => {
    //if( a string  with zero)
    //Yes


    //The name of javascript
    let nameOfJS = prompt("What is the name of javascript");
    if (nameOfJS == "ECMAScript") {
        alert("right");
    }
    else {
        alert("You don't know? ECMAScript!");
    }

    //Show the sign
    let num = prompt('Type a number');
    if (num > 0) {
        alert(1);
    } else if (num < 0) {
        alert(-1);
    } else {
        alert(0);
    }

    //rewrite if into ?
    let result = (a + b < 4) ? 'Below' : 'Over';

    //rewrite if...else into ?
    let message = (login == 'Employee') ? 'Hello' :
        (login == 'Director') ? 'Greeting' :
            (login == '') ? 'No login' : ' ';

};

const logicalops = () => {
    //1.Whats the result of OR
    //2

    //2.Whats the result of OR'ed alert
    //Two alerts 1 and 2

    //3.Whats the result of AND
    //null

    //4.Whats the result of AND'ed alert
    // 1 and Undefined

    //5.The result of OR AND OR
    //3

    //6.Check the range between
    let age = prompt("Whats your age");
    if (age >= 14 && age <= 90) {
        alert("Valid age");
    }

    //7.Check range outside
    //Varient 1
    if (!(age >= 14 && age <= 90)) {
        alert("Age Invalid");
    }
    //Varient 2
    if (age <= 14 && age >= 90) {
        alert("Age Invalid")
    }

    //8.A question about if
    //  First and Third are alerted.
};

const checkTheLogin = () => {
    let username = prompt("Whats your username");
    if (username === "Admin") {
        let password = prompt("Password");
        if (password == "" || password == null) {
            alert("Cancelled");
        }
        else if (password == "TheMaster") {
            alert("Welcome!");
        }
        else {
            alert("Wrong password");
        }
    }
    else if (username == "" || username == null) {
        alert("Cancelled");
    }
    else {
        alert("I dont know");
    }
};


const looping = () => {
    //1.Last loop value
    // 1

    //2.Which value does the while loop show
    // No first loop 1,2,3,4 and second loop 1,2,3,4,5

    //3.Whcih value get shown by the for loop
    // Same values

    //4.Output even numbers in a loop
    for (i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            alert(i);
        }
    }

    //5.Replace for with while loop
    let i = 0;
    while (i < 3) {
        alert(`number ${i++}!`);
    }

    //6.Repeat until the input is correct
    let num = prompt("Enter the number");
    while (1) {
        if (num > 100 || num == null || num == "") {
            break;
        }
        else {
            num = prompt("Enter the number");
        }
    }

    //7.Output prime numbers
    outer: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                continue outer;
            }
            alert(i);
        }
    }
};

const switchCase = () => {
    //1.Rewrite the switch into an if
    let browser = prompt("Enter the browser name");
    if (browser == "Edge") alert("You've got the Edge!");
    else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") alert('Okay we support these browsers too');
    else alert('We hope that this page looks ok!');


    //Rewrite if into switch
    let a = +prompt('a?', '');
    switch (a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert("2,3");
            break;
    }
};

const functionTask = () => {
    //1.Is else required?
    // In the given example "NO" but not always

    //2.Rewrite the function using ? or ||
    //Varient 1
    function checkAge(age) {
        return (age > 18) ? true : confirm('Did parents allow you?');
    }
    //Varient 2
    function checkAge1(age) {
        return (age > 18) || confirm('Did parents allow you?');
    }


    //3.function min(a,b)
    function min(a, b) {
        return a < b ? a : b
    }

    //4.function pow(x,n)
    let x = prompt("x value?");
    let n = prompt("n value?");
    function pow(x, n) {
        if (n >= 1) {
            alert(Math.pow(x, n));
        }
        else {
            alert("Not supported");
        }
    }
    pow(x, n);
};


const arrowFunction = () => {
    //Rewrite the arrow function
    const ask = (question, yes, no) => {
        if (confirm(question)) yes()
        else no();
    }
    ask("Do you agree?",
        () => alert("You agreed."),
        () => alert("You canceled the execution.")
    );
};


const codingStyle = () => {
    //1.BadStyle
    let x = prompt("x?", "");
    let n = prompt("n?", "");
    if (n < 0) {
        alert(`Power ${n} is not supported,
          please enter an integer number greater than zero`);
    } else {
        alert(pow(x, n));
    }
    const pow = (x, n) => {
        let result = 1;
        for (let i = 0; i < n; i++) {
            result *= x;
        }
        return result;
    }
}


const objects = () => {
    //1.Hello Object
    let user = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;

    //2.Check Emptiness
    const isEmpty = (object) => {
        for (let codes in object) {
            return false;
        }
        return true;
    }

    //3.Constant objects?
    //We can assign any value to the constant object keys but cannot assign values to objects directly.


    //4.Sum object properties
    let sum = 0;
    for (let codes in salaries) {
        sum = sum + salaries[codes];
    }
    console.log(sum);

    //Multiply Numeric object by 2
    const multiplyNumeric = (object) => {
        for (let codes in object) {
            if (typeof object[codes] == 'number') object[codes] = object[codes] * 2;
        }
    }
}

const prototypes = () => {
    //1.Working with prototypes
    //1.true
    //2.null
    //3.undefined


    //2.Searching algorithm
    let head = {
        glasses: 1
    };

    let table = {
        pen: 3,
        _proto_: head
    };

    let bed = {
        sheet: 1,
        pillow: 2,
        _proto_: table
    };

    let pockets = {
        money: 2000,
        _proto_: bed
    };
    //Maybe very less difference in speeds of accessing the values using pockets.glasses or head.glasses

    //3.Where does it write?
    // Rabit

    //4.Why are both hamsters full?
    //Can include stomach in each object lazy and speedy
}


const objectMethods = () => {
    //1.Syntax check?
    //undefined
}

const constructors = () => {
    //1.two functions-one object
    //Yes it is possible
    let user = {
        name: 'John'
    }
    function A() { return user }
    function B() { return user }

    let a = new A;
    let b = new B;

    alert(a == b); // true


    //2.create new contructor
    function Caluculator() {
        this.read = function () {
            this.value1 = prompt("Enter value");
            this.value2 = prompt("Enter value2");
        };
        this.sum = function () {
            return this.value1 + this.value2;
        }
        this.mul = function () {
            return this.value1 * this.value2;
        }
    }

}


