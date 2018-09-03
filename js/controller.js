'use strict';

var controller = (function(){

    var setInitialView = function(){
        game.gameInit();
        view.showPieces(game.getNumberOfPieces(), verifyPiece);
        view.updateData(game.getGameData());
    },

     startGame = function(time){
        game.setIsGameOn(true);
        game.setTimeHighlight(time);
        displayLevel();
     },

     nextLevel = function(){
        game.increaseLevel();
        displayLevel();
     },

     verifyPiece = function(event){
        var id = event.target.id,
            status = game.verifyPiece(id);
        if(status === 1){
            view.highlightCorrectPiece(id);
            view.updateData(game.getGameData());
            game.increaseLevel();
            setTimeout(displayLevel,1000);
        }else if(status === 2){
            view.highlightCorrectPiece(id);
            view.updateData(game.getGameData());
        }else if(status === 3){
            view.highlightInvalidPiece(id);
            setTimeout(pauseError,1);
        }
     },

     // private methods
     displayLevel = function(){
        view.clearBoard();
        view.showPieces(game.getNumberOfPieces(), verifyPiece);
        game.calculatePiecesToGuess();
        view.updateData(game.getGameData());
        view.highlightPieces(game.getPiecesToGuess());
        game.setIsHighlighted(true);
        setTimeout(pauseGame,game.getTimeHighlight());
     },

     pauseError = function(){
         alert('Invalid choice! Game over!');
         game.gameInit();
         startGame(game.getTimeHighlight());
     },

     pauseGame = function(){
        view.showBasicView(game.getNumberOfPieces());
        game.setIsHighlighted(false);
     };

     return {
         'setInitialView': setInitialView,
         'startGame': startGame,
         'verifyPiece': verifyPiece,
         'nextLevel': nextLevel
     }

})();