'use strict';

var game = (function(){
    var initialNumberOfPieces = 4,
        numberOfPieces,
        timeHighlight,
        numberOfPiecesToGuess,
        level,
        piecesToGuess = [],
        piecesGuessed = [],
        isGameOn,
        isHighlighted,

        gameInit = function(){
            level = 0;
            numberOfPieces = initialNumberOfPieces;
            isGameOn = false;
            isHighlighted = false;
        },

        getNumberOfPieces = function (){
            // if(level == 0){
            //     return numberOfPieces +1;
            // }
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

        increaseLevel = function(){
            level++;
        },

        getLevel = function(){
            return level;
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
        'verifyPiece': verifyPiece,
        'increaseLevel': increaseLevel,
        'getLevel': getLevel

    }
})();