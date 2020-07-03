const doc = document;

const $task = doc.querySelector('#task'),
  $date = doc.querySelector('#date'),
  $time = doc.querySelector('#time'),
  $btnSaveTask = doc.querySelector('#btn-save'),
  $btnTaskColor = doc.querySelectorAll('.btn-color'),
  $taskContent = doc.querySelectorAll('.task');

let taskNotCmplete = {},
  color = '#e55039';

$btnSaveTask.addEventListener('click', () => {
  taskNotCmplete = {
    name: $task.value,
    date: $date.value,
    time: $time.value,
    color: color,
  };
  if (
    taskNotCmplete.name &&
    taskNotCmplete.date &&
    taskNotCmplete.time &&
    taskNotCmplete.color
  ) {
    $taskContent[1].innerHTML += `<div class="task__item" style="background-color:${taskNotCmplete.color}"><div class="task__head"><h3 class="task__item-title">${taskNotCmplete.name}</h3></div><div class="task__body"><div class="temp"><span class="time-input">1h</span><span class="time-input">22m</span><span class="time-input">56s</span></div><div class="btns-task-container"><button class="btn-task" id="btn-edit"><i class="fas fas fa-pen"></i></button><button class="btn-task" id="btn-delete"><i class="far fa-trash-alt"></i></button></div></div><div class="task__footer"><button class="btn-complete" id="btn-complete"><i class="fas fa-check"></i></button></div></div>`;

    $task.value = '';
    $date.value = '';
    $time.value = '';
  }
});

$btnTaskColor.forEach((btn) => {
  btn.addEventListener('click', () => {
    const atr = btn.getAttribute('color');
    color = atr;
    $btnTaskColor.forEach((btnTask) => {
      btnTask.classList.remove('btn-task--active');
      btnTask.innerHTML = '';
    });
    btn.classList.add('btn-task--active');
    btn.innerHTML = `<i class="fas fa-check"></i>`;
    console.log(color);
  });
});
