import { Episodes } from '../../types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface EpisodeState {
    episodes: Episodes[]
    isLoading: boolean
    error: string | null
}

const initialState: EpisodeState = {
    episodes: [],
    isLoading: false,
    error: null,
}

export const episodeSlice = createSlice({
    name: 'episodes',
    initialState,
    reducers: {
        episodeFetching(state) {
            state.isLoading = true
        },

        episodeFetchingSuccess(state, action: PayloadAction<Episodes[]>) {
            state.episodes = action.payload
            state.error = null
            state.isLoading = false
        },

        episodeFetchingError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.isLoading = false
        },
    },
})

export default episodeSlice.reducer
