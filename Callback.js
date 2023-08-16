// A function that takes a callback and calls it after a timeout
function f1(callback, timeout) {
    setTimeout(callback, timeout);
}

// A callback function
function f2() {
    console.log("Callback executed!");
}

// Calling the function with the callback
f1(f2, 2000); // Executes callback after 2 seconds



function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulate fetching data asynchronously
        setTimeout(() => {
            const data = "Fetched data";
            resolve(data);
        }, 2000);
    });
}

fetchData()
    .then(data => {
        console.log(data); // Outputs: Fetched data
    })
    .catch(error => {
        console.error(error);
    });


async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Fetched data";
            resolve(data);
        }, 2000);
    });
}

async function main() {
    try {
        const data = await fetchData();
        console.log(data); // Outputs: Fetched data
    } catch (error) {
        console.error(error);
    }
}

main();
