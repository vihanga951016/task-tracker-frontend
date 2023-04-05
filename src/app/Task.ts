export interface Task {
    id? : number;
    title: string;
    description: string;
    addedDate: string;
    done: boolean;
    disabled: boolean;
    compulsory: boolean;
}