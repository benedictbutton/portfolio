import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BankofAmerica from '../assets/icons/BankofAmerica'
import Symetra from '../assets/icons/Symetra'
import launchLogo from '../assets/launchLogo.png'
import Cantina from '../assets/icons/Cantina.js'

const Work = () => {
    return (
        <div className="accordion mt-5" id="accordionOne">
            <div className="card border-primary bg-dark">
                <div className="card-header m-0 p-0" id="headingFour">
                    <div className="d-flex flex-row">
                        <div>
                            <h4 className="mb-0">
                                <button
                                    className="btn btn-link text-white pr-0"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseFour"
                                    aria-expanded="true"
                                    aria-controls="collapseFour"
                                >
                                    <Cantina />
                                </button>
                            </h4>
                        </div>
                        <div className="align-self-end">
                            <h4>
                                <button
                                    className="btn btn-link collapsed text-secondary pl-1"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseFour"
                                    aria-expanded="true"
                                    aria-controls="collapseFour"
                                >
                                    <FontAwesomeIcon
                                        className="text-right"
                                        icon={['fas', 'plus-circle']}
                                    />
                                </button>
                            </h4>
                        </div>
                    </div>
                </div>

                <div
                    id="collapseFour"
                    className="collapse show"
                    aria-labelledby="headingFour"
                    data-parent="#accordionOne"
                >
                    <div className="card-body">
                        <h5 className="card-title">Contract Worker</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Feb 2020 - Present
                        </h6>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Waltham MA
                        </h6>
                        <ul className="md list-group list-group-flush">
                            <li className="list-group-item bg-dark shadow-lg">
                                Worked across multiple projects with a variety
                                of technical stacks; necessitated quickly
                                ramping up on working with different software
                                tools and collaborating across different teams
                            </li>
                            <li className="list-group-item bg-dark shadow-lg">
                                Refactored a client’s application by
                                restructuring React components for improved data
                                flow; additionally leveraged React-Table for
                                complex sorting, filtering, and searching of
                                user data
                            </li>
                            <li className="list-group-item bg-dark shadow-lg">
                                For a major client’s website redesign, built the
                                majority of React components, utilizing CSS
                                modules for targeted styling
                            </li>
                            <li className="list-group-item bg-dark shadow-lg">
                                One of two engineers tasked with implementation
                                of a GraphQl headless CMS using GraphCMS; relied
                                on Nextjs for static generation and SSR of pages
                            </li>
                            <li className="list-group-item bg-dark shadow-lg">
                                Performed an accessibility audit of a client’s
                                website for WGAC 2.1 compliance; drafted a
                                report with best practices, informational
                                resources, and recommendations for targeted
                                fixes
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="card border-primary bg-dark">
                <div className="card-header m-0 p-0" id="headingOne">
                    <div className="d-flex flex-row">
                        <div>
                            <h4 className="mb-0">
                                <button
                                    className="btn btn-link text-white pr-0"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    <Symetra />
                                </button>
                            </h4>
                        </div>
                        <div className="align-self-end">
                            <h4>
                                <button
                                    className="btn btn-link collapsed text-secondary pl-0"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    <FontAwesomeIcon
                                        className="text-right"
                                        icon={['fas', 'plus-circle']}
                                    />
                                </button>
                            </h4>
                        </div>
                    </div>
                </div>

                <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionOne"
                >
                    <div className="card-body">
                        <h5 className="card-title">Contract Worker</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Nov 2017 - Aug 2018
                        </h6>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Waltham MA
                        </h6>
                        <ul className="md list-group list-group-flush">
                            <li className="list-group-item bg-dark shadow-lg">
                                Coordinated document procurement between medical
                                underwriters, group underwriters, case managers,
                                and various contracted third parties
                            </li>
                            <li className="list-group-item bg-dark shadow-lg">
                                On request, voluntarily extended temporary
                                assignment with company by eight months to
                                support the completion of their pilot project
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="card border-primary bg-dark">
                <div className="card-header" id="headingTwo">
                    <div className="d-flex flex-row">
                        <div>
                            <h4 className="mb-0">
                                <button
                                    className="btn btn-link collapsed text-white pr-0"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    <img src={launchLogo} />
                                </button>
                            </h4>
                        </div>
                        <div className="align-self-end">
                            <h4>
                                <button
                                    className="btn btn-link collapsed text-secondary pl-0"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    <FontAwesomeIcon
                                        className="text-right"
                                        icon={['fas', 'plus-circle']}
                                    />
                                </button>
                            </h4>
                        </div>
                    </div>
                </div>
                <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionOne"
                >
                    <div className="card-body">
                        <h5 className="card-title">
                            Jr. Full Stack Web Developer
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Mar 2017 - May 2017
                        </h6>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Boston MA
                        </h6>
                        <ul className="list-unstyled md">
                            <li className="list-group-item bg-dark shadow-lg">
                                Developed critical, applicable programming
                                skills in building full scale web applications
                            </li>
                            <li className="list-group-item bg-dark shadow-lg">
                                Worked extensively with Ruby on Rails and
                                Reactjs in coupling a RESTful API with an
                                interactive and responsive frontend
                            </li>
                            <li className="list-group-item bg-dark shadow-lg">
                                Learned the importance of Test Driven
                                Development with exposure to Rspec, Capybara,
                                Jasmine, Enzyme, and Sinon
                            </li>
                            <li className="list-group-item bg-dark shadow-lg">
                                In a collaborative team setting, utilized
                                pair-programming, Agile methodology, and Git for
                                our version control system
                            </li>
                            <li className="list-group-item bg-dark shadow-lg">
                                Mapped databases using ER diagrams and various
                                UML visuals for modeling relationships
                            </li>
                            <li className="list-group-item bg-dark shadow-lg">
                                Styled responsive webpages with CSS and Sass,
                                leveraging Foundation's rich library of UI
                                components and following design best practices
                                such as mobile-first
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card border-primary bg-dark">
                <div className="card-header" id="headingThree">
                    <div className="d-flex flex-row">
                        <div>
                            <h2 className="mb-0">
                                <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    <BankofAmerica />
                                </button>
                            </h2>
                        </div>
                        <div className="align-self-end">
                            <h4>
                                <button
                                    className="btn btn-link collapsed text-secondary pl-0"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    <FontAwesomeIcon
                                        className="text-right"
                                        icon={['fas', 'plus-circle']}
                                    />
                                </button>
                            </h4>
                        </div>
                    </div>
                </div>
                <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionOne"
                >
                    <div className="card-body">
                        <h5 className="card-title">
                            Sales & Service Specialist
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Mar 2010 - April 2016
                        </h6>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Boston MA
                        </h6>
                        <ul className="list-unstyled md">
                            <li className="list-group-item bg-dark shadow-lg">
                                Resolved account service issues for clients,
                                ensuring follow through on commitments to
                                outstanding problems
                            </li>
                            <li className="list-group-item bg-dark shadow-lg">
                                Main contact at branch to the project team
                                piloting the automation of banking centers
                                company wide.
                            </li>{' '}
                            <li className="list-group-item bg-dark shadow-lg">
                                Coordinated on exposed policy issues and
                                customer concerns related to the new technology
                            </li>
                            <li className="list-group-item bg-dark shadow-lg">
                                Coordinated referral of client needs to various
                                consumer and small banking specialists
                            </li>
                            <li className="list-group-item bg-dark shadow-lg">
                                Assisted international clients by offering
                                guidance on navigating issues specific to the
                                United States financial system
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
