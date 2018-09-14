
// Define global const's
const ul = document.querySelector('.todo-list');
const input = document.querySelector('.add-text[type="text"]');
const btn = document.querySelector('.heading-btn');
const criteria = {
  isComplete: el => el.classList.contains,
  isRemove: el => el && el.matches('a'),
  isAdd: el => event.key === 'Enter',
  isInput: el => input.style.display === 'none'
};

// create helper functions
completeHandler = event => {
  const el = event.target;
  if (criteria.isComplete(el)) {
    event.stopPropagation();
    el.classList.toggle('completed');
  } else {
    event.preventDefault();
  }
}

removeHandler = event => {
  const el = event.target;
  if (criteria.isRemove(el)) {
    event.stopPropagation();
    el.parentNode.parentNode.removeChild(el.parentNode);
  } else {
    event.preventDefault();
  }
}

addHandler = event => {
  const el = event.target;
  const li = document.createElement('li');
  const a = document.createElement('a');
  const text = input.value;
  li.innerHTML = text;
  a.setAttribute('class', 'todo-list__link');
  a.setAttribute('href', '#');
  a.innerHTML = '&times';
  li.setAttribute('class', 'todo-list__item');
  if (criteria.isAdd(el)) {
    console.log()
    event.stopPropagation();
    ul.appendChild(li).appendChild(a);
    input.value = '';
  }
}

inputHandler = event => {
  el = event.target;
  if (criteria.isInput(el)) {
    input.style.display = 'block';
    event.stopPropagation();
  } else {
    input.style.display = 'none';
    event.preventDefault();
  }
}

// call eventListeners
ul.addEventListener('click', completeHandler, false);
ul.addEventListener('click', removeHandler, false);
input.addEventListener('keypress', addHandler, false);
btn.addEventListener('click', inputHandler, false);
