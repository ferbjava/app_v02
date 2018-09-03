var controller = (function(){

    var setInitialView = function(){
        game.gameInit();
        view.showPieces(game.getNumberOfPieces(), verifyPiece);
        view.updateData(game.getGameData());
    },

     startGame = function(time){
        if(!game.getIsHighlighted()){
            game.setIsGameOn(true);
            game.setTimeHighlight(time);
            displayLevel();
        }
     },

     pauseGame = function(){
         view.showBasicView(game.getNumberOfPieces());
         game.setIsHighlighted(false);
     },

     addPieces = function(){
        view.addPieces();
     },

     verifyPiece = function(event){
        var id = event.target.id,
            status = game.verifyPiece(id);
        if(status === 1){
            view.highlightCorrectPiece(id);
            view.updateData(game.getGameData());
            game.increasePiecesNo();
            setTimeout(displayLevel,1000);
        }else if(status === 2){
            view.highlightCorrectPiece(id);
            view.updateData(game.getGameData());
        }else if(status ===3){
            view.highlightInvalidPiece(id);
            view.showMessage('Invalid choice! Game over!');
            view.clearBoard(game.getNumberOfPieces());
            setInitialView();
            startGame(game.getTimeHighlight());
        }
     },

     // private methods
     displayLevel = function(){
            view.clearBoard(game.getNumberOfPieces()-1, game.getLevel());
            game.increaseLevel();
            view.showPieces(game.getNumberOfPieces(), verifyPiece);
            game.calculatePiecesToGuess();
            view.updateData(game.getGameData());
            view.highlightPieces(game.getPiecesToGuess());
            game.setIsHighlighted(true);
            setTimeout(pauseGame,game.getTimeHighlight());
     };

     return {
         'setInitialView': setInitialView,
         'startGame': startGame,
         'addPieces': addPieces,
         'verifyPiece': verifyPiece,
     }

})();