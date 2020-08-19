export declare type Iterator<T> = {
    next: () => ({
        done: boolean;
        value?: T;
    });
};
