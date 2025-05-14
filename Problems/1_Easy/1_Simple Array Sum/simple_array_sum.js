/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

// METHOD 1

function simpleArraySum(ar) {
    let count = 0
    for (let i = 0; i < ar.length; i++) {
        count += ar[i]
    }
    return count
}

// METHOD 2

function simpleArraySum(ar) {
    return ar.reduce((sum, ele) => { return (sum + ele) || 0 }, 0)
}
