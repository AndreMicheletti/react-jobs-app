import React, { useState } from 'react';
import Header from './Header';
import JobCard from '../components/JobCard';
import JobModal from '../components/JobModal';

import { useQuery } from '@apollo/react-hooks';

import { Job, SelectedJob } from '../schemas';
import { ALL_JOBS } from '../queries';

import './JobsList.css';


type jobsData = {
    jobs: Array<Job>
}

function renderJobCards (data: jobsData, loading: boolean, page: number, clickCallback: Function) {

    if (loading || !data) {
        return (
            <p>Loading...</p>
        )
    }

    return data.jobs.slice(page * 10, page * 10 + 10).map(job => {
        return (
            <JobCard key={job.id.toString()} job={job} onSelectJob={clickCallback} />
        );
    });
}

function renderPagination (data: jobsData, loading: boolean, page: number, setPage: Function) {

    if (loading || !data) {
        return null;
    }

    const totalPages = (data.jobs.length / 10) + 1

    return Array.from({length: totalPages}, (x, pageNum) => {
        return (
            <div key={`paginator${pageNum}`} className={pageNum === page ? "current" : ""} onClick={() => setPage(pageNum)}>
                {pageNum}
            </div>
        )
    })    
}

function JobsList() {
    
    const noneSelected: SelectedJob = {
        jobSlug: '',
        companySlug: ''
    }

    const [modalVisible, setModalVisible] = useState(false);
    const [page, setPage] = useState(0);
    const [selectedJob, setSelectedJob] = useState(noneSelected);
    
    const { loading, error, data } = useQuery(ALL_JOBS);

    if (error) console.warn(error)

    const onSelectJob = (job: Job) => {
        setModalVisible(true)
        const sel: SelectedJob = {
            jobSlug: job.slug,
            companySlug: job.company.slug
        }
        setSelectedJob(sel)
    }

    return (
        <div>
            <Header />
            <JobModal visible={modalVisible} job={selectedJob} onClose={() => setModalVisible(false)} />
            <div id="content-wrapper">
                <div id="pagination">
                    {renderPagination(data, loading, page, setPage)}
                </div>
                <div id="content">
                    {renderJobCards(data, loading, page, onSelectJob)}
                </div>
            </div>
        </div>
    );
}

export default JobsList;
