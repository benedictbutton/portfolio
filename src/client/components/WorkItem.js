import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WorkItem = ({ logo, name, position, location, dates, experience }) => {
    const [show, setShow] = useState(name === 'Cantina' ? true : false)
    return (
        <div key={name} className="card border-primary bg-dark">
            <button
                className="btn btn-link text-white pr-0"
                type="button"
                aria-label={name}
                aria-expanded={show}
                aria-controls="collapseFour"
                onClick={() => setShow((prev) => !prev)}
            >
                <div className="card-header m-0 p-0" id="headingFour">
                    <div
                        className="d-flex flex-row justify-content-between"
                        style={{ minHeight: '150px' }}
                    >
                        <div className="align-middle my-auto">
                            <h4 className="mb-0"></h4>
                            {logo}
                        </div>
                        <div className="align-middle text-secondary mx-4 my-auto">
                            <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                        </div>
                    </div>
                </div>
            </button>

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
                    {name === 'Cantina' && (
                        <h6>
                            <a
                                href="https://cantina.co/"
                                target="_blank"
                                rel="noreferrer"
                                className="card-subtitle mb-2"
                            >
                                https://cantina.co/
                            </a>
                        </h6>
                    )}
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
