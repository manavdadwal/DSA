/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

// METHOD 1

function aVeryBigSum(ar) {
    let sumArray = 0;
    ar.forEach((element) => {
        sumArray += element
    })
    return sumArray;
}

// METHOD 2

function aVeryBigSum(ar) {
    return ar.reduce((sum, ele) => { return (sum + ele) || 0 }, 0)
}

