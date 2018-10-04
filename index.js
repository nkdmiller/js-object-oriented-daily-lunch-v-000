// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let customerId = 0;
let deliveryId = 0;
let mealId = 0;
class Neighborhood {
    constructor(name) {
        this.id = ++neighborhoodId;
        this.name = name;
        // if (user) {
        //     this.userId = user.id;
        // }
 
        // insert in the item to the store
        store.neighborhoods.push(this);
    }
    deliveries() {
        return store.deliveries.filter(
            function(delivery) {
                return delivery.neighborhoodId === this.id;
            }.bind(this)
        );
    }
     customers() {
      return store.customers.filter(
        function(customer) {
    
              return customer.neighborhoodId === this.id;
            }.bind(this)
          );
    }
    
}

class Customer {
    constructor(name, neighborhoodId) {
        this.id = ++customerId;
        this.neighborhoodId = neighborhoodId;
        this.name = name;
        // if (user) {
        //     this.userId = user.id;
        // }
 
        // insert in the item to the store
        store.customers.push(this);
    }
    
    deliveries() {
      return store.deliveries.filter(function(delivery){
        return delivery.customerId === this.id;
      }.bind(this)
      );
    }
    meals() {
      return store.meals.filter(function(meal){
        return meal.customerId === this.id;
      }.bind(this)
      );
    }
}

class Meal {
    constructor(title, price) {
        this.id = ++mealId;
        this.title = title;
        this.price = price;
        // if (user) {
        //     this.userId = user.id;
        // }
 
        // insert in the item to the store
        store.meals.push(this);
    }
    
    deliveries() {
      return store.deliveries.filter(function(delivery){
        return delivery.customerId === this.id;
      }.bind(this)
      );
    }
}

class Delivery{
    constructor(mealId, neighborhoodId, customerId) {
        this.id = ++deliveryId;
        this.mealId = mealId;
        this.neighborhoodId = neighborhoodId;
        this.customerId = customerId;
        // if (user) {
        //     this.userId = user.id;
        // }
 
        // insert in the item to the store
        store.deliveries.push(this);
    }
}