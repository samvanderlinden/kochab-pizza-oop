console.log('pizza factory OOP');



class Pizza {
    constructor(ingredients) {
        this.ingredients = ingredients || 'cheese';
    };
    calculateCost() {
        let cost = 10;
        if (this.ingredients === 'cheese') {
            cost = 10;
        } else {
            let numberOfIngredients = this.ingredients.length;
            cost += (numberOfIngredients * .99);
        }
        return cost;
    };
}

class Order {
    constructor(pizzas) {
        this.pizzas = pizzas;
    };
    calculateTotalOrderCost() {
        let totalCost = 0;
        this.pizzas.forEach((pizza) => {
            let newCost = pizza.calculateCost();
            totalCost += newCost;
        })
        return totalCost;
    }
}



const one = new Pizza();
const two = new Pizza(['sauce', 'sausage', 'anchovies']);
const three = new Pizza(['pepperoni', 'olives']);

const newOrder = new Order([one, two, three]);

console.log(newOrder.calculateTotalOrderCost());