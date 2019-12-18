class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index]
    }
}

new ArrayOfAnything<string>(['a', 'b', 'c'])
new ArrayOfAnything<number>([1,2,3,4])

new ArrayOfAnything([2,3,45,5,true,'string'])

const printStrings = (arr: string[]): void => {
    for (let i=0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

const printNumbers = (arr: number[]): void => {
    for (let i=0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i=0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

printAnything<string>(['a', 'b', 'c'])
printAnything([1,2,3,4])

// Generic Constraints
class Car {
    print() {
        console.log('I am a house')
    }
}

class House {
    print() {
        console.log('I am a house')
    }
}

interface Printable {
    print(): void
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for(let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}