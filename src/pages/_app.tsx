import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import theme from '@theme';
import { RecoilRoot } from 'recoil';


export default function App({ Component, pageProps }: AppProps) {
    const client = new ApolloClient({
        uri: 'http://localhost:5000/graphql',
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