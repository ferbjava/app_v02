'use strict';

var view = ( function() {
    var showPieces = function(numberOfPieces, cb){
            var parent = document.getElementById('board');
            for(var i = 1; i <= numberOfPieces; i++){
                var tempPiece = document.createElement("div"),
                    tempId = 'piece_'+ i;
                tempPiece.className = 'regularPiece';
                tempPiece.setAttribute('id', tempId);
                tempPiece.addEventListener('click',cb);
                parent.appendChild(tempPiece);
            }
        },

        clearBoard = function(numberOfPieces, level){
            var piecesToRemove;
            if(level === 0){
                piecesToRemove = numberOfPieces + 1;
            } else{
                piecesToRemove = numberOfPieces;
            }
            for(var i = 1; i <= piecesToRemove; i++){
                var tempId = 'piece_'+i,
                    pieceToRemove = document.getElementById(tempId);
                pieceToRemove.parentNode.removeChild(pieceToRemove);
            }
        },

        highlightPieces = function(piecesId){
            for(var i = 0; i < piecesId.length; i++){
                var pieceId = piecesId[i],
                    selectedPiece = document.getElementById(pieceId);
                selectedPiece.setAttribute("class", "highlightedPiece");
            }
        },

        highlightCorrectPiece = function(pieceId){
            var selectedPiece = document.getElementById(pieceId);
            selectedPiece.setAttribute("class", "correctPiece");
        },

        highlightInvalidPiece = function(pieceId){
            var selectedPiece = document.getElementById(pieceId);
            selectedPiece.setAttribute("class", "invalidPiece");
        },

        showBasicView = function(numberOfPieces){
            for(var i = 1; i <= numberOfPieces; i++){
                var piece = "piece_"+i.toString(),
                    selectedPiece = document.getElementById(piece);
                selectedPiece.setAttribute("class", "regularPiece");
            }
        },
        updateData = function(level){
            document.getElementById('level').innerHTML = level;
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