function pizzaOven(masaTipos, salsaTipos, quesosTipos, otrosIngredientes) {
    let pizza = {};
    pizza.masaTipos = masaTipos;
    pizza.salsaTipos = salsaTipos;
    pizza.quesosTipos = quesosTipos;
    pizza.otrosIngredientes = otrosIngredientes;
    return pizza;
}

let pizza1 = pizzaOven("masa napolitana", "traditional", ["mozzarella"], ["pepperoni", "hotdog"]);
console.log(pizza1);

let pizza2 = pizzaOven("masa romana", "salsa blanca", ["mozzarella", "cheddar"], ["champiñones", "jamon", "piña"]);
console.log(pizza2);

let masaTipos = [
    "masa napolitana",
    "masa romana",
    "masa americana",
    "masa argentina",
    "masa tradicional",
    "masa estilo chicago",
];

let salsaTipos = [
    "tradicional",
    "marinera",
    "barbacoa",
    "salsa blanca",
    "salsa cheddar",
    "salsa tikka",
];

let quesosTipos = [
    "mozzarella",
    "cheddar",
    "gruyere",
    "gouda",
    "queso provolone",
    "queso roquefort",
    "provolone",
    "parmesano",
    "queso vegano",
];

let otrosIngredientes = [
    "pepperoni",
    "jamon",
    "pollo",
    "oregano",
    "aceituna",
    "paprika",
    "piña",
    "champiñones",
    "hotdog",
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    let i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    let pizza = {};
    pizza.masaTipos = randomPick(masaTipos);
    pizza.salsaTipos = randomPick(salsaTipos);
    pizza.quesosTipos = [];
    pizza.otrosIngredientes = [];
    for(let i=0; i<randomRange(5, 1); i++) {
        pizza.quesosTipos.push(randomPick(quesosTipos));
    }
    for(let i=0; i<randomRange(4, 0); i++) {
        pizza.otrosIngredientes.push(randomPick(otrosIngredientes));
    }
    return pizza;
}

console.log(randomPizza());



