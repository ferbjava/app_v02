describe("Game", function(){
    it('should spyOn method highlightCorrectPiece - first path', function(){
        // arrange
        var expected_value = 1,
            pieceId = 'anything',
            tempTarget = {
                id: pieceId,
            },
            event = {
                target: tempTarget,
            };
        spyOn(game, "verifyPiece").and.returnValue(expected_value);
        spyOn(view, "highlightCorrectPiece");
        spyOn(view, "updateData");
        spyOn(game, "increaseLevel");

        // act
        controller.verifyPiece(event);

        // assert
        expect(game.verifyPiece()).toBe(expected_value);
        expect(view.highlightCorrectPiece).toHaveBeenCalled();
    });

    it('should spyOn method highlightCorrectPiece - second path', function(){
        // arrange
        var expected_value = 2,
            pieceId = 'anything',
            tempTarget = {
                id: pieceId,
            },
            event = {
                target: tempTarget,
            };
        spyOn(game, "verifyPiece").and.returnValue(expected_value);
        spyOn(view, "highlightCorrectPiece");
        spyOn(view, "updateData");

        // act
        controller.verifyPiece(event);

        // assert
        expect(game.verifyPiece()).toBe(expected_value);
        expect(view.highlightCorrectPiece).toHaveBeenCalled();
    });
});
