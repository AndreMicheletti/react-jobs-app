import { gql } from 'apollo-boost';

export const SUBSCRIBE = gql`
  mutation subscribeToJob($email: String!, $name: String!) {
    subscribe(
        input: {
            name: $name,
            email: $email
        }
    ) {
        id,
        name,
        email,
        subscribe
    }
  }
`;
