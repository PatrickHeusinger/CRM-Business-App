export class Todo {
   

    todoTitle: string;
    todoDescription: string;

    constructor(obj?: any) {
       
        this.todoTitle = obj ? obj. todoTitle : '';
        this.todoDescription = obj ? obj. todoDescription : '';

    }

    public toJSON(){
        return {
            todoTitle: this.todoTitle,
            todoDescription: this.todoDescription
        }
       }

}