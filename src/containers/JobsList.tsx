import React, { useState, JSXElementConstructor } from 'react';
import Header from './Header';
import JobCard from '../components/JobCard';
import Modal from '../components/Modal';

import { useQuery } from '@apollo/react-hooks';

import { Job } from '../schemas';
import { ALL_JOBS } from '../queries';

import './JobsList.css';


type jobsData = {
    jobs: Array<Job>
}

function renderJobCards (data: jobsData, loading: boolean, page: number) {

    if (loading || !data) {
        return (
            <p>Loading...</p>
        )
    }

    return data.jobs.slice(page * 10, page * 10 + 10).map(job => {
        return (
            <JobCard job={job} />
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
            <div className={pageNum == page ? "current" : ""} onClick={() => setPage(pageNum)}>
                {pageNum}
            </div>
        )
    })    
}

function JobsList() {

    const [modalVisible, setModalVisible] = useState(false);
    const [page, setPage] = useState(0);
    
    const { loading, error, data } = useQuery(ALL_JOBS);

    return (
        <div>
            <Header />
            <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
                <p>Ola</p>
            </Modal>
            <div id="content-wrapper">
                <div id="pagination">
                    {renderPagination(data, loading, page, setPage)}
                </div>
                <div id="content">
                    {renderJobCards(data, loading, page)}
                </div>
            </div>
        </div>
    );
}

export default JobsList;
