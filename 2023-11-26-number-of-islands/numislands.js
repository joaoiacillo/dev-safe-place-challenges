const WATER = 0, LAND = 1;

const Position = (x, y) => ({ x, y });

const Cell = (grid, position) => ({
    type: grid[position.y][position.x],
    position
});

const Surroundings = (grid, position) => [
    Cell(grid, Position(position.x, position.y - 1)), // Top
    Cell(grid, Position(position.x + 1, position.y)), // Right
    Cell(grid, Position(position.x, position.y + 1)), // Bottom
    Cell(grid, Position(position.x - 1, position.y)), // Left
];

const Island = (grid, initialPosition) => {
    const positions = [initialPosition];

    function containsPosition(position) {
        for (let islandPosition of positions) {
            if (position.x === islandPosition.x && position.y === islandPosition.y) {
                return true;
            }
        }
        return false;
    }

    return {
        add: (position) => positions.push(position),
        isPartOfIsland: (position) => {
            //if (containsPosition(position)) return true;

            const surroundings = Surroundings(grid, position);
            for (let surrounding of surroundings) {
                if (containsPosition(surrounding.position)) {
                    return true;
                }
            }

            return false;
        },
        size: () => positions.length
    }
}

function numIslands(grid) {
    const islands = [];

    function getCorrespondingIsland(position) {
        for (let island of islands) {
            if (island.isPartOfIsland(position)) {
                return island;
            }
        }
        return null;
    }

    for (let y = 0; y < grid.length; y++) {
        const row = grid[y];

        for (let x = 0; x < row.length; x++) {
            const cell = Cell(grid, Position(x, y));
            if (cell.type === WATER) continue;

            const correspondingIsland = getCorrespondingIsland(cell.position);

            if (correspondingIsland === null) {
                islands.push(Island(grid, cell.position));
            } else {
                correspondingIsland.add(cell.position);
            }
        }
    }

    return islands.filter(i => i.size() > 1).length;
}

module.exports = { numIslands, Surroundings, Position, Island };
