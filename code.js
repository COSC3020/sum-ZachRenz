function sum(a) {
    let sum = 0; // For cases when the array is zero or undefined, it can't read the first value, so we'll assume it's 0 to begin with.
    for(let i = 0; i < a.length; i++) {
        sum += a[i];
    }

    return sum; 
}

// For some odd reason, I kept getting error messages when I used var for my variables, when I swtiched to let to create variables in 
// this function block it worked. I'm not sure why or if that was something you wanted us to catch, but I figrued I would let you know.
// I'm using vs to edit my code but node.js to run it in powershell, I'm on windows. 