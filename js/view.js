'use strict';

var view = ( function() {
    var numberOfPieces,

        setNumberOfPieces = function(pieces){
            numberOfPieces = pieces;
        },

        showPieces = function(){
            var parent = document.getElementById('board');
                for(var i = 1; i <= numberOfPieces; i++){
                    var tempPiece = document.createElement("div"),
                        tempId = 'piece_'+ i;
                        tempPiece.className = 'regularPiece';
                        tempPiece.setAttribute('id', tempId);
                        tempPiece.addEventListener('click',function(){controller.verifyPiece(this.id);});
                        parent.appendChild(tempPiece);
            }
        },

        clearBoard = function(){
            for(var i = 1; i <= numberOfPieces; i++){
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

        showBasicView = function(){
            for(var i = 1; i <= numberOfPieces; i++){
                var piece = "piece_"+i.toString(),
                    selectedPiece = document.getElementById(piece);
                    selectedPiece.setAttribute("class", "regularPiece");
            }
        };

    return {
        'showPieces':showPieces,
        'setNumberOfPieces': setNumberOfPieces,
        'clearBoard': clearBoard,
        'highlightPieces': highlightPieces,
        'showBasicView': showBasicView,
    }
})();