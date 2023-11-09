/* eslint-disable @typescript-eslint/no-explicit-any */
import { URL_SERVER } from '../../constans/const'
import { episodeSlice } from '../reducers/EpisodeSlice'
import { AppDispatch } from '../store'

export const fetchEpisodes = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(episodeSlice.actions.episodeFetching())
        const response = await fetch(`${URL_SERVER}api/episodes`)
        if (response.ok) {
            const data = await response.json()
            dispatch(episodeSlice.actions.episodeFetchingSuccess(data))
        } else {
            throw new Error('Error HTTP: ' + response.status)
        }
    } catch (error: any) {
        dispatch(episodeSlice.actions.episodeFetchingError(error.message))
    }
}
