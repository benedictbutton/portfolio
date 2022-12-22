import React from 'react'
import BankofAmerica from './assets/icons/BankofAmerica'
import Symetra from './assets/icons/Symetra'
import launchLogo from './assets/launchLogo.png'
import Cantina from './assets/icons/Cantina.js'

export const workData = [
    {
        logo: <Cantina />,
        name: 'Cantina',
        position: 'Software Engineer',
        dates: 'Feb 2020 - Present',
        location: 'Boston MA',
        experience: [
            'Worked across multiple projects, from Fortune 500’s to startups, necessitating my ramping up quickly on various technical stacks and collaborating across multiple engineering teams',
            'One of three engineers tasked with implementation of a GraphQl headless CMS; relied on React for an interactive UI and on Nextjs for static generation of pages',
            'Built React components for a major client’s website redesign, utilizing CSS modules for targeted styling  and pair-programming with designers for QA',
            'Implemented new web application features for a startup, leveraging React custom hooks for code reuse, throttling and debouncing for performance gains, and controlled components for validation',
            'Tasked with refactoring key components of a React application;  improved unidirectional data flow with component composition and by extending React-Table for functional handling  of data',
            'Provided devOps for the N.A. website of a global appliance distributor; built a React application to generate database scripts based on form inputs, enhancing my workflow accuracy and productivity',
            'Retained for technical support on an as-needed basis for two clients, providing weekly status reports to the Cantina executive team and montly updates to the stakeholders',
            'Performed an accessibility audit of a client’s website for WGAC 2.1 compliance; drafted a report with best practices, informational resources, and technical details for targeted fixes',
        ],
    },
    {
        logo: <Symetra />,
        name: 'Symetra',
        position: 'Contract Worker',
        dates: 'Nov 2017 - Aug 2018',
        location: 'Boston MA',
        experience: [
            'Coordinated document procurement between medical underwriters, group underwriters, case managers, and various contracted third parties',
            'On request, voluntarily extended temporary assignment with company by eight months to support the completion of their pilot project',
        ],
    },
    {
        logo: <img src={launchLogo} />,
        name: 'Launch Academy',
        position: 'Jr. Full Stack Web Developer',
        dates: 'Mar 2017 - May 2017',
        location: 'Boston MA',
        experience: [
            'Developed critical, applicable programming skills in building full scale web applications',
            'Worked extensively with Ruby on Rails and Reactjs in coupling a RESTful API with an interactive and responsive frontend',
            'Learned the importance of Test Driven Development with exposure to Rspec, Capybara, Jasmine, Enzyme, and Sinon',
            'In a collaborative team setting, utilized pair-programming, Agile methodology, and Git for our version control system',
            'Mapped databases using ER diagrams and various UML visuals for modeling relationships',
            'Styled responsive webpages with CSS and Sass, following design best practices such as mobile-first',
        ],
    },
    {
        logo: <BankofAmerica />,
        name: 'Bank of America',
        position: 'Sales & Service Specialist',
        dates: 'Mar 2010 - April 2016',
        location: 'Boston MA',
        experience: [
            'Resolved account service issues for clients, ensuring follow through on commitments to outstanding problems',
            'Main contact at branch to the project team piloting the automation of banking centers company wide',
            'Coordinated on exposed policy issues and customer concerns related to the new automation technology',
            'Coordinated referral of client needs to various consumer and small banking specialists',
            'Assisted international clients by offering guidance on navigating issues specific to the United States financial system',
        ],
    },
]
