import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import { useQuery, useMutation } from '@apollo/react-hooks';
import "./Modal.css";

import { GET_JOB_DETAILS } from '../queries'
import { SUBSCRIBE } from '../mutations'

import { DetailedJob, SelectedJob } from '../schemas';

type JobModalProps = {
    visible: boolean,
    job: SelectedJob,
    onClose?: Function,
}

const JobModal: React.FunctionComponent<JobModalProps> = ({ visible, job, onClose = null }) => {

    const { loading, error, data } = useQuery(GET_JOB_DETAILS, {
        variables: { jobSlug: job.jobSlug, companySlug: job.companySlug },
    });

    const [subscribeMutation, subscribeResult] = useMutation(SUBSCRIBE);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const onSubscribe = () => {
        subscribeMutation({ variables: { name, email } })
        setSubscribed(true)
    }

    const onModalClose = () => {
        setSubscribed(false)
        onClose && onClose()
    }

    if (!visible || !job.jobSlug) {
        document.body.style.overflow = 'auto'
        return <span></span>
    }

    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    document.body.style.overflow = 'hidden'

    if (loading || error || !data) {
        return (
            <div id="modal-wrapper" style={{ top }}>
                <div id="modal">
                    <div id="modal-content" style={{ margin: "auto auto" }}>
                        Loading...
                    </div>
                    <div id="modal-buttons">
                        <div></div>
                        <div id="modal-button" onClick={() => onClose && onClose()}>
                            Close
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }

    const detailedJob: DetailedJob = data.job;

    const renderDescription = () => {
        if (subscribed && subscribeResult.loading === true) {
            return (
                <div id="application-feedback">
                    Applying...
                </div>
            );
        }

        if (subscribed && subscribeResult && subscribeResult.data) {

            if (subscribeResult.error) {
                return (
                    <div id="application-feedback">
                        <p id="application-id">An error ocurred!</p>
                        <p>
                            {subscribeResult.error}
                        </p>
                    </div>
                )
            }
            
            return (
                <div id="application-feedback">
                    <p>Application successfull!</p>
                    <p>
                        Your application id is
                        <span id="application-id">{subscribeResult.data.subscribe.id}</span>
                    </p>
                </div>
            );
        }

        return (<ReactMarkdown source={detailedJob.description} />);
    }

    return (
        <div id="modal-wrapper" style={{ top }}>
            <div id="modal">
                <div id="modal-content">
                    <div id="modal-title">
                        <span>{detailedJob.title}</span>
                    </div>
                    <hr />
                    <div id="modal-contents">
                        <div id="modal-side-info">
                            <div>
                                <span><strong>Company</strong></span>
                                <span>{detailedJob.company.name}</span>
                            </div>
                            <div>
                                <span><strong>Commitment</strong></span>
                                <span>{detailedJob.commitment.title}</span>
                            </div>
                            <div>
                                <span><strong>Posted At</strong></span>
                                <span>{detailedJob.postedAt.substr(0, 10)}</span>
                            </div>
                            <div>
                                <span><strong>Updated At</strong></span>
                                <span>{detailedJob.updatedAt.substr(0, 10)}</span>
                            </div>
                        </div>
                        <div id="modal-description">
                            {renderDescription()}
                        </div>
                    </div>
                    <div id="modal-inputs">
                        <div>
                            <span>name</span>
                            <input
                                type="text"
                                value={name}
                                disabled={subscribed}
                                onChange={(ev) => setName(ev.target.value)}
                            />
                        </div>
                        <div>
                            <span>email</span>
                            <input
                                type="text"
                                value={email}
                                disabled={subscribed}
                                onChange={(ev) => setEmail(ev.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div id="modal-buttons">
                    <div></div>
                    <div id="modal-button" onClick={() => onModalClose()}>
                        Close
                    </div>
                    {!!name && !!email && !subscribed &&
                        <div id="modal-button" onClick={() => onSubscribe()}>
                            Apply
                        </div>
                    }
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default JobModal;
