import gql from 'graphql-tag';

export const GET_ALL_EVENTS =  gql`
query{
  getAllEvents{
    _id
    title
    description
    price
    date
  }
}`

// const Apis = {

//     getBookingData: async function(page_number){
//         try{
//             const paginateVariable = {"page_number": page_number, "limit": 10 } 
//             let result = await client.query({
//                                 query: paginateQuery,
//                                 variables: paginateVariable
//                             })
//             return result.data.getBookings;
//         }catch(error){
//             throw err;
//         }
//     },
// }

// export default Apis;