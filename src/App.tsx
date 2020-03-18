import React from 'react';
import JobsList from './containers/JobsList';

import { ApolloProvider } from '@apollo/react-hooks';

import { client as apolloClient } from './apolloClient'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
          <JobsList />
      </div>
    </ApolloProvider>
  );
}

export default App;
