import PlayingSymbol from "./playing-symbol/playing.symbol"


export default class Board {
    size:number
    board: string [][]
    availablePos:Set<number>
    constructor(size:number) {
        this.size = size
        let count = 0;
        this.board = Array.from({length:size},() => 
            Array.from({length:size},() => `${++count}`)
        );
        this.availablePos = new Set();
        for(let i=1;i<=count;i++) {
            this.availablePos.add(i);
        }
    }

    addPice(pos:number, symbol:PlayingSymbol): Boolean {
        if(!this.availablePos.has(pos)) {
            return false;
        }
        const index =  pos-1
        const x = Math.floor(index/this.size);
        const y = index % this.size

        this.board[x][y] = symbol.symbolType;
        this.availablePos.delete(pos)
        return true
    }
    checkIfGameIsOver(pos: number): boolean {
        const index = pos - 1;
        const row = Math.floor(index / this.size);
        const col = index % this.size;
        const symbol = this.board[row][col];
    
        // Check row
        if (this.checkRow(row, symbol)) return true;
    
        // Check column
        if (this.checkColumn(col, symbol)) return true;
    
        // Check diagonals only if the move is on a diagonal
        if (row === col || row + col === this.size - 1) {
            if (this.checkDiagonals(symbol)) return true;
        }
    
        return false;
    }
    
    private checkRow(row: number, symbol: string): boolean {
        return this.board[row].every(cell => cell === symbol);
    }
    
    private checkColumn(col: number, symbol: string): boolean {
        return this.board.every(row => row[col] === symbol);
    }
    
    private checkDiagonals(symbol: string): boolean {
        let mainDiagonal = true;
        let antiDiagonal = true;
    
        for (let i = 0; i < this.size; i++) {
            if (this.board[i][i] !== symbol) mainDiagonal = false;
            if (this.board[i][this.size - 1 - i] !== symbol) antiDiagonal = false;
            if (!mainDiagonal && !antiDiagonal) return false;
        }
    
        return mainDiagonal || antiDiagonal;
    }
    print(): void {
        console.log("Available Positions:");
        this.printMatrix(true);
        
        console.log("\nCurrent State:");
        this.printMatrix(false);
    }
    /**
     * some fancy printing not needed
    */
    private printMatrix(showAvailable: boolean): void {
        const cellWidth = this.size * this.size > 9 ? 4 : 3; // Increased cell width
        const separator = "+" + ("─".repeat(cellWidth) + "+").repeat(this.size);
        console.log(separator);
        
        for (let i = 0; i < this.size; i++) {
            let row = "|";
            for (let j = 0; j < this.size; j++) {
                const pos = i * this.size + j + 1;
                let cell = "";
                if (showAvailable) {
                    cell = this.availablePos.has(pos) ? pos.toString() : " ";
                } else {
                    cell = this.availablePos.has(pos) ? " " : this.board[i][j];
                }
                // Center-align the content within the cell
                const padding = cellWidth - cell.length;
                const leftPad = Math.floor(padding / 2);
                const rightPad = padding - leftPad;
                row += " ".repeat(leftPad) + cell + " ".repeat(rightPad) + "|";
            }
            console.log(row);
            console.log(separator);
        }
    }
    
}