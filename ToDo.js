const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
}

function changeStatus(task, status = 'To Do') {
  if (task in list) {
    list[task] = status
  }
}

function addTask(task) {
  list[task] = 'To Do'
}

function deleteTask(task) {
  delete list[task]
}

function showList() {
  let toDo = ''
  let done = ''
  let inProgress = ''
  const notTask = `\n -`

  for (let task in list) {

    switch (list[task]) {
      case 'To Do':
        toDo += `\n "${task}",`
        break;
      case 'In Progress':
        inProgress += `\n "${task}",`
        break;
      case 'Done':
        done += `\n "${task}",`
        break;
    }
  }
  console.log(`Todo: ${toDo || notTask}\nIn Progress: ${inProgress || notTask}\nDone: ${done || notTask}`);
  
  // console.log(`Todo: ${toDo || notTask}`);
  // console.log(`In Progress: ${inProgress || notTask}`);
  // console.log(`Done: ${done || notTask}`);
}



changeStatus("write a post", "Done")

addTask('have a walk')
addTask('have a walk1')
changeStatus('have a walk1')
changeStatus('have a walk5')

addTask('have a walk2')
changeStatus('have a walk2', 'In Progress')
addTask('have a walk3')
changeStatus('have a walk3', 'Done')

deleteTask('have a walk')

showList()