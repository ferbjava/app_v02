describe("Game", function(){
    it('should return initial values of the application', function(){
        // arrange
        var expected_number_of_pieces = 4,
            expected_level = 1,
            expected_pieces_to_guess = 0,
            expected_remaining_pieces = 0;

        // act
        game.gameInit();

        // assert
        expect(game.getNumberOfPieces()).toBe(expected_number_of_pieces);
        expect(game.getLevel()).toBe(expected_level);
        expect(game.getGameData().level).toBe(expected_level);
        expect(game.getGameData().numberOfPiecesToGuess).toBe(expected_pieces_to_guess);
        expect(game.getGameData().remainingPiecesToGuess).toBe(expected_remaining_pieces);
    });

    it('should return initial time', function () {
        // arrange
        var expected_time_of_highlight = 1000;

        // act
        game.setTimeHighlight(expected_time_of_highlight);

        // assert
        expect(game.getTimeHighlight()).toBe(expected_time_of_highlight);
    });

    it('should return boolean "isGameOn"', function () {
        // arrange
        var expected_boolean = true;

        // act
        game.setIsGameOn(expected_boolean);

        // assert
        expect(game.getIsGameOn()).toBe(expected_boolean);
    });

    it('should return boolean "isHighlighted"', function () {
        // arrange
        var expected_boolean = true;

        // act
        game.setIsHighlighted(expected_boolean);

        // assert
        expect(game.getIsHighlighted()).toBe(expected_boolean);
    });

    it('should return 2 pieces to guess', function () {
        // arrange
        var expected_pieces_to_guess = 2;
        game.gameInit();
        game.increaseLevel();
        game.increaseLevel();

        // act
        game.calculatePiecesToGuess();

        // assert
        expect(game.getPiecesToGuess().length).toBe(expected_pieces_to_guess);
    });

    it('should validate clicked piece to status "1" - passed level', function () {
        var expected_status = 1;
        game.gameInit();
        game.setIsGameOn(true);
        game.calculatePiecesToGuess();

        // act
        var pieceId = game.getPiecesToGuess()[0],
            status = game.verifyPiece(pieceId);

        // assert
        expect(status).toBe(expected_status);
    });

    it('should validate clicked piece to status "2" - continue', function () {
        var expected_pieces_to_guess = 2,
            expected_status = 2;
        game.gameInit();
        game.increaseLevel();
        game.increaseLevel();
        game.setIsGameOn(true);
        game.calculatePiecesToGuess();

        // act
        var pieceId = game.getPiecesToGuess()[0],
            status = game.verifyPiece(pieceId);

        // assert
        expect(game.getPiecesToGuess().length).toBe(expected_pieces_to_guess);
        expect(status).toBe(expected_status);
    });

    it('should validate clicked piece to status "3" - double click', function () {
        var expected_pieces_to_guess = 2,
            expected_status_01 = 2,
            expected_status_02 = 3;
        game.gameInit();
        game.increaseLevel();
        game.increaseLevel();
        game.setIsGameOn(true);
        game.calculatePiecesToGuess();

        // act
        var pieceId = game.getPiecesToGuess()[0],
            status01 = game.verifyPiece(pieceId),
            status02 = game.verifyPiece(pieceId);

        // assert
        expect(game.getPiecesToGuess().length).toBe(expected_pieces_to_guess);
        expect(status01).toBe(expected_status_01);
        expect(status02).toBe(expected_status_02);
    });

    it('should validate clicked piece to status "3" - invalid piece', function () {
        var expected_pieces_to_guess = 1,
            expected_status_01 = 3,
            testedPiece = 'piece_5';
        game.gameInit();
        game.setIsGameOn(true);
        game.calculatePiecesToGuess();

        // act
        var status01 = game.verifyPiece(testedPiece);

        // assert
        expect(game.getPiecesToGuess().length).toBe(expected_pieces_to_guess);
        expect(status01).toBe(expected_status_01);
    })
});