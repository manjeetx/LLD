import PlayingSymbol from "./playing.symbol";
import { SymbolType } from "./playing.symbol.type";


export class SymbolO extends PlayingSymbol{
    constructor() {
        super(SymbolType.O)
    }
}