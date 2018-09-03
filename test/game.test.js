describe("Game", function(){
    it('should return pieces to guess', function(){
        // arrange
        var expected_value = 4;

        // act
        game.gameInit();

        // assert
        expect(game.getNumberOfPieces()).toBe(expected_value);
    })
});