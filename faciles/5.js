class Waiter {
    constructor(name, rates) {
        this.name =  name;
        this.rates = rates;
        this.mean = rates.reduce((a, b) => a + b) / rates.length;
    };
};

const WAITERS = [
    new Waiter('Thifanie', [5, 4, 3, 4]),
    new Waiter('Rémy', [5]),
    new Waiter('Léo', [9, 3, 2]),
    new Waiter('Lucie', [5, 7])
];

console.log(((waiters) => {
    return waiters.sort((a, b) => b.mean - a.mean)[0].name
})(WAITERS));
