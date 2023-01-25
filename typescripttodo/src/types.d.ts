interface TodoType{
    id : string
    task: string
    isDone: boolean
}

interface ITodoList {
    todos: TodoType[];
    
}