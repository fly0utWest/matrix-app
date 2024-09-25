export interface Tile {
    id: number;
    color: string;
    isFlipped: boolean;
    isMatched: boolean;
} 

export interface GameState {
    tiles: Tile[];
    flippedTiles: Tile[];
    isGameOver: boolean;
}


