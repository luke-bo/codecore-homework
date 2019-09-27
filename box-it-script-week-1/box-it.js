// longestStringInArray helper function to determine the width of the box, based on the longest string in the array of strings passed to the boxIt function

function longestStringInArray(arr) {
    let maxStringLength = 0 
    for (let element of arr) {
        if (element.length > maxStringLength) {
            maxStringLength = element.length;
        }
    }
    return maxStringLength;
}



// functions to be used within the main boxIt function

function drawLine(lineLength) {
    return '━'.repeat(lineLength);
}

function drawTopBorder(topBorderLength) {
    return '┏' + drawLine(topBorderLength) + `┓\n`;
}

function drawMiddleBorder(middleBorderLength) {
    return '┣' + drawLine(middleBorderLength) + `┫\n`;
}

function drawBottomBorder(bottomBorderLength) {
    return '┗' + drawLine(bottomBorderLength) + '┛';
}

function drawBarsAround(string, width) {
    return '┃' + string + ' '.repeat((width - string.length)) + `┃\n`;
}



function boxIt(arrOfStrings) {
// console.log(strArr);
    let boxedOutput = '';
    let widthOfBox = longestStringInArray(arrOfStrings);
    // console.log(arrOfStrings);
    // console.log(longestStringInArray);
    boxedOutput += drawTopBorder(widthOfBox);

    if (arrOfStrings.length == 0) {
        return `┏┓\n`+`┗┛`;
    }

    for (let str of arrOfStrings) {
        if (arrOfStrings.indexOf(str) < arrOfStrings.length-1) {
            boxedOutput += drawBarsAround(str, widthOfBox) + drawMiddleBorder(widthOfBox);
            

        } else {
            boxedOutput += drawBarsAround(str, widthOfBox) + drawBottomBorder(widthOfBox);
        }
    }
    console.log(boxedOutput);
}


// tests for individual functions

// console.log(drawLine(5));
// console.log(drawTopBorder(0));
// console.log(drawMiddleBorder(4));
// console.log(drawBottomBorder(4));
// console.log(drawBarsAround('hello world!'));


// tests with pre-defined boxIt arguments

// console.log(boxIt(['hello', 'world', 'cersei lanister']));
// console.log(boxIt([]));
// console.log(boxIt(['Jon Snow']));



// boxIt w/ user input

let arrOfStrings = process.argv.slice(2);  
boxIt(arrOfStrings);


