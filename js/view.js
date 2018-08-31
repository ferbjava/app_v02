var view = ( function() {
    var numberOfPieces;

        setNumberOfPieces = function(pieces){
            numberOfPieces = pieces;
        };

        clearBoardGame = function(){
            // document.body.remove();???
        };

        highlightPieces = function(piecesId){
            for(i = 0; i < piecesId.length; i++){
                var piece = "piece_"+piecesId[i].toString();
                var selectedPiece = document.getElementById(piece);
                    selectedPiece.setAttribute("class", "highlightedPiece");
            }
        };

        showBasicView = function(){
            for(i = 1; i <= numberOfPieces; i++){
                var piece = "piece_"+i.toString();
                var selectedPiece = document.getElementById(piece);
                selectedPiece.setAttribute("class", "regularPiece");
            }
        };



        addPieces = function(){
            var parent = document.getElementById('board');
            var existingPiecesNo = document.getElementsByClassName('regularPiece').length;
            var tempId = existingPiecesNo + 1;
            var temporaryPiec = document.createElement("div");
                temporaryPiec.className = 'regularPiece';
                temporaryPiec.setAttribute('id','piece_' + tempId);
                // temporaryPiec.setAttribute('onclick', 'controller.verifyPiece');
            var pieceText = document.createTextNode("id = " + tempId);
                temporaryPiec.appendChild(pieceText);
                parent.appendChild(temporaryPiec);
        };

    return {
        'setNumberOfPieces': setNumberOfPieces,
        'clearBoardGame': clearBoardGame,
        'highlightPieces': highlightPieces,
        'showBasicView': showBasicView,

        'addPieces': addPieces
    }
})();