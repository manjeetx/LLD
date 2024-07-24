import PlayingSymbol from "./playing.symbol";
import { SymbolType } from "./playing.symbol.type";
import { SymbolO } from "./symbol.o";
import { SymbolX } from "./symbol.x";




export default class PlayerSymbolFactory {
    static create(symbol:string) {
        switch(symbol) {
            case SymbolType.X:
                return new SymbolX();
            case SymbolType.O:
                return new SymbolO();
            default:
                throw Error("Symbol does npt exist.");
        }
    }

}