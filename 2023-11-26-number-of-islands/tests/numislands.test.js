const { numIslands } = require("../numislands");

describe("Test 4x4 islands", () => {
    it ("should count 0 islands", () => {
        const input = [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
        ];

        expect(numIslands(input)).toEqual(0);
    });

    it ("should count 1 island", () => {
        const input = [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
        ];

        expect(numIslands(input)).toEqual(1);
    });
});

describe("Test 6x6 islands", () => {
    it("should count 0 islands", () => {
        const input = [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0],
        ];

        expect(numIslands(input)).toEqual(0);
    });

    it("should count 1 island", () => {
        const input = [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 0],
            [0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0],
        ];

        expect(numIslands(input)).toEqual(1);
    });

    it("should count 2 islands", () => {
        const input = [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 0],
        ];

        expect(numIslands(input)).toEqual(2);
    });

    it("should count 4 islands", () => {
        const input = [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
        ];

        expect(numIslands(input)).toEqual(4);
    });
});

describe("Test 10x10 islands", () => {
    it("should count 8 islands", () => {
        const input = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];

        expect(numIslands(input)).toEqual(8);
    });
});
