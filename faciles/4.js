const COLORS = ['Vert', 'Rouge', 'Bleu', 'Jaune'];

function nextColor(color, colorsOrders) {
    const order = colorsOrders.map(e => e.toLowerCase());
    color = color.toLowerCase();
    const next = colorsOrders[order.indexOf(color) + 1];
    if(!next) return colorsOrders[0];
    return next;
};

console.log(((colors, colorsOrders) => {
    return colors.split(' ').map(x => nextColor(x, colorsOrders)).join(' ');
})('Rouge Vert Rouge Jaune Bleu', COLORS));
