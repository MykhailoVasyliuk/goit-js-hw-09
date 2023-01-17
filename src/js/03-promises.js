import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formRef = document.querySelector('.form');
const delayRef = document.querySelector('input[name="delay"]');
const stepRef = document.querySelector('input[name=step]');
const amountRef = document.querySelector('input[name="amount"]');

formRef.addEventListener('submit', onPromisesGenerate);

function onPromisesGenerate(evt) {
  evt.preventDefault();

  const amount = Number(amountRef.value);
  const firstDelay = Number(delayRef.value);
  const step = Number(stepRef.value);
  
  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, step * i + firstDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
  
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
     }, delay);
  });
}

