const STATUS = {
  DONE: "Done",
  IN_PROGRESS: "In progress",
  TO_DO: "To do"
}
const PRIORITY = {
  LOW: "low",
  HIGH: "high"
}

const DEFAULT_STATUS = STATUS.TO_DO
const DEFAULT_PRIORITY = PRIORITY.LOW

const list = [{
    name: 'create a post',
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.LOW
  },
  {
    name: 'test',
    status: STATUS.DONE,
    priority: PRIORITY.HIGH
  },
]

function addTask(task) {
  const errorMessage = `task "${task}" already exists `
  if (~isTaskValid(task)) return console.log(errorMessage)
  

  list.push({
    name: task,
    status: DEFAULT_STATUS,
    priority: DEFAULT_PRIORITY
  })
}

function deleteTask(task) {
  const errorMessage = `there is no such "${task}" task`
  if (!~isTaskValid(task)) return console.log(errorMessage)

  list.splice(isTaskValid(task), 1)
}

function changeStatus(task, status) {
  const errorMessage = `there is no such "${task}" task`
  if (!~isTaskValid(task)) return console.log(errorMessage)

  list[isTaskValid(task)].status = status
}

function changePriority(task, priority) {
  const errorMessage = `there is no such "${task}" task`
  if (!~isTaskValid(task)) return console.log(errorMessage)

  list[isTaskValid(task)].priority = priority
}

function isTaskValid(task) {
  return list.findIndex((item) => item.name === task)
}

function showBy(sort) {
  const sortObject = sort === "status" ? STATUS : PRIORITY
  const group = {}

  for (let key in sortObject) {
    group[sortObject[key]] = ""
  }

  list.map(function (item) {
    group[item[sort]] += ` "${item.name}",\n`;
  })

  let result = ""

  for (let key in group) {
    result += `${key}:\n${group[key] || " -\n"}\n`
  }

  console.log(result.trim())
}


addTask("test 1")
deleteTask("test 1")
addTask("test 2")
deleteTask("tes")
addTask("test 2")
changePriority("test 2", "high")
changePriority("test", "low")
changeStatus("test", "To do")
changeStatus("test 2", "In progress")
console.log('\n');
showBy("status")
console.log('\n');
showBy("priority")