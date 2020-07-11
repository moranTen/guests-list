
export const getGuestList = (state: any) => state.guestList;
export const getGuests = (state: any) => getGuestList(state).guests;
export const getIsLoading = (state: any) => getGuestList(state).isLoading;