import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFlights, listFlightsAsync } from '../flights/flightSlice'
import Flight from './Flight'

const FlightsList = () => {
  const flights = useSelector(selectFlights)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listFlightsAsync())
  }, [dispatch])

  return (
    <div>
      {(flights.length > 0) && flights.map(flight => <Flight flight={flight} key={flight.id} />)}
    </div>
  )
}

export default FlightsList
