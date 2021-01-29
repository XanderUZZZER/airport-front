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
      state.flights = action.payload
    },
    decrement: state => {
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
    },
  },
});

export const { listFlights } = flightsSlice.actions;

export const listFlightsAsync = (): AppThunk => async dispatch => {
  const { data } = await axios.get<FlightsState>(`flights`)
  dispatch(listFlights(data))
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectFlights = (state: RootState) => state.flights.flights

export default flightsSlice.reducer;
