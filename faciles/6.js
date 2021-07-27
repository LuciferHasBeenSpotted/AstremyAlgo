console.log(((socks) => {
    socks = socks.split('');
    const many = socks.map(e => {
        return { letter: e, times: socks.filter(x => x === e).length };
    })
    return many.find(e => e.times === 1).letter;
})('aabbcepdcep'));
