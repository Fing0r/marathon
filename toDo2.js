

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
  if (~isTaskValid(task)) {
    return console.log(`task "${task}" already exists `);
  }

  list.push({
    name: task,
    status: DEFAULT_STATUS,
    priority: DEFAULT_PRIORITY
  })
}

function changeStatus(task, status) {
  list.find((elem) => (elem.name === task) && (elem.status = status))
}

function isTaskValid(task) {
  return list.findIndex((item) => item.name === task)
}

function deleteTask(task) {
  return (~isTaskValid(task) ? list.splice(isTaskValid(task), 1) : console.log(`there is no such "${task}" task`))
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
  console.log(result);
}


addTask("3234")
addTask("32334")
addTask("323у34")
//console.log(list);
//deleteTask("3234");
//console.log(list) 
changeStatus("test", "To do")
changeStatus("32334", "In progress")
//console.log(list);

showBy("status")