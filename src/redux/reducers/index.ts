import {
    GuestsState,
    GuestsActionTypes,
    FETCH_GUESTS,
    FETCH_GUESTS_SUCCESS,
    FETCH_GUESTS_FAILED,
    CHANGE_GUESTS_SUCCESS,
    CHANGE_GUESTS,
    status
} from '../types';

const initialState: GuestsState = {
    isLoading: false,
    guests: [],
    isAccept: false,
    id: '0'
}

export function guestListReducer(
    state = initialState,
    action: GuestsActionTypes
): GuestsState {
    switch (action.type) {
        case FETCH_GUESTS:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_GUESTS_FAILED:
            return {
                ...state,
                isLoading: false
            }
        case FETCH_GUESTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                guests: action.payload
            }
        case CHANGE_GUESTS:
            return {
                ...state,
                isLoading: true
            }
        case CHANGE_GUESTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                guests: state.guests.map((guest) => {
                    return {
                        ...guest,
                        InvitationStatus: guest.id ===  action.payload.id ? action.payload.isAccept ?  status.Accepted : status.Declined
                         : guest.InvitationStatus//state.id && state.isAccept
                    }
                })
            }
        default:
            return state
    }
}