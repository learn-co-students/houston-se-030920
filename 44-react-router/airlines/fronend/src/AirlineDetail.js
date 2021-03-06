import React, { useState, useEffect } from 'react';
import { TicketList } from './TicketList';
import { TicketForm } from './TicketForm';

export function AirlineDetail(props) {

    let [ airline, setAirline ] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/airlines/${props.airlineId}`)
            .then(res => res.json())
            .then( airline => setAirline(airline) )
    }, [])

    if(airline === null) return <h1>Loading Airline...</h1>

    let createTicket = function (newTicket) {

        // Save state, puts it on the page
        setAirline({
            ...airline,
            tickets: [ ...airline.tickets, newTicket]
        })

        // Save it on the server
        fetch('http://localhost:3000/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                airline_id: props.airlineId,
                starting_point: newTicket.starting_point,
                destination: newTicket.destination,
                price: newTicket.price
            })
        })
    }

    console.log(airline)

    return (
        <div>
            <h1>{airline.name}</h1>
            <TicketList
                tickets={airline.tickets}
            />
            <TicketForm
                onSubmit={createTicket}
            />
        </div>
    );
}
