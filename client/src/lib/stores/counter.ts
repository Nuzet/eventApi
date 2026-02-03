import { makeAutoObservable } from 'mobx';

export default class Counter {
    title = 'Counter';
    count = 1;
    events: string[] = [
        `initial count is ${this.count}`
    ]

    constructor() {
        makeAutoObservable(this)
    }

    increment = (amount = 1) => {
        this.count += amount;
        this.events.push(`Incremented by ${amount} and now we have a ${this.count}`)
    }

    decrement = (amount = 1) => {
        this.count -= amount
        this.events.push(`Decremented by ${amount} and now we have a ${this.count}`)
    }

    get eventCount() {
        return this.events.length
    }
}