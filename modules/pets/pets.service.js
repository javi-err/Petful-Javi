const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    let petsArray = []
    petsArray.push(pets.cats.show());
    petsArray.push(pets.dogs.show());
    return petsArray;
  },

  dequeue(type) {
    pets[type].enqueue(pets[type].dequeue())
  }
}