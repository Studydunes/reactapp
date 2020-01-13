import { HttpLink  } from 'apollo-link-http';
import { InMemoryCache, ApolloClient } from 'apollo-boost';


let apolloClient;
export default client = () => {
    const link = new HttpLink({
      uri:'http://192.168.0.12:5000/graphql'
    });

    if(!apolloClient) {
        apolloClient =  new ApolloClient({
            link: link,
            cache: new InMemoryCache()
        });
    }
    return apolloClient
}