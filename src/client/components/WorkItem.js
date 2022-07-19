import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WorkItem = ({ logo, name, position, location, dates, experience }) => {
    const [show, setShow] = useState(name === 'Cantina' ? true : false)
    return (
        <div key={name} className="card border-primary bg-dark">
            <div className="card-header m-0 p-0" id="headingFour">
                <div className="d-flex flex-row">
                    <div>
                        <h4 className="mb-0">
                            <button
                                className="btn btn-link text-white pr-0"
                                type="button"
                                aria-label={name}
                                aria-expanded={show}
                                aria-controls="collapseFour"
                                onClick={() => setShow((prev) => !prev)}
                            >
                                {logo}
                                <FontAwesomeIcon
                                    className="text-righ align-bottom text-secondary ml-2 mb-2"
                                    icon={['fas', 'plus-circle']}
                                />
                            </button>
                        </h4>
                    </div>
                </div>
            </div>
            <div
                id="collapseFour"
                className={`collapse ${show ? 'show' : ''}`}
                aria-labelledby="headingFour"
            >
                <div className="card-body">
                    <h5 className="card-title">{position}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{dates}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {location}
                    </h6>
                    <ul className="md list-group list-group-flush">
                        {experience.map((experienceItem, idx) => (
                            <li
                                key={idx}
                                className="list-group-item bg-dark shadow-lg"
                            >
                                {experienceItem}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkItem
