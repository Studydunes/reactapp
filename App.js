import { ApolloProvider } from '@apollo/react-hooks';
import React, { Component } from 'react';
import apolloclient from './src/apollo';
import { HeaderItem } from './src/components/common/HeaderItem/HeaderItem';
import EventContainer from './src/pages/event';


// const cache = new InMemoryCache();
// const link = new HttpLink({
//   uri: 'http://192.168.0.33:3000/graphql'
// });

// const apolloClient = new ApolloClient({
//   cache,
//   link
// });

const apolloClient = apolloclient();
class App extends Component {  
  render() {
    return (
        <ApolloProvider client={apolloClient}>
              <HeaderItem titleText='Event'/>
              <EventContainer />
        </ApolloProvider>   
    );
  }
}
export default App;
  
  
