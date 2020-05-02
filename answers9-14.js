//9.1 Class basics
//1. Rewrite to class
class Clock {
    constructor({ template }) {
        this.template = template;
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }
    stop() {
        clearInterval(timer);
    };
    start() {
        this.render();
        this.timer = setInterval(this.render, 1000);
    };
}

//9.2 Class Inheritance
//1.Error creating an instance
//ANS Call super() to access the constructor of parent function.

//2.Extended Clock
class ExtendedClock extends Clock {
    constructor(value) {
        super(value);
        let { precision = 1000 } = value;
        this.precision = precision;
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

//3. Class extends Object?
//ANS Can be fixed by Calling super in child constructor

//9.6 Class Checking
//1. Strange instanceof
//ANS As they have same prototype it returns true.

//10.1 Error Handling
//1.finally block
//ANS finally always runs even if error occurs so if you want to run clean up you must write in finally block.

//10.2 Custom errors
//1. Inherit from SyntaxError
class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

//11.2 Promise
//1. Re-resolve a promise?
// ANS 1

//2. delay with promise
return new Promise(resolve => setTimeout(resolve, ms));

//11.3 Promise Chaining
//1.Promise: then versus catch
//they both are not same errors are handled only by catch not then, then just passes the errors to the next in chain.

//11.4 Error handling in promise
//1.Error in setTimeout
//ANS No, the error is not triggred as promise will not handle. It will be handled if wrapped around with try block.

//11.8 Async and Await
//1. Rewrite using async/await
async function loadJson(url) {
    try {
        return await fetch(url)
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
    }
    catch (err) { }
}
loadJson('no-such-user.json')
    .catch(alert); // Error: 404

//2.Rewrite "rethrow" with async/await
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
    let user;
    while (true) {
        let name = prompt("Enter a name?", "iliakan");
        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break; // no error, exit loop
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                // loop continues after the alert
                alert("No such user, please reenter.");
            } else {
                // unknown error, rethrow
                throw err;
            }
        }
    }
    alert(`Full name: ${user.name}.`);
    return user;
}
demoGithubUser();


//3.Call async from non-async
function f() {
    wait().then(result => alert(result));
}


//12.1 Generators
//1. Pseudo-random generator
function* pseudoRandom(seed) {
    let value = seed;
    while (true) {
        value = value * 16807 % 2147483647
        yield value;
    }
}

//14.1 Proxy and Reflect
//1. Error on reading non-existant property
function wrap(target) {
    return new Proxy(target, {
      get(target, prop, receiver) {
        if (prop in target) {
          return Reflect.get(target, prop, receiver);
        } else {
          throw new ReferenceError(`Property doesn't exist: "${prop}"`)
        }
      }
    });
  }

//2. Accessing array[-1]
array = new Proxy(array, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = +prop + target.length;
        }
        return Reflect.get(target, prop, receiver);
    }
});s


//14.2 Eval
//1. Eval-calculator
let arthexpr = prompt("Enter the Expression");
alert(eval(arthexpr));