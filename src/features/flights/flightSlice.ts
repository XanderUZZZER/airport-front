import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import axios from 'axios'

interface FlightsState {
  flights: []
}

const initialState: FlightsState = {
  flights: []
};

export const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    listFlights: (state, action) => {
      state.flights.concat(action.payload)
    },
    decrement: state => {

    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {

    },
  },
});

export const { listFlights, decrement, incrementByAmount } = flightsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const listFlightsAsync = (): AppThunk => async (dispatch, getState) => {
  const flights = await axios.get<FlightsState>(`/api/flights`)
  dispatch(listFlights(flights))
};
export const incrementAsync = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectFlight = (state: RootState) => state.flights

export default flightsSlice.reducer;
