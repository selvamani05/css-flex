function fetchUrlParams() {
    const urlParams = new URLSearchParams(location.search);

    console.log("key value pairs")
    for (const [key, value] of urlParams) {
        console.log(`${key}:${value}`);
    }

    console.log("---------------------------------------------------------")
    console.log("key value diff way")
    for (const entry of urlParams.entries()) {
        console.log(entry);
        console.log(entry[0]);
    }

    console.log("---------------------------------------------------------")
    console.log("only all keys")
    for (const key of urlParams.keys()) {
        console.log(key);
    }

    console.log("---------------------------------------------------------")
    console.log("only all values")
    for (const value of urlParams.values()) {
        console.log(value);
    }

    console.log("---------------------------------------------------------")
console.log("method returns true if a parameter with a specified name exists.")
console.log(urlParams.has('product')); // true
console.log(urlParams.has('foo'));  // false

console.log("---------------------------------------------------------")
console.log("---append--")
urlParams.append("testKey", "testValue");
    for (const entry of urlParams.entries()) {
        console.log(entry);
        console.log(entry[0]);
    }
}


function getProduct(){
    const urlParams = new URLSearchParams(location.search);
    for (const [paramKey, paramVal] of urlParams) {
        if(paramKey  == 'product') {
            document.getElementById('productElement').value = paramVal;
            var prodChosen = paramVal;
        }
        if(paramKey  == 'quantity') {
            document.getElementById('quantityElement').value = paramVal
            quantityChosen = paramVal;
        }
    }


}


//If we are taking this to another html page we can use the below


// function goToNextPage() {
//     window.location.href= "./nextPage.html?product=" + prodChosen + '&quantity=' + quantityChosen;

// }