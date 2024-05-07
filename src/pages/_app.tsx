import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from '@apollo/client'
import theme from '@theme';
import { RecoilRoot } from 'recoil';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';


export default function App({ Component, pageProps }: AppProps) {


    const httpLink = new HttpLink({
        uri: 'http://localhost:5000/graphql'
      });
      
      const wsLink = new GraphQLWsLink(createClient({
        url: 'ws://localhost:5000/graphql',
      }));
      
      // The split function takes three parameters:
      //
      // * A function that's called for each operation to execute
      // * The Link to use for an operation if the function returns a "truthy" value
      // * The Link to use for an operation if the function returns a "falsy" value
      const splitLink = split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        wsLink,
        httpLink,
      );
    

    const client = new ApolloClient({
        link: splitLink,
        cache: new InMemoryCache({
            addTypename: false
        }),
    });

   

    return <RecoilRoot>
        <ChakraProvider theme={theme}>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </ChakraProvider>
    </RecoilRoot>
}