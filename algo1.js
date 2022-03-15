const sieveOfEratosthenes = (limit) => {
    const output = new Array(limit + 1).fill(true);
    output[0] = false;
    output[1] = false;

    for (let i = 2; i <= 3; i++) {
        if (output[i] === true) {
            for (let j = i * 2; j <= limit; j = j + i) {
                output[j] = false;
            }
        }
    }
    // return output

    let primes = []
    for (let i = 0; i <= output.length; i++) {
        if (output[i] == true) {
            primes.push(i)
        }
    }
    return primes
}

console.log(sieveOfEratosthenes(11))


