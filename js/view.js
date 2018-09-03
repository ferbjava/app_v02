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
            var pToRemove = document.getElementById("board").childElementCount;
            for(var i = 1; i <= pToRemove; i++){
                var tempId = 'piece_'+i,
                    pieceToRemove = document.getElementById(tempId);
                pieceToRemove.parentNode.removeChild(pieceToRemove);
            }
        },

        highlightPieces = function(piecesId){
            for(var i = 0; i < piecesId.length; i++){
                var pieceId = piecesId[i],
                    selectedPiece = document.getElementById(pieceId);
                selectedPiece.className = 'piece ' + 'highlightedPiece';
            }
        },

        highlightCorrectPiece = function(pieceId){
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
        },

        updateData = function(data){
            document.getElementById('level').innerHTML = data.level;
            document.getElementById('piecesNo').innerHTML = data.numberOfPiecesToGuess;
            document.getElementById('piecesToGuess').innerHTML = data.remainingPiecesToGuess;
        },

        showMessage = function(message){
            alert(message);
        };

    return {
        'showPieces':showPieces,
        'clearBoard': clearBoard,
        'highlightPieces': highlightPieces,
        'highlightCorrectPiece': highlightCorrectPiece,
        'highlightInvalidPiece': highlightInvalidPiece,
        'showBasicView': showBasicView,
        'updateData':updateData,
        'showMessage': showMessage
    }
})();