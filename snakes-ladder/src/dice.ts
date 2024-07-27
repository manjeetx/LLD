

export default class Dice {
    numDice:number 
    constructor(numDice:number) {
        this.numDice = numDice;
    }
    roll() : number {
        let count = 0;
        for(let i=0;i<this.numDice;i++) {
            count += Math.ceil(Math.random() * 6);
        }
        return count;
    }
}