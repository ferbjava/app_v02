var controller = (function(){

    var setInitialView = function(){
        game.gameInit();
        view.setNumberOfPieces(game.getNumberOfPieces());
        view.showPieces();
    },

     startGame = function(time){
        if(!game.getIsHighlighted()){
            game.setIsGameOn(true);
            game.setTimeHighlight(time);

            view.clearBoard();
            displayLevel();
            // game.calculatePiecesToGuess();
            // view.highlightPieces(game.getPiecesToGuess());
            // game.setIsHighlighted(true);
            // setTimeout(pauseGame,game.getTimeHighlight());
        }
     },

     displayLevel = function(){
        view.setNumberOfPieces(game.getNumberOfPieces());
        view.showPieces();

        game.calculatePiecesToGuess();
        view.highlightPieces(game.getPiecesToGuess());
        game.setIsHighlighted(true);
        setTimeout(pauseGame,game.getTimeHighlight());
      },

     pauseGame = function(){
         view.showBasicView();
         game.setIsHighlighted(false);
     },

     addPieces = function(){
        view.addPieces();
     },

     verifyPiece = function(id){
        var status = game.verifyPiece(id);
        if(status === 1){
            view.clearBoard();
            game.increasePiecesNo();
            displayLevel();
        }else if(status === 2){

        }else{
            //game over!
        }
     };

     return {
        'setInitialView': setInitialView,
        'startGame': startGame,
         'displayLevel': displayLevel,
        'addPieces': addPieces,
        'verifyPiece': verifyPiece,
     }

})();