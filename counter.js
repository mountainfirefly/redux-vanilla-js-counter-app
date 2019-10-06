const d = document;
const { createStore } = Redux;

function counter(state = 0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//actions
const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

//create store
const store = createStore(counter);

class Counter {
  constructor(options) {
    this.$el = options.el;
    this.store = options.store;
    store.subscribe(this.update.bind(this));
    this.$el.querySelector('#inc')
      .addEventListener('click', this.inc.bind(this));
    this.$el.querySelector('#dec')
      .addEventListener('click', this.dec.bind(this));
  }

  inc() {
    this.store.dispatch(increment())
  }

  dec() {
    this.store.dispatch(decrement())
  }

  update() { 
    this.$el
      .querySelector('#text')
      .innerHTML = store.getState();
  }

  render() {
    this.update();
  }
}

d.addEventListener("DOMContentLoaded", () => {
  const counter = new Counter({
    el: d.getElementById('counter'),
    store
  });
  counter.render();
});

