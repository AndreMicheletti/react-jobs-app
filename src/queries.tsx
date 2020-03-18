import { gql } from 'apollo-boost';

export const ALL_JOBS = gql`
query {
    jobs {
      id,
      title,
      slug,
      locationNames,
      company {
        id,
        name,
        logoUrl
      },
      tags {
        id,
        name,
        slug
      },
      commitment {
        id,
        title,
        slug,
      },
      description,
      isFeatured,
      postedAt,
      updatedAt,
      applyUrl
    }
}
`;