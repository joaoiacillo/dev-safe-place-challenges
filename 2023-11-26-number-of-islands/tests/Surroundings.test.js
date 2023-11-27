const { Surroundings, Position } = require("../numislands");

describe("Test 3x3 islands", () => {
    it("should return the surroundings as (1, 0, 1, 0)", () => {
        const input = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ];

        expect(Surroundings(input, Position(1, 1)).map(s => s.type)).toEqual([1, 0, 1, 0]);
    });

    it("should return the correct positions", () => {
        const input = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ];

        expect(Surroundings(input, Position(1, 1)).map(s => s.position)).toEqual([
            Position(1, 0),
            Position(2, 1),
            Position(1, 2),
            Position(0, 1),
        ]);
    });
});
