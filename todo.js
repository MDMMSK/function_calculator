const list = {
	"disassemble the post": "In Progress",
	"lunch": "To Do",
	"fitness": "To Do",
	"make a bed": "Done",
	"write a post": "To Do",
};
function changeStatus(task, status) {
	list[task] = status;
	console.log(list);
};

function addTask(newtask) {
	list[newtask] = "To Do";
	console.log(list);
}

function deleteTask(taskname) {
	delete list[taskname];
	console.log(list);
}

let todoList = 'To Do:';
let doneList = 'Done:';
let progressList = 'In Progress:';

function showList() {
	for (let key in list) {
		switch (list[key]) {
			case "To Do":
				todoList = `${todoList}\n   ${key},`
				break;
			case "Done":
				doneList = `${doneList}\n   ${key},`
				break;
			case "In Progress":
				progressList = `${progressList}\n   ${key},`
		}
	}
	console.log(todoList);
	console.log(doneList);
	console.log(progressList);

}
changeStatus('fitness', 'In Progress');
addTask('lern english');
deleteTask('lunch');
showList();