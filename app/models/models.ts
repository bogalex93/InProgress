export interface Folder{
    name: string;
    notes: Note[];
    isDefault?: boolean;
    selected?: boolean;
}

export interface Note{
    title: string;
    lines: NoteLine[];    
    important: boolean;
    date: Date;
    target: Date;
}

export interface NoteLine{
    content: string;
    done: boolean;
    inProgress: boolean;
    important: boolean;
    canceled: boolean;
    date: Date;
}