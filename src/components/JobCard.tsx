import React from 'react';

import { Job } from "../schemas";
import "./JobCard.css";

type JobCardProps = {
    job: Job
};

function renderTags (tags: Array<{ name: String }>) {
    return tags.map(tag => {
        return (
            <div>{tag.name}</div>
        )
    })
}

function renderInfo(title: String, value: String) {
    if (!value) {
        return null;
    }

    return (
        <div className="info">
            <p><strong>{title}</strong></p>
            <p>{value}</p>
        </div>
    )
}

const JobCard: React.FunctionComponent<JobCardProps> = ({ job }) => {
    return (
        <div className="job-card">
            <div className="job-card-head">
                <div id="title">
                    {job.title}
                </div>
                <div id="tags">
                    {renderTags(job.tags)}
                </div>
            </div>
            <hr />
            <div className="job-card-content">
                {renderInfo("Company", job.company.name)}
                {renderInfo("Commitment", job.commitment.title)}
                {renderInfo("Location", job.locationNames)}
                {renderInfo("Posted at", job.postedAt)}
                {renderInfo("Updated at", job.updatedAt)}
            </div>
        </div>
    )
}

export default JobCard;
