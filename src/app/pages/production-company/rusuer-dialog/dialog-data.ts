export interface DialogData {
    callback(): void;
    message: string;
    cancelCallback(): void;
}
