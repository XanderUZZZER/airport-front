import React from 'react'

const Flight = ({ flight }) => {
  return (
    <div>
      <h4>Flight with id: {flight.id}</h4>
      Departure: {flight.departure}
      <br />
      Arrival: {flight.arrival}
      <br />
      <button>Edit flight</button>
    </div>
  )
}

export default Flight
