export class Left<L, R> {
    readonly value: L;

    constructor(value: L) {
        this.value = value;
    }

    public isLeft(): this is Left<L, R> {
        return true;
    }

    public isRight(): this is Right<L, R> {
        return false;
    }
}

export class Right<L, R> {
    readonly value: R;

    constructor(value: R) {
        this.value = value;
    }

    public isRight(): this is Right<L, R> {
        return true;
    }

    public isLeft(): this is Left<L, R> {
        return false;
    }
}

export type Either<L, R> = Left<L, R> | Right<L, R>;
