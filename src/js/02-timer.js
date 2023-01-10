import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    inputDate: document.querySelector("#datetime-picker"),
    startBtn: document.querySelector("button[data-start]"),
    timer: document.querySelector(".timer"),
    days: document.querySelector("span[data-days]"),
    hours: document.querySelector("span[data-hours]"),
    minutes: document.querySelector("span[data-minutes]"),
     seconds:   document.querySelector("span[data-seconds]"),  
}

refs.startBtn.setAttribute('disabled', 'true');
refs.startBtn.addEventListener('click', onStartTimer);

function onStartTimer() {
    let insertDate = refs.inputDate.value;
    let currentDate = new Date;
    console.log(currentDate)
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
          Notify.failure('Please choose a date in the future');
          return;
      } else {
          refs.startBtn.disabled = false;
     }
  },
};

flatpickr(refs.inputDate, options);

function convertMs(ms) { 
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
 
  const days = Math.floor(ms / day); 
  const hours = Math.floor((ms % day) / hour); 
  const minutes = Math.floor(((ms % day) % hour) / minute); 
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
