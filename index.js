// Class for Breakfast
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // Class for Lunch
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // Class for Dinner
  class Dinner {
    #dessert; // Private property
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert;
    }
  }

  const breakfast = new Breakfast("toast", "coffee");
const lunch = new Lunch("green salad", "tomato soup", "iced tea");
const dinner = new Dinner("Caesar salad", "butternut squash soup", "steak", "chocolate cake");