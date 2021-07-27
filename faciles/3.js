function format(hour) {
    if(!hour.includes('h')) return `0h${hour}`;
    if(!hour.includes('min')) return `${hour}0min`;
    return hour;
};

console.log(((hours) => {
    hours = hours.split('|');
    const formated = [];
    for(const hour of hours) {
        let formating = format(hour);
        const h = formating.split('h')[0],
              m = formating.split('h')[1].replace('min', '');
        formated.push({h: h, m: m, d: hour});
    };
    return formated.sort((a, b) => b.h - a.h || b.m - a.m).map(e => e.d).join('\n');
})('3h8min|47min|12h19min|59min|7h'));
