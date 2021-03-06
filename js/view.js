'use strict';

var view = ( function() {
    var showPieces = function(numberOfPieces, cb){
            var parent = document.getElementById('board');
            for(var i = 1; i <= numberOfPieces; i++){
                var tempPiece = document.createElement("div"),
                    tempId = 'piece_' + i;
                tempPiece.className = 'piece ' + 'regularPiece';
                tempPiece.setAttribute('id', tempId);
                tempPiece.addEventListener('click',cb);
                parent.appendChild(tempPiece);
            }
        },

        clearBoard = function(){
            var piecesToRemove = document.getElementById("board").childElementCount;
            for(var i = 1; i <= piecesToRemove; i++){
                var tempId = 'piece_'+i,
                    pieceToRemove = document.getElementById(tempId);
                pieceToRemove.parentNode.removeChild(pieceToRemove);
            }
        },

        highlightPieces = function(piecesId){
            disableButtons();
            for(var i = 0; i < piecesId.length; i++){
                var pieceId = piecesId[i],
                    selectedPiece = document.getElementById(pieceId);
                selectedPiece.className = 'piece ' + 'highlightedPiece';
            }
        },

        highlightCorrectPiece = function(pieceId){
            disableButtons();
            var selectedPiece = document.getElementById(pieceId);
            selectedPiece.className = 'piece ' + 'correctPiece';
        },

        highlightInvalidPiece = function(pieceId){
            var selectedPiece = document.getElementById(pieceId);
            selectedPiece.className = 'piece ' + 'invalidPiece';
        },

        showBasicView = function(numberOfPieces){
            for(var i = 1; i <= numberOfPieces; i++){
                var piece = "piece_"+i.toString(),
                    selectedPiece = document.getElementById(piece);
                selectedPiece.className = 'piece ' + 'regularPiece';
            }
            enableButtons();
        },

        updateData = function(data){
            document.getElementById('level').innerHTML = data.level;
            document.getElementById('piecesNo').innerHTML = data.numberOfPiecesToGuess;
            document.getElementById('piecesToGuess').innerHTML = data.remainingPiecesToGuess;
        },

        // Private methods
        disableButtons = function(){
            document.getElementById("highlightButton").disabled = true;
            document.getElementById("nextLevelButton").disabled = true;
        },

        enableButtons = function(){
            document.getElementById("highlightButton").disabled = false;
            document.getElementById("nextLevelButton").disabled = false;
        };

    return {
        'showPieces':showPieces,
        'clearBoard': clearBoard,
        'highlightPieces': highlightPieces,
        'highlightCorrectPiece': highlightCorrectPiece,
        'highlightInvalidPiece': highlightInvalidPiece,
        'showBasicView': showBasicView,
        'updateData':updateData,
    }
})();