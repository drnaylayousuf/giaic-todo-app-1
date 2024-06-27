#! /usr/bin/env node
///////////////////////
import inquirer from "inquirer";
import chalk from "chalk";
import colors from 'colors';
console.log(chalk.red(`${"*".repeat(50)}`));
console.log(colors.rainbow(`\n\t WELCOME TO TODO LIST APPLICATION \t\n`));
console.log(chalk.red(`${"*".repeat(50)}`));
let todos = [];
let condition = true;
while (condition) {
    let todosQuestions = await inquirer.prompt([
        {
            name: "chooseone",
            type: "list",
            message: "Select one of the options:",
            choices: ["Addto", "Delete", "Update", "Read list", "End"],
        }
    ]);
    if (todosQuestions.chooseone === "Addto") {
        let addtoTodo = await inquirer.prompt([
            {
                name: "adding",
                type: "input",
                message: "What do you want to add to your todo list?",
            }
        ]);
        if (addtoTodo.adding.trim() !== '') {
            todos.push(addtoTodo.adding);
            console.log(chalk.green("Task added successfully: ", addtoTodo.adding));
        }
        else {
            console.log(chalk.red("Task cannot be empty. Please provide a task."));
        }
        // todos.push(addtoTodo.adding);
        // console.log(todos);
    }
    else if (todosQuestions.chooseone === "Delete") {
        let deletingTask = await inquirer.prompt([
            {
                name: "deleting",
                type: "input",
                message: "Which task do you want to delete?"
            }
        ]);
        const valueToDelete = deletingTask.deleting;
        const indexToDelete = todos.indexOf(valueToDelete);
        if (indexToDelete >= 0) {
            todos.splice(indexToDelete, 1);
            console.log(chalk.red(`Task deleted successfully.`));
        }
        else {
            console.log(chalk.yellow(`Task not found in the list.`));
        }
        console.log(todos);
    }
    else if (todosQuestions.chooseone === "Update") {
        let updatingTask = await inquirer.prompt([
            {
                name: "oldTask",
                type: "input",
                message: "Which task do you want to update?"
            },
            {
                name: "newTask",
                type: "input",
                message: "Enter the updated task:"
            }
        ]);
        const indexToUpdate = todos.indexOf(updatingTask.oldTask);
        if (indexToUpdate >= 0) {
            todos[indexToUpdate] = updatingTask.newTask;
            console.log(chalk.blue(`Task updated successfully.`));
        }
        else {
            console.log(chalk.yellow(`Task not found in the list.`));
        }
        console.log(todos);
    }
    else if (todosQuestions.chooseone === "Read list") {
        console.log(chalk.cyan("Todo List:"));
        for (let i = 0; i < todos.length; i++) {
            console.log(chalk.rgb(255, 165, 0)(`${i + 1}. ${todos[i]}`));
        }
    }
    else if (todosQuestions.chooseone === "End") {
        console.log("Final Todo List:");
        for (let i = 0; i < todos.length; i++) {
            console.log(chalk.magenta(` ${todos[i]}`));
            condition = false; // exiting the loop 
        }
    }
    //    else if (todosQuestions.chooseone === "End") {
    //     console.log(chalk.green(`Final Todo List: ${todos.join(', ')}`)); // Added chalk to color the final list
    //     condition = false; // Exiting the loop
    // }
}
;
