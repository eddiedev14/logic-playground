//TODO: https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

//First Solution
function maskify(cc) {
    const len = cc.length;
    return len > 4 ? "#".repeat(len - 4) + cc.slice(len - 4) : cc;
}

//Optimized Solution
function maskifyWithPadding(cc) {
    return cc.slice(-4).padStart(cc.length, "#")
}

console.log(maskifyWithPadding("4556364607935616"))
console.log(maskifyWithPadding("1"))
console.log(maskifyWithPadding("11111"))