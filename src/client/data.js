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
            'Worked across multiple projects with a variety of technical stacks; necessitated quickly ramping up on working with different software tools and collaborating across different teams',
            'Refactored a client’s application by restructuring React components for improved data flow; additionally leveraged React-Table for complex sorting, filtering, and searching of user data',
            'For a major client’s website redesign, built the majority of React components, utilizing CSS modules for targeted styling',
            'One of two engineers tasked with implementation of a GraphQl headless CMS modeled using GraphCMS; relied on React for an interactive UI and on Nextjs for static generation and SSR of pages',
            'Performed an accessibility audit of a client’s website for WGAC 2.1 compliance; drafted a report with best practices, informational resources, and recommendations for targeted fixes',
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
