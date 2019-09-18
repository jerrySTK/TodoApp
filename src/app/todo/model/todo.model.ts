export class Todo {
    id: number;
    description: string;
    completed: boolean;

    constructor(description: string) {
        this.description = description;
        this.completed = false;
        this.id = Date.now();
    }
}

