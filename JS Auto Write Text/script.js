const text = 'My !!';

let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);


    // var test = text.slice(0, 1);
    // console.log(test)

    index++;

    if (index > text.length) {
        index = 0;
        clearInterval(s1);
    }



}

var s1 = setInterval(writeText, 100);