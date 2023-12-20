const todoList = () => {
  let all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.completed && item.dueDate < today);
  };

  const dueToday = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => item.dueDate && new Date(item.dueDate).toISOString().split("T")[0] === today);
  };

  const dueLater = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.completed && item.dueDate > today);
  };

  const toDisplayableList = (list) => {
    const today = new Date().toISOString().split("T")[0];

    return list
      .map((item) => {
        const dueText = item.dueDate && new Date(item.dueDate).toISOString().split("T")[0] !== today ? ` ${item.dueDate}` : "";
        const completionStatus = item.completed ? "[x]" : "[ ]";
        return `${completionStatus} ${item.title}${dueText}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// Example usage and output
const myTodoList = todoList();

myTodoList.add({ title: 'Submit assignment', dueDate: '2023-12-19' });
myTodoList.add({ title: 'Pay rent', dueDate: new Date().toISOString().split("T")[0] });
myTodoList.add({ title: 'Service Vehicle' });
myTodoList.add({ title: 'File taxes', dueDate: '2023-12-21' });
myTodoList.add({ title: 'Pay electric bill', dueDate: '2023-12-21' });

myTodoList.markAsComplete(1);

const overdueItems = myTodoList.overdue();
const dueTodayItems = myTodoList.dueToday();
const dueLaterItems = myTodoList.dueLater();

console.log("My Todo-list\n");

console.log("Overdue");
console.log(myTodoList.toDisplayableList(overdueItems));

console.log("\nDue Today");
console.log(myTodoList.toDisplayableList(dueTodayItems));

console.log("\nDue Later");
console.log(myTodoList.toDisplayableList(dueLaterItems));
