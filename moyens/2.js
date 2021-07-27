function tranformTo7bits(letter) {
    let codeBin = letter.charCodeAt(0).toString(2);
    const difference = 7 - codeBin.length;
    for(let i = 0; i < difference; i++) codeBin = '0' + codeBin;
    return codeBin;
};

function fusionBins(a, b) {
    a = a.split('').map(e => parseInt(e, 10));
    b = b.split('').map(e => parseInt(e, 10));
    return a.map((x, i) => {
        switch(x + b[i]) {
            case 0: return 0;
            case 1: return 1;
            case 2: return 0;
        };
    }).join('');
};

function fromBinToChar(bin) {
    return String.fromCharCode(parseInt(bin, 2));
};

function fillTheKey(key, message) {
    if(key.length === message.length) return key;
    for(let i = 0; key.length < message.length; i++) {
        i === key.length ? i = 0 : key += key.split('')[i]
    };
    return key;
}

console.log(((message, key) => {
    key = fillTheKey(key, message)
    const messageIn7bits = message.split('').map(e => tranformTo7bits(e)), keyIn7bits = key.split('').map(e => tranformTo7bits(e));
    const crypted = messageIn7bits.map((e, i) => fusionBins(e, keyIn7bits[i]));
    const encrypted = crypted.map(e => fromBinToChar(e));
    return encrypted.join('');
})('Hello', '.'));
