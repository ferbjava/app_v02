'use strict';

var game = (function(){
    var initialNumberOfPieces = 4,
        numberOfPieces,
        timeHighlight,
        // numberOfPiecesToGuess,
        piecesToGuess = [],
        piecesGuessed = [],
        isGameOn,
        isHighlighted,
        gameData = {
            level: 0,
            numberOfPiecesToGuess: 0,
            remainingPiecesToGuess: 0
        },

        gameInit = function(){
            // level = 0;
            numberOfPieces = initialNumberOfPieces;
            isGameOn = false;
            isHighlighted = false;
            gameData.level = 0;
            gameData.numberOfPiecesToGuess = 0;
            gameData.remainingPiecesToGuess = 0;
        },

        getNumberOfPieces = function (){
            return numberOfPieces;
        },

        increasePiecesNo = function(){
            numberOfPieces++;
        },

        setTimeHighlight = function(time){
            timeHighlight = time;
        },

        getTimeHighlight = function(){
            return timeHighlight;
        },

        calculatePiecesToGuess = function (){
            // numberOfPiecesToGuess = parseInt((numberOfPieces-2)/2);
            gameData.numberOfPiecesToGuess = parseInt((numberOfPieces-2)/2);
            gameData.remainingPiecesToGuess = gameData.numberOfPiecesToGuess;
            piecesToGuess.length = 0;
            piecesGuessed.length = 0;
            while(piecesToGuess.length < gameData.numberOfPiecesToGuess){
                var tempId = 'piece_'+Math.ceil(Math.random()*numberOfPieces);
                if(!piecesToGuess.includes(tempId)){
                    piecesToGuess.push(tempId);
                }
            }
        },

        getNumberOfPiecesToGuess = function (){
            return gameData.numberOfPiecesToGuess;
        },

        getPiecesToGuess = function(){
            return piecesToGuess;
        },

        increaseLevel = function(){
            gameData.level++;
        },

        getLevel = function(){
            return gameData.level;
        },

        getGameData = function(){
            return gameData;
        },

        setIsHighlighted = function(value){
            isHighlighted = value;
        },

        getIsHighlighted = function(){
            return isHighlighted;
        },

        setIsGameOn = function(value){
            isGameOn = value;
        },

        getIsGameOn = function(){
            return isGameOn;
        },

        verifyPiece = function(id){
            if(!isHighlighted){
                if(piecesToGuess.includes(id)){
                    if(piecesGuessed.includes(id)){
                        return 3;
                    }
                    piecesGuessed.push(id);
                    if(piecesToGuess.length===piecesGuessed.length){
                        gameData.remainingPiecesToGuess--;
                        return 1;
                    } else {
                        gameData.remainingPiecesToGuess--;
                        return 2;
                    }
                }else{
                    return 3;
                }
            }
        };

    return {
        'gameInit': gameInit,

        'getNumberOfPieces': getNumberOfPieces,
        'increasePiecesNo': increasePiecesNo,

        'setTimeHighlight': setTimeHighlight,
        'getTimeHighlight': getTimeHighlight,

        'calculatePiecesToGuess': calculatePiecesToGuess,
        'getNumberOfPiecesToGuess': getNumberOfPiecesToGuess,
        'getPiecesToGuess': getPiecesToGuess,
        'setIsHighlighted': setIsHighlighted,
        'getIsHighlighted': getIsHighlighted,
        'setIsGameOn': setIsGameOn,
        'getIsGameOn': getIsGameOn,
        'verifyPiece': verifyPiece,
        'increaseLevel': increaseLevel,
        'getLevel': getLevel,
        'getGameData': getGameData

    }
})();