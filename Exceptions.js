try {
    // Code that might throw an exception
    // For example, accessing a non-existent property or dividing by zero
    const result = someFunction();
} catch (error) {
    // Code to handle the exception
    console.error("An error occurred:", error.message);
} finally {
    // Optional code that runs regardless of whether an exception was caught or not
}


//
try {
    const result = 10 / 0; // This will throw a "Division by zero" exception
    console.log(result); // This won't be executed
} catch (error) {
    console.error("An error occurred:", error.message); // Output: An error occurred: Division by zero
} finally {
    console.log("Finally block executed."); // Output: Finally block executed.
}


// async/await

async function fetchData() {
    try {
        const response = await fetch("https://example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

//

function child() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Simulated error occurred"));
        }, 1000);
    });
}

async function f1() {
    try {
        await child();
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
}

f1().catch(error => {
    console.error(error.message);
});




//
function f5() {
    let num = 10;

    function f6() {
        console.log(num); // This uses the num from the outer scope
    }

    return f6;
}

const f7 = f5();
f7(); // Outputs: 10


// Template Literals

const name = "SAM";
const age = 30;

// Using template literals
const message = `Hello, my name is ${name} and I am ${age} years old.`;
const message1 = 'Hello, my name is ${name} and I am ${age} years old.';

console.log(message);
console.log(message1);
// Output: Hello, my name is SAM and I am 30 years old.
