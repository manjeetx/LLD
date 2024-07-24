import PlayingSymbol from "./playing-symbol/playing.symbol";


export default class Player {
    name:string 
    symbol:PlayingSymbol
    constructor(name:string, symbol:PlayingSymbol) {
        this.name = name;
        this.symbol = symbol;
    }
}