import React from 'react';

import "./JobCard.css";

function JobCard() {
    return (
        <div className="job-card">
            <div className="job-card-head">
                <div></div>
                <div id="title">
                    Senior Fullstack Engineer - Platform
                </div>
                <div id="tags">
                    <div>TypeScript</div>
                    <div>React</div>
                </div>
            </div>
            <hr />
            <div className="job-card-content">
                <div className="info">
                    <p><strong>Company</strong></p>
                    <p>Segment</p>
                </div>
                <div className="info">
                    <p><strong>Commitment</strong></p>
                    <p>Full-time</p>
                </div>
                <div className="info">
                    <p><strong>Location</strong></p>
                    <p>San Francisco</p>
                </div>
                <div className="info">
                    <p><strong>Posted at</strong></p>
                    <p>01/03/2020</p>
                </div>
                <div className="info">
                    <p><strong>Updated at</strong></p>
                    <p>01/03/2020</p>
                </div>
            </div>
        </div>
    )
}

export default JobCard;
