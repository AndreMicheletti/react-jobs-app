import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
});

export { client }
