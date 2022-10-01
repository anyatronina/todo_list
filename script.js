const list = document.querySelector('.list'),
      listTasks = list.querySelectorAll('.list-item'),
      addForm = document.querySelector('.add_task'),
      btn = addForm.querySelector('button'),
      addTask = addForm.querySelector('input'),
      listDB = [];
let deleteBtn = list.querySelectorAll('button');

function add() {
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            listDB.splice(i, 1);
            
            list.innerHTML = '';
            for (let key in listDB) {
                list.innerHTML += `<div class="list-item">${listDB[key]}<button class="delete notActive"></button></div>`;
            }
            add();
            
        });
    });
}

addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (addTask.value) {
        if (e.target) {
            list.innerHTML += `<div class="list-item">${addTask.value}<button class="delete notActive"></button></div>`;
            listDB.push(addTask.value);
        }
        e.target.reset();

        add();
    }
});

list.addEventListener('mouseover', (e) => {
    list.querySelectorAll('button').forEach(item => {
        item.classList.remove('notActive');
        item.classList.add('active');
    });
});

list.addEventListener('mouseout', (e) => {
    list.querySelectorAll('button').forEach(item => {
        item.classList.add('notActive');
        item.classList.remove('active');
    });
});


// document.querySelectorAll('.active').forEach((btn, i) => {
//     btn.addEventListener('click', (e) => {
//         console.log(deleteBtn);

//         if (e.target == btn) {
//             listDB.splice(i, 1);
//             list.innerHTML = '';
            
//             for (let key in listDB) {
//                 list.innerHTML += `<div class="list-item">${key}<button class="delete notActive"></button></div>`;
//             }

//         }
//     });
// });

// listTasks.forEach((task, i) => {
//     task[i].addEventListener('mousemove', (e) => {
//         // deleteBtn[i].style.cssText = `background: black`;
//     });
// });

// list.forEach((task, i) => {
//     task[i].addEventListener('mousemove', (e) => {
//         console.log('dfgdfg');
//     });
// });