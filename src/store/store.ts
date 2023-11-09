import { configureStore, combineReducers } from '@reduxjs/toolkit'
import episodeReducer from './reducers/EpisodeSlice'

const rootReducer = combineReducers({
    episodeReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
