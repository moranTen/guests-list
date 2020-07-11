export const FETCH_GUESTS = 'FETCH_GUESTS';
export const FETCH_GUESTS_SUCCESS = 'FETCH_GUESTS_SUCCESS';
export const FETCH_GUESTS_FAILED = 'FETCH_GUESTS_FAILED';
export const CHANGE_GUESTS_SUCCESS = 'CHANGE_GUESTS_SUCCESS';
export const CHANGE_GUESTS = 'CHANGE_GUESTS';

export enum status {
    Processed = "PROCESSED",
    Accepted = "ACCEPTED",
    Declined = "DECLINED"
}

export interface Guest {
    id: string,
    userName: string,
    userEmail: string,
    InvitationStatus: status
}

export interface GuestsState {
    isLoading: boolean
    guests: Guest[],
    isAccept: boolean,
    id: string
}

interface FetchGuestsAction {
    type: typeof FETCH_GUESTS
}

interface FetchGuestsSuccessAction {
    type: typeof FETCH_GUESTS_SUCCESS,
    payload: Guest[]
}

interface FetchGuestsFailedAction {
    type: typeof FETCH_GUESTS_FAILED
}

interface ChangeGuestsSuccessAction {
    type: typeof CHANGE_GUESTS_SUCCESS,
    payload:{ id : string, isAccept: boolean }
}

interface ChangeGuestsAction {
    type: typeof CHANGE_GUESTS
}

export type GuestsActionTypes = FetchGuestsSuccessAction | FetchGuestsAction | FetchGuestsFailedAction | ChangeGuestsSuccessAction
                                | ChangeGuestsAction