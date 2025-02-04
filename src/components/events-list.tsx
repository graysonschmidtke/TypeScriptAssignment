import React from 'react';

// Create interface for user object (TypeScript only)
interface EventUI {
    id: number;
    title: string;
    num_attendees: number;
}

interface EventListUI {
    events: EventUI[];
}

export const EventsList = (props: EventListUI) => {
    
    return(
        <>
            {/* Display table of users after fetching users data */}
            {props.events.length > 0 && <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Attendees</th>
                    </tr>
                </thead>
                <tbody>
                {props.events.map((event: EventUI) => (
                        <tr key={event.id}>
                        <td>{event.id}</td>
                        <td>{event.title}</td>
                        <td>{event.num_attendees}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            }
        </>
    );
}