export interface Tile {
    id: number;
    color: string;
    isFlipped: boolean;
    matched: boolean;
} 

export interface GameState {
    tiles: Tile[];
    flippedTiles: Tile[];
    matchedTiles: Tile[];
    isGameOver: boolean;
}


