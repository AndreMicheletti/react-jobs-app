import React from 'react';

import { Job, Tag } from "../schemas";
import "./JobCard.css";

type JobCardProps = {
    job: Job,
    onSelectJob: Function
};

function renderTags (tags: Array<Tag>) {
    return tags.map(tag => {
        return (
            <div key={tag.id.toString()}>{tag.name}</div>
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

const JobCard: React.FunctionComponent<JobCardProps> = ({ job, onSelectJob }) => {
    return (
        <div className="job-card" onClick={() => onSelectJob(job)}>
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
