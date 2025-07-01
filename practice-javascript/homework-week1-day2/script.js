function updateClock() {
  const now = new Date();
  const clock = document.getElementById('clock');
  const greeting = document.getElementById('greeting');
  clock.textContent = now.toLocaleTimeString();
  const h = now.getHours();
  if (h < 12) greeting.textContent = 'Good Morning';
  else if (h < 18) greeting.textContent = 'Good Afternoon';
  else greeting.textContent = 'Good Evening';
}
setInterval(updateClock, 1000);
updateClock();

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');
const todoError = document.getElementById('todoError');
const filters = document.querySelectorAll('.filters button');
let todos = [];

function renderTodos(filter='all') {
  todoList.innerHTML = '';
  todos.filter(t => {
    if (filter === 'completed') return t.completed;
    if (filter === 'incomplete') return !t.completed;
    return true;
  }).forEach((t, idx) => {
    const li = document.createElement('li');
    li.className = t.completed ? 'completed':'';
    const span = document.createElement('span');
    span.textContent = t.text;
    const chk = document.createElement('input');
    chk.type = 'checkbox';
    chk.checked = t.completed;
    chk.addEventListener('change', () => {
      todos[idx].completed = chk.checked;
      renderTodos(filter);
    });
    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.addEventListener('click', () => {
      todos.splice(idx,1);
      renderTodos(filter);
    });
    li.append(chk, span, del);
    todoList.append(li);
  });
}

// add todo
addTodoBtn.addEventListener('click', () => {
  const text = todoInput.value.trim();
  if (!text) {
    todoError.textContent = 'Please enter a task';
    return;
  }
  todoError.textContent = '';
  todos.push({text, completed:false});
  todoInput.value = '';
  renderTodos(getFilter());
});

// filters
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderTodos(getFilter());
  });
});
function getFilter() {
  return document.querySelector('.filters .active').dataset.filter;
}

// Sticky Notes
const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesContainer = document.getElementById('notesContainer');
const noteError = document.getElementById('noteError');
const colors = ['#fffa82','#ff9ff3','#feca57','#48dbfb','#1dd1a1'];

addNoteBtn.addEventListener('click', () => {
  const text = noteInput.value.trim();
  if (!text) {
    noteError.textContent = 'Please enter a note';
    return;
  }
  noteError.textContent = '';
  const note = document.createElement('div');
  note.className = 'note';
  note.style.background = colors[Math.floor(Math.random()*colors.length)];
  note.textContent = text;
  const btn = document.createElement('button');
  btn.className = 'delete-note';
  btn.textContent = '×';
  btn.addEventListener('click', () => note.remove());
  note.appendChild(btn);
  notesContainer.appendChild(note);
  noteInput.value = '';
});
