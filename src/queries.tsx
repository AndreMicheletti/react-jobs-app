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
        slug,
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
      postedAt,
      updatedAt,
      applyUrl
    }
}
`;

export const GET_JOB_DETAILS = gql`
query($companySlug: String!, $jobSlug: String!) {
  job(
    input: {
      companySlug: $companySlug,
      jobSlug: $jobSlug
    }
  ) {
    id,
    title,
    slug,
    company {
      id,
      slug,
      name
    },
    commitment {
      id,
      title
    },
    tags {
      id,
      name,
    },
    description,
    isFeatured,
    postedAt,
    updatedAt,
  }
}
`;
