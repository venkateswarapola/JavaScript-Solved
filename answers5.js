const primitiveMethods = () => {
    //1.Can I add a string property
    // No it shows an error we cannot create test key in the String primitive
}

const numberData = () => {
    //1.sum numbers from visitors
    let value1 = prompt("Enter the value 1");
    let value2 = prompt("Enter the value 2");
    alert(+ value1 + + value2);

    //2.Why 6.35.toFixed(1) == 6.3?
    //Maybe because 6.35 might be stored as 6.3499 some thing in fractions

    //3.Repeat until the input is a number
    do {
        value = prompt("Enter the value");
    } while (!isFinite(value));
    if (value == null || value == '') alert(null);
    else alert(value);


    //4.An occasional infinite loop
    //Because i value never becomes excatly equal to 10 if we want it to stop at 10 we need to use round or toFixed.


    //5.A random number from min to max
    const random = (min, max) => {
        alert(Math.random() * (max - min) + min);
    }

    //6.A random integer from min to max
    const randomInt = (min, max) => {
        alert(Math.round(Math.random() * (max - min) + min));
    }
}


const stringData = () => {
    //1.Uppercase the first character
    const ucFirst = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1, str.length);
    }

    //2.Check for spam
    const checkSpam = (str) => {
        let newStr = str.toLowerCase();
        return newStr.includes(viagra) || newStr.includes(xxx);
    }

    //3.Truncate the text
    const truncate = (str, maxlength) => {
        return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
    }

    //4.Extract Money
    const extractCurrencyValue = (str) => {
        return str.slice(1, str.length);
    }
}

const arrayData = () => {
    //1.Is array copied
    // 4


    //2.Array operation
    let styles = ["Jazz", "Blues"];
    styles.push("Rock-n-Roll");
    styles[Math.floor((styles.length - 1) / 2)] = "Classics";
    styles.shift();
    styles.unshift("Rap", "Reggae");

    //3.Calling in an array context
    // Outputs the array

    //4.sum input numbers
    const sumInput = () => {
        let values = [];
        while (1) {
            let num = prompt("Enter the value");
            if (value === "" || value === null || !isFinite(value)) break;
            else values.push(+num);
        }
    };

    //5.MAximal subarray
    const getMaxSubSum = (arr) => {
        let maxSum = 0;
        let tempSum = 0;
        arr.forEach((item) => {
            tempSum += item;
            maxSum = Math.max(maxSum, tempSum);
            if (tempSum < 0) tempSum = 0;
        });
        return maxSum;
    };
}


const mapsandsets = () => {
    //1.Filter unique array members
    const unique = (arr) => {
        return Array.from(new Set(arr));
    }


    //2.Filter anagrams
    const aclean = (arr) => {
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            let sorted = arr[i].toLowerCase().split("").sort().join("");
            obj[sorted] = arr[i];
        }
        return Object.values(obj);
    }

    //3.Iterable keys
    let keys = Array.from(map.keys());
}

const objectkeyvalue = () => {
    //1.Sum the properties
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };
    let sumSalaries = (salaries) => {
        let sum = 0;
        for (let item of Object.values(salaries)) {
            sum += item;
        }
        return sum;
    }
}

const destructuring = () => {
    //The maximal salaries
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };
    const topSalary = (salaries) => {
        let maxSalary = 0;
        let maxName = null;
        for (const [name, salary] of Object.entries(salaries)) {
            if (maxSalary < salary) {
                maxSalary = salary;
                maxName = name;
            }
        }
        return maxName;
    }
}