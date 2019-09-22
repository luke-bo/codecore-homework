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

function drawBarsAround(string) {
    return '┃' + string + `┃\n`;
}

function longestStringInArray(arr) {
    let maxStringLength = 0 
    for (let element of arr) {
        if (element.length > maxStringLength) {
            maxStringLength = element.length;
        }
    }
    return maxStringLength;
}

function boxIt(ArrOfStrings) {
    // console.log(strArr);
    let boxedOutput = '';
    let widthOfBox = longestStringInArray(ArrOfStrings);
    // console.log(ArrOfStrings);
    // console.log(longestStringInArray);
    boxedOutput += drawTopBorder(widthOfBox);

    if (ArrOfStrings.length == 0) {
        return `┏┓\n`+`┗┛`;
    }

    for (let str of ArrOfStrings) {
        if (ArrOfStrings.indexOf(str) < ArrOfStrings.length-1) {
            boxedOutput += drawBarsAround(str) + drawMiddleBorder(widthOfBox);
            

        } else {
            boxedOutput += drawBarsAround(str) + drawBottomBorder(widthOfBox);
        }
    }
    console.log(boxedOutput);

}

// console.log(drawLine(5));
// console.log(drawTopBorder(0));
// console.log(drawMiddleBorder(4));
// console.log(drawBottomBorder(4));
// console.log(drawBarsAround('hello world!'));
console.log(boxIt(['hello', 'world']));
console.log(boxIt([]));
