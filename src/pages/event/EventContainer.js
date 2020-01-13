import React from "react";
import EventComponent from "./EventComponent";
import { gql } from 'apollo-boost';
import { GET_ALL_EVENTS } from "../../apollo/graphql/event/eventQueries";
import { useQuery, useMutation } from '@apollo/react-hooks';


const EventContainer = (props) => {
    
    const { loading, error, data } = useQuery(GET_ALL_EVENTS);


    // const { loading, error, data } = useMutation(GET_ALL_EVENTS);
    
    return (
        <EventComponent 
            events={data && data.getAllEvents.length ? data.getAllEvents : []}
        />    
    )
}
export default EventContainer