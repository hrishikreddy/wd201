const todoList = () => {
  const all = [];
  
  const add = (todoItem) => {
    all.push(todoItem);
  };
  
  const markAsComplete = (index) => {
    if (all[index]) {
      all[index].completed = true;
    }
  };

  const overdue = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.completed && item.dueDate < today);
  };

  const dueToday = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => item.dueDate === today);
  };

  const dueLater = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.completed && item.dueDate > today);
  };

  const toDisplayableList = (list) => {
    const today = new Date().toISOString().split("T")[0]; // Move today variable inside the function
    
    return list
      .map((item) => {
        const dueText = item.dueDate && item.dueDate !== today ? ` ${item.dueDate}` : "";
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
    toDisplayableList
  };
};

module.exports = todoList;
