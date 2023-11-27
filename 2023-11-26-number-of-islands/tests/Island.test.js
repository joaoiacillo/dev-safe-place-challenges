const { Island, Position } = require("../numislands");

describe("Test 4x4 islands", () => {
    it("should return true for the position (1, 2)", () => {
        const grid = [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ];

        const island = Island(grid, Position(2, 1));
        island.add(Position(2, 2));

        expect(island.isPartOfIsland(Position(1, 2))).toBeTruthy();
    });
});
