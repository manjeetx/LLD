import PlayingSymbol from "./playing.symbol";
import { SymbolType } from "./playing.symbol.type";


export class SymbolX extends PlayingSymbol{
    constructor() {
        super(SymbolType.X)
    }
}