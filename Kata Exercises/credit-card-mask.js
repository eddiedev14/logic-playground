//TODO: https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
    const len = cc.length;
    return len > 4 ? "#".repeat(len - 4) + cc.slice(len - 4) : cc;
}

console.log(maskify("4556364607935616"))
console.log(maskify("1"))
console.log(maskify("11111"))