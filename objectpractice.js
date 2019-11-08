//restaurant menu random meal maker for objects practice in javascript

let menu={
  _courses: {
    appetizers:[],
    mains:[],
    desserts:[],
  },
  get appetizers(){
    return this._courses.appetizers;
    
  },
  get mains(){
    return this._courses.mains;
},
  get desserts(){
  return this._courses.desserts;
},
  set appetizers(appetizers){
    this._courses.appetizers=appetizers;
  },
   set mains(mains){
    this._courses.mains=mains;
  },
  set desserts(desserts){
    this._courses.desserts=desserts;
  },
  get courses(){
    return{
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts,  
    }
  },

  addDishToCourse(courseName,dishName,dishPrice){
    const dish={
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
   const dishes = this._courses[courseName]; 
   const randomIndex = Math.floor(Math.random() * dishes.length);
   return dishes[randomIndex];
  },
  generateRandomMeal(){
    const appetizer=this.getRandomDishFromCourse('appetizers');
    const main=this.getRandomDishFromCourse('mains');
    const dessert=this.getRandomDishFromCourse('desserts');
    const totalPrice=appetizer.price + main.price + dessert.price;
    return `You order ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers','fries',5.99);
menu.addDishToCourse('appetizers','eggs',2.99);
menu.addDishToCourse('appetizers','salad',1.99);

menu.addDishToCourse('mains','wings',4.99);
menu.addDishToCourse('mains','ribs',7.99);
menu.addDishToCourse('mains','bacon',3.99);

menu.addDishToCourse('desserts','icecream',1.99);
menu.addDishToCourse('desserts','cake',2.99);
menu.addDishToCourse('desserts','fruit',1.99);

const meal= menu.generateRandomMeal();
console.log(meal);
