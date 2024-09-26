export interface Tile {
    id: number;
    color: string;
    isFlipped: boolean;
    isMatched: boolean;
} 


export enum GameModes {
    BI = 1,
    QUADRO = 2,
    OCTO = 3 
}

export interface GameState {
    tiles: Tile[];
    flippedTiles: Tile[];
    isGameOver: boolean;
    gameMode: GameModes 
}


