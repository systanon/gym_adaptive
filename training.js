
function getWeekDay(date) {
  let days = ['spaa', 'yoga', 'capoeira', 'powerlifting', 'weightlifting', 'bodybilding', 'crossfit'];

  return days[date.getDay()];
}
let tr = document.getElementById('training');
let day1 = new Date();
tr.innerHTML+=getWeekDay(day1);