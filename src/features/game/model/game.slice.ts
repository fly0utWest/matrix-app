import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Tile, GameState } from '../../../shared/models';
import { createTiles } from '../lib/createTiles';
import { isTileValid } from '../../../shared/lib';

const initialState: GameState = {
  tiles: [],
  flippedTiles: [],
  isGameOver: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame(state) {
      state.tiles = createTiles(2);
      state.flippedTiles = [];
      state.isGameOver = false;
    },

    flipTile(state, action: PayloadAction<number>) {
      const tile = state.tiles.find((t: Tile) => t.id === action.payload);
      if (tile && isTileValid(state, tile)) {
        tile.isFlipped = true;
        state.flippedTiles.push(tile);
      }
    },

    flipBackTile(state, action: PayloadAction<number>) {
      const tile = state.tiles.find((t) => t.id === action.payload);
      if (tile) {
        tile.isFlipped = false;
      }
    },

    clearFlippedTiles(state) {
      state.flippedTiles = [];
    },

    matchTiles(state) {
      state.flippedTiles.forEach((tile) => {
        tile.isMatched = true;

        state.tiles.forEach((tile => {
          if (state.flippedTiles.some(t => t.id === tile.id)) {
            tile.isMatched = true;
          }
        }))
      });
      state.flippedTiles = [];

      if (state.tiles.every(t => t.isMatched === true)) {
        state.isGameOver = true;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetFlippedTilesAsync.fulfilled, (state) => {
    });
  },
});

export const resetFlippedTilesAsync = createAsyncThunk<void, void, { state: { game: GameState } }>(
    'game/resetFlippedTilesAsync',
    async (_, { getState, dispatch }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      const { flippedTiles } = getState().game;
      flippedTiles.forEach((tile) => {
        dispatch(flipBackTile(tile.id));
      });
  
      dispatch(clearFlippedTiles());
    }
  );
  

export const { resetGame, flipTile, flipBackTile, clearFlippedTiles, matchTiles } = gameSlice.actions;
export default gameSlice.reducer;
