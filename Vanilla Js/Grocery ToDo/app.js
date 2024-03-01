const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit options
let editFlag = false;
let editElement;
let editID = '';

// event listeners
// form submit
form.addEventListener('submit', addItem);
// clear button
clearBtn.addEventListener('click', clearItems);
// load local storage
window.addEventListener('DOMContentLoaded', setUpItems);

// event functions
function addItem(e) {
  e.preventDefault();

  const value = grocery.value;
  const id = new Date().getTime();

  if (value && !editFlag) {
    createListItems(id, value);

    // show container (hidden)
    container.classList.add('show-container');

    // alert
    displayAlert('item added to the list', 'success');

    // add to local storage
    addToLocalStorage(id, value);

    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;

    // alert
    displayAlert('item edited', 'success');

    // edit local storage
    editLocalStorage(editID, value);

    // set back to default
    setBackToDefault();
  } else {
    // alert
    displayAlert('please enter value', 'danger');
  }
}

function displayAlert(text, action) {
  // display alert
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clear items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item');

  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }

  container.classList.remove('show-container');

  displayAlert('empty list', 'danger');

  setBackToDefault();
  localStorage.removeItem('list');
}

// edit item
function editItem(e) {
  const item = e.currentTarget.parentElement.parentElement;

  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;

  // set form value
  grocery.value = editElement.innerText;
  editFlag = true;
  editID = item.dataset.id;
  submitBtn.textContent = 'edit';
}

// delete item
function deleteItem(e) {
  const item = e.currentTarget.parentElement.parentElement;
  const id = item.dataset.id;
  list.removeChild(item);

  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }

  displayAlert('item removed', 'danger');
  setBackToDefault();

  // remove from local storage
  removeFromLocalStorage(id);
}

// set back to default
function setBackToDefault() {
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}

// LOCAL STORAGE
// add to local storage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();

  items.push(grocery);

  localStorage.setItem('list', JSON.stringify(items));
}

// remove from local storage
function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter((item) => {
    if (item.id != id) {
      return item;
    }
  });

  localStorage.setItem('list', JSON.stringify(items));
}

// edit local storage
function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map((item) => {
    if (item.id == id) {
      item.value = value;
    }

    return item;
  });

  localStorage.setItem('list', JSON.stringify(items));
}

// get local storage
function getLocalStorage() {
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

// set up list items from local storage
function setUpItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach((item) => {
      createListItems(item.id, item.value);
    });

    container.classList.add('show-container');
  }
}

// create list items
function createListItems(id, value) {
  // create article
  const article = document.createElement('article');
  article.setAttribute('data-id', id);
  article.classList.add('grocery-item');

  // create item
  const item = `<p class="title">${value}</p>

                  <div class="btn-container">
                      <button type="button" class="edit-btn">&plus;</button>
                      <button type="button" class="delete-btn">&times;</button>
                  </div>
      `;

  // add item to article
  article.innerHTML = item;

  // event listeners for dynamically added buttons
  const editBtn = article.querySelector('.edit-btn');
  const deleteBtn = article.querySelector('.delete-btn');

  editBtn.addEventListener('click', editItem);
  deleteBtn.addEventListener('click', deleteItem);

  // add article to list
  list.appendChild(article);
}
