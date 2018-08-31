var controller = (function(){

    startApp = function(){
        game.startGame();
        view.setNumberOfPieces(game.getNumberOfPieces());
        game.calculatePiecesToGuess();
        view.highlightPieces(game.getPiecesToGuess());
        setTimeout(view.showBasicView,2000);
        // setTimeout(view.showBasicView(game.getNumberOfPieces()),2000);
    };

    addPieces = function(){
        view.addPieces();
    };

    verifyPiece = function(){

    };

    return {
        'startApp': startApp,
        'addPieces': addPieces,
        'verifyPiece': verifyPiece
    }

})();