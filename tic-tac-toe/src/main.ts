import Game from "./game"


class Main{
    play() {
        const game:Game = new Game(3).configure();
        


        game.play()
    }
}

new Main().play()