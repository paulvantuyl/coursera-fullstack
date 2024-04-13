//
// Breafast menu
//
const breakfastMenu = ['Pancakes: $12.99', 'Eggs Benedict: $15.99', 'Oatmeal: $5.99', 'Fritatta: $11.99'];
const mainCoursMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Use .map() and string concatenation to join generated HTML strings into one 
// cohesive string with .join
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>#${index + 1} ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

//
// Main course menu
//
let mainCourseItem = '';

mainCoursMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

//
// Dessert menu
//
let dessertItem = '';

for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}

document.getElementById('dessertMenuItems').innerHTML = dessertItem;
