// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и password,
// в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища,
// и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы,
// а также выводи объект с полями email, password и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.

// import throttle from "lodash.throttle";

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     input: document.querySelector('input'),
//     textArea: document.querySelector('textarea')
// }
// console.log(refs.form)
// console.log(refs.input)
// console.log(refs.textArea)

// const LOCAL = "feedback-form-state";

// const value = {};

// const item  = localStorage.getItem(LOCAL);

// function fillingInput() {
//     if (JSON.parse(item)) {
//         // console.log(JSON.parse(addData))
//         refs.input.value = JSON.parse(item).email;
//         refs.textArea.value = JSON.parse(item).message;
//     }
// }
// fillingInput()

import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textArea: document.querySelector('textarea'),
};

const LOCAL = 'feedback-form-state';
const value = {};
const item = localStorage.getItem(LOCAL);

function localInput() {
  if (JSON.parse(item)) {
    console.log(JSON.parse(item));
    refs.input.value = JSON.parse(item).email;
    refs.textArea.value = JSON.parse(item).message;
  }
}
localInput();

refs.form.addEventListener('submit', remove);
function remove(event) {
  event.preventDefault();
  console.log(JSON.parse(item));
  event.currentTarget.reset();
  localStorage.removeItem(LOCAL);
}

refs.form.addEventListener('input', throttle(reloadInput, 500));
function reloadInput(event) {
  // console.log(event.target)
  value[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL, JSON.stringify(value));
}
