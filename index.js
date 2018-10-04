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
     passengers() {
      return store.passengers.filter(
        function(passenger) {
          return passenger.trips().filter(
            function(trip) {
              trip.driverId === this.id;
            }.bind(this)
          );
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