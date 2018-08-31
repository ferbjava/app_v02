'use strict';

var game = (function(){
    var initialNumberOfPieces = 4,
        numberOfPieces,
        timeHighlight,
        numberOfPiecesToGuess,
        piecesToGuess = [],
        piecesGuessed = [],
        isGameOn,
        isHighlighted,

        gameInit = function(){
            numberOfPieces = initialNumberOfPieces;
            isGameOn = false;
            isHighlighted = false;
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
            numberOfPiecesToGuess = parseInt((numberOfPieces-2)/2);
            piecesToGuess.length = 0;
            piecesGuessed.length = 0;
            while(piecesToGuess.length < numberOfPiecesToGuess){
                var tempId = 'piece_'+Math.ceil(Math.random()*numberOfPieces);
                if(!piecesToGuess.includes(tempId)){
                    piecesToGuess.push(tempId);
                }
            }
        },

        getNumberOfPiecesToGuess = function (){
            return numberOfPiecesToGuess;
        },

        getPiecesToGuess = function(){
            return piecesToGuess;
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
                        return 1;
                    } else {
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
        'verifyPiece': verifyPiece
    }
})();