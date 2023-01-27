/* Data Structures*/
const restaurant = {
  resname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Object Destructuring

const { resname, openingHours, categories } = restaurant; // write exact property names
console.log(resname, openingHours, categories);

const [first, , second] = restaurant.categories;

// console.log(first, second);

const [starter, mainCourse] = restaurant.order(2, 1);

// console.log(starter, mainCourse);

//Nested destructuring
const nested = [2, 3, [4, 5]];
const [a, , [b, c]] = nested;

// console.log(a, b, c);

//Default Values

const [p, q, r = 1] = [8, 9];
console.log(p, q, r);
