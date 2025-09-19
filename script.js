// To-Do List App
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const filterBtns = document.querySelectorAll('.filter-btn');

let tasks = [];
let filter = 'all';

// Load tasks from localStorage
function loadTasks() {
    const saved = localStorage.getItem('tasks');
    tasks = saved ? JSON.parse(saved) : [];
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks
function renderTasks() {
    taskList.innerHTML = '';
    let filtered = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });
    filtered.forEach((task, idx) => {
        const li = document.createElement('li');
        li.className = 'task-item' + (task.completed ? ' completed' : '');
        li.setAttribute('data-id', task.id);

        // Animation for adding
        li.classList.add('adding');
        setTimeout(() => li.classList.remove('adding'), 300);

        // Left side: checkbox + text
        const left = document.createElement('div');
        left.className = 'task-left';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleComplete(task.id));

        const text = document.createElement('input');
        text.type = 'text';
        text.value = task.text;
        text.className = 'task-text';
        text.setAttribute('readonly', true);
        text.addEventListener('dblclick', () => startEdit(text, task.id));
        text.addEventListener('blur', () => finishEdit(text, task.id));
        text.addEventListener('keydown', e => {
            if (e.key === 'Enter') text.blur();
        });

        left.appendChild(checkbox);
        left.appendChild(text);

        // Actions: edit, delete
        const actions = document.createElement('div');
        actions.className = 'task-actions';

        const editBtn = document.createElement('button');
        editBtn.className = 'action-btn';
        editBtn.innerHTML = '✏️';
        editBtn.title = 'Edit';
        editBtn.addEventListener('click', () => startEdit(text, task.id));

        const delBtn = document.createElement('button');
        delBtn.className = 'action-btn';
        delBtn.innerHTML = '🗑️';
        delBtn.title = 'Delete';
        delBtn.addEventListener('click', () => deleteTask(task.id, li));

        actions.appendChild(editBtn);
        actions.appendChild(delBtn);

        li.appendChild(left);
        li.appendChild(actions);
        taskList.appendChild(li);
    });
}

// Add new task
function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;
    const newTask = {
        id: Date.now(),
        text,
        completed: false
    };
    tasks.push(newTask);
    saveTasks();
    taskInput.value = '';
    renderTasks();
}

// Toggle complete
function toggleComplete(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
}

// Edit task
function startEdit(input, id) {
    input.removeAttribute('readonly');
    input.focus();
    input.select();
}
function finishEdit(input, id) {
    input.setAttribute('readonly', true);
    const newText = input.value.trim();
    if (!newText) {
        deleteTask(id);
        return;
    }
    tasks = tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
    );
    saveTasks();
    renderTasks();
}

// Delete task with animation
function deleteTask(id, liEl) {
    if (liEl) {
        liEl.classList.add('removing');
        setTimeout(() => {
            tasks = tasks.filter(task => task.id !== id);
            saveTasks();
            renderTasks();
        }, 300);
    } else {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
    }
}

// Filter tasks
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filter = btn.getAttribute('data-filter');
        renderTasks();
    });
});

// Add task on button click or Enter
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') addTask();
});

// Initial load
loadTasks();
renderTasks();
