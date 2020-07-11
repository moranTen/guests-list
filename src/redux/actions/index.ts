// src/store/chat/actions.ts

import { GuestsActionTypes, FETCH_GUESTS, FETCH_GUESTS_SUCCESS, FETCH_GUESTS_FAILED
        , Guest , CHANGE_GUESTS_SUCCESS, CHANGE_GUESTS} from '../types';

// TypeScript infers that this function is returning SendMessageAction

export const fetchGuests = (): GuestsActionTypes => {
    return {
        type: FETCH_GUESTS
    }
}
export const fetchSuccessGuests = (guests: Guest[]): GuestsActionTypes => {
    return {
        type: FETCH_GUESTS_SUCCESS,
        payload: guests
    }
}
export const fetchFailedGuests = (): GuestsActionTypes => {
    return {
        type: FETCH_GUESTS_FAILED
    }
}

export const changeGuests = (): GuestsActionTypes => {
    return {
        type: CHANGE_GUESTS
    }
}

export const changeSuccessGuests = (id: string, isAccept: boolean): GuestsActionTypes => {
    return {
        type: CHANGE_GUESTS_SUCCESS,
        payload: { id, isAccept } 
    }
}
