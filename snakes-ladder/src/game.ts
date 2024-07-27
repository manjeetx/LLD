import Board from "./board";
import Dice from "./dice";
import Player from "./player";
import { Queue } from '@datastructures-js/queue';

export default class Game {
    players:Player[] = []
    board!:Board
    dice!:Dice

    addBoard(size:number) {
        this.board = new Board(size);
        return this;
    }
    addLadders(num:number) {
        this.board.addLadders(num);
        return this
    }
    addSnakes(num:number) {
        this.board.addSnakes(num);
        return this
    }
    setNumberOfDice(num:number) {
        this.dice = new Dice(num)
        return this;
    }
    addPlayer(name:string) {
        this.players.push(new Player(name));
        return this;
    }
    validateGame() {
        if(!this.board) {
            throw new Error("Board does not exists.")
        }
        if (!this.dice) {
            throw new Error("Die|s does not exists.")
        }
        if (this.players.length < 2) {
            throw new Error("Min 2 Players are needed.")
        }
    }
    async sleep(time:number) {
        await new Promise((resolve,reject)=> {
            setTimeout(() => {
                resolve("");
            }, time)
        })
    }
    async play() {
        this.validateGame();
        const queue = new Queue(this.players);
       
        while(!queue.isEmpty()) {
            const player = queue.dequeue()
            const diceResult = this.dice.roll()
            console.log(`${player.name} dice : ${diceResult}`)
            let nextPosition = player.position + diceResult;
            if (nextPosition >= this.board.boardArr.length) {
                queue.enqueue(player)
                continue;
            }
            const jump = this.board.boardArr[nextPosition].jump;
            if (jump) {
                nextPosition = jump;
                if (jump > player.position ) {
                    console.log(`LADDER ${player.name} :  ${player.position} -> ${jump}`);
                } else {
                    console.log(`SNAKE ${player.name} :  ${player.position} -> ${jump}`);
                }
            }
            player.position = nextPosition;
            if (player.position == this.board.boardArr.length-1) {
                console.log(`
                    PLAYER ${player.name} WINS !!!
                `)
                break;
            }
            queue.enqueue(player)
            
            this.board.print(this.players)
            console.log('\n\n');
            await this.sleep(800)
        }
    }

}