const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
output: process.stdout});

let toDoList = [];

function welcome () {
    console.log(`\n\n                Welcome to ToDo CLI \n               ----------------------`);
}

function view() {
    console.log(`\n To Do List: \n`);
    toDoList.forEach(function (task, index) {
        console.log(`${index} ${task.join(' ')}`);
    });
    mainMenu();
}

function addTask() {
    console.log('What would you like to add?');
    rl.question('>', (newTask) => {
        toDoList.push(['[ ]', newTask]);
        mainMenu();
    });
}

function complete(userInput) {
    let taskIndexNumber = userInput.slice(1);
    let task = toDoList[taskIndexNumber];
    task[0] = '[✓]';
    console.log(`You completed task: ${task[1]}`);
    mainMenu();    
}

function deleteIt(userInput) {
    let taskIndexNumber = userInput.slice(1); //to target which element to delete in array
    toDoList.splice(taskIndexNumber, 1); // deletes the task
    console.log(`Task ${taskIndexNumber} was succesfully deleted`); 
    mainMenu();
}

function action(userInput) {

    if (userInput == 'q') {
        rl.close();
    } else if (userInput == 'n') {
        addTask();
    } else if (userInput == 'v') {
        view();
    } else if (userInput[0] == 'c') {
        if (toDoList.length !== 0) {
            complete(userInput);
        } else {
            console.log('There are no tasks to complete');
            mainMenu();
        }
    } else if (userInput[0] == 'd') {
        if (toDoList.length !== 0) {
            deleteIt(userInput);
        } else {
            console.log('There are no tasks to complete');
            mainMenu();
        }
    } else {
        console.log("that is not an option");
        mainMenu();
    }        
}

function mainMenu() {
    rl.question(`(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit \n >`, menuSelection => {
        let userInput = menuSelection.toLowerCase();
        action(userInput);
    });
}


welcome();
mainMenu();