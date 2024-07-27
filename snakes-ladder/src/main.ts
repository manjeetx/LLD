import Game from "./game";


class Main {
    run() {
        const game:Game = new Game()

        //Builder Pattern 
        game.addBoard(10)
            .addSnakes(8)
            .addLadders(8)
            .setNumberOfDice(1)
            .addPlayer('p1')
            .addPlayer('p2');
       
        game.play()

    }
    
}
new Main().run()