import { configureStore } from "@reduxjs/toolkit";
import {gameReducer} from "../../features/game/model/";

export const mainStore = configureStore({
        reducer: {
                game: gameReducer
        },
})

export type RootState = ReturnType<typeof mainStore.getState>
export type AppDispatch = typeof mainStore.dispatch;