module.exports = function reverse(n) {
    const digitsArray = Math.abs(n).toString().split('');
    const reversedArray = digitsArray.reverse();
    const reversedn = parseInt(reversedArray.join(''), 10);

    return reversedn;
}

