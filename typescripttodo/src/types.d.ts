interface TodoType {
  id: string;
  task: string;
  isDone: boolean;
}

interface ITodoList {
  todos: TodoType[];
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}


interface IListItem {
  item: TodoType;
}

type AddFn = (text: string) => void;

type ToggleFn = (item: TodoType) => void;

type DeleteFn = (id: string | number) => void;