describe("Game", function(){
   it('should return value of the inside field of game module', function(){
      var test_value;

      game.startGame();
      test_value = game.getField();

      expect(test_value).toBe('hello madafaka!');
   });

   it('should change field value', function(){
      var expected_value = 'Czesc!';

      game.startGame();
      game.setField(expected_value);

      expect(game.getField()).toBe(expected_value);
   });

    it('should return number of pieces to guess', function(){
        var expected_value = 1;

        game.startGame();
        game.calculatePiecesToGuess();

        expect(game.getNumberOfPiecesToGuess()).toBe(expected_value);
    });

    it('should return pieces to guess', function(){
        var expected_value = 1;

        game.startGame();
        game.calculatePiecesToGuess();

        expect(game.getPiecesToGuess().length).toBe(expected_value);
    })

});