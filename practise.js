const products = {
    bottle: {
        height: 'tall', weight: 5, color: 'cyan', price: 30
    },
    furniture: {
        table: { leg: 4, head: 'no', height: 'tall', color: 'black' },
        chair: {leg: 6, design: 'good', color: 'yellow', height: 'small' }
    },
    name: 'mouse', color: 'green', price: 250, work: 'computer'
}
console.log(products?.bottle?.color);