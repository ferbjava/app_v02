var game = (function(){
    var inside_field = 'hello madafaka!',
        initialNumberOfPieces = 4,
        numberOfPieces,
        numberOfPiecesToGuess,
        piecesToGuess = [],

        startGame = function(){
            numberOfPieces = initialNumberOfPieces;
            inside_field = 'hello madafaka!';
        },

        getNumberOfPieces = function (){
            return numberOfPieces;
        },

        calculatePiecesToGuess = function (){
            numberOfPiecesToGuess = parseInt((numberOfPieces-2)/2);
            piecesToGuess.length = 0;
            while(piecesToGuess.length < numberOfPiecesToGuess){
                var tempId = Math.ceil(Math.random()*numberOfPieces);
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



        setField = function (newField){
            inside_field = newField;
        },

        getField = function(){
          return inside_field;
        },

        printField = function (){
            console.log(inside_field);
        };

    return {
        'startGame': startGame,
        'getNumberOfPieces': getNumberOfPieces,
        'calculatePiecesToGuess': calculatePiecesToGuess,
        'getNumberOfPiecesToGuess': getNumberOfPiecesToGuess,
        'getPiecesToGuess': getPiecesToGuess,

        'setField': setField,
        'getField': getField,
        'printField': printField
    }
})();