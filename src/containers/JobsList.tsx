import React from 'react';
import Header from './Header';
import JobCard from '../components/JobCard';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import './JobsList.css';

const ALL_JOBS = gql`
  {
    jobs {
      id,
      title,
      slug
    }
  }
`;


function JobsList() {
    
    const { loading, error, data } = useQuery(ALL_JOBS);

    if (!loading && !error) {
        console.log(data)
    }

    return (
        <div>
            <Header />
            <div id="content-wrapper">
                <div id="content">
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
            </div>
        </div>
    );
}

export default JobsList;
