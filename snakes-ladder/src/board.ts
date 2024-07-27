import Cell from "./cell";
import Player from "./player";

export default class Board {
    boardArr : Cell[]
    snakeOrLadderIdx : Set<number>
    size:number
    constructor(size:number) {
        this.size = size; 
        let count = 0;
        this.boardArr = Array.from(
            {length:size*size}, 
            () => new Cell(count++)
        );
        this.snakeOrLadderIdx =  new Set()
    }
    getRandomNumber(min:number, max:number) {
        return Math.floor(
            Math.random() * (max - min + 1)
        ) + min;
    }

   
    addLadders(num:number) {
        let  addedLadder = 0;
        while (addedLadder < num) {
            if (this.snakeOrLadderIdx.size >= this.boardArr.length-1) {
                throw new Error("Can not add any more Ladders.");
            }
            const start = this.getRandomNumber(0, this.boardArr.length-1);
            if(start == 0 || start == this.boardArr.length-1) {
                continue;
            }
            const end = this.getRandomNumber(start, this.boardArr.length-1);

            if (start != end && !this.snakeOrLadderIdx.has(start)
                && !this.snakeOrLadderIdx.has(end)) {
                this.snakeOrLadderIdx.add(start);
                this.snakeOrLadderIdx.add(end);
                this.boardArr[start].jump = end;
                addedLadder++;
            }
        }
    }

    addSnakes(num:number) {
        let addedSnake = 0;
        while(addedSnake < num) {
            if (this.snakeOrLadderIdx.size >= this.boardArr.length-1) {
                throw new Error("Can not add any more Snakes.");
            }
            const start = this.getRandomNumber(1, this.boardArr.length-1);
            if(start == 0 || start == this.boardArr.length-1) {
                continue;
            }
            const end  = this.getRandomNumber(1, start);
            if (start != end && !this.snakeOrLadderIdx.has(start)
                && !this.snakeOrLadderIdx.has(end)) {
                this.snakeOrLadderIdx.add(start);
                this.snakeOrLadderIdx.add(end);
                
                this.boardArr[start].jump = end;
                addedSnake++;
            }
        }
    }

    print(players: Player[] = []) {
        const cellWidth = 12; // Adjust if needed for longer player names
        
        // Create a Map of player positions
        const playerPositions = new Map<number, string[]>();
        players.forEach(player => {
            if (!playerPositions.has(player.position)) {
                playerPositions.set(player.position, []);
            }
            playerPositions.get(player.position)!.push(player.name);
        });
    
        for (let i = this.size - 1; i >= 0; i--) {
            const row = [];
            for (let j = 0; j < this.size; j++) {
                const index = i * this.size + j;
                const cell = this.boardArr[index];
                let cellContent = `${cell.index}`;
                if (cell.jump) {
                    cellContent += ` -> ${cell.jump}`;
                }
                
                // Add player markers
                const playersHere = playerPositions.get(index);
                if (playersHere && playersHere.length > 0) {
                    cellContent += `(${playersHere.join(',')})`;
                }
                
                row.push(cellContent.padEnd(cellWidth));
            }
            
            // Reverse even-numbered rows (0-based index, so odd i)
            if (i % 2 !== 0) {
                console.log(row.reverse().join(''));
            } else {
                console.log(row.join(''));
            }
        }
    }
}