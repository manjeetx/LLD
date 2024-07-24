
import Board from "./board";
import Player from "./player";
import { Queue } from '@datastructures-js/queue';
import readline from 'readline';
import PlayerSymbolFactory from "./playing-symbol/player.symbol.factory";
import { SymbolType } from "./playing-symbol/playing.symbol.type";

export default class Game {
    players:Player[]= [];
    board:Board;
    rl: readline.Interface;
    constructor(size:number) {
        this.board = new Board(size);
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    addPlayer(player:Player) {
        this.players.push(player)
    }
    configure() {
        // Added player 1
        this.addPlayer(
            new Player(
                "Player 1", 
                PlayerSymbolFactory.create(SymbolType.X)
        ));
        // Added player 2
        this.addPlayer(
            new Player(
                "Player 2", 
                PlayerSymbolFactory.create(SymbolType.O)
        ));
        return this;
    }

    askQuestion(question: string): Promise<string> {
        return new Promise((resolve) => {
            this.rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }

    async play() {
        if (this.players.length < 2) {
            throw new Error("Please add atleast 2 Players..")
        }

        this.board.print()
        const queue = new Queue(this.players)
        while(!queue.isEmpty())  {
            const player =  queue.front()
            const question = `${player.name} please enter position for symbol ${player.symbol.symbolType} ? `
            const answer = await this.askQuestion(question);
            const added = this.board.addPice(parseInt(answer), player.symbol);
            if (!added) {
                console.log("Invalid position or already occupied.");
                continue
            }
            this.board.print()
            if(this.board.checkIfGameIsOver(parseInt(answer))) {
                console.log(`GAME OVER!! ${player.name} WINS !!`);
                break;
            }
            if (this.board.availablePos.size == 0) {
                console.log("GAME OVER !!! DRAW !!!")
                break;
            }

            queue.dequeue()
            queue.enqueue(player)
        }

        this.rl.close();
    }
}