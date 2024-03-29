import React from 'react';
import ActiveRecord from '../assets/icons/ActiveRecord';
import Docker from '../assets/icons/Docker';
import Enzyme from '../assets/icons/Enzyme';
import Express from '../assets/icons/Express';
import Foundation from '../assets/icons/Foundation';
import GraphQL from '../assets/icons/GraphQL';
import Jasmine from '../assets/icons/Jasmine';
import Material from '../assets/icons/Material';
import MongoDb from '../assets/icons/MongoDb';
import Nextjs from '../assets/icons/Nextjs';
import NextAuth from '../assets/icons/NextAuth';
import Node from '../assets/icons/Node';
import Oauth from '../assets/icons/Oauth';
import Postgres from '../assets/icons/Postgres';
import Rails from '../assets/icons/Rails';
import ReAct from '../assets/icons/ReAct';
import ReactRouter from '../assets/icons/ReactRouter';
import Redux from '../assets/icons/Redux';
import ReduxForms from '../assets/icons/ReduxForms';
import ReduxSaga from '../assets/icons/ReduxSaga';
import Rspec from '../assets/icons/Rspec';
import Tailwind from '../assets/icons/Tailwind';

import moviesScene from '../assets/Movies-Scene.png';
import cricket from '../assets/Cricket.png';
import tvReviews from '../assets/Tv-Reviews.png';

export const projectData = [
  {
    id: 1,
    site: `https://bens-atlas.fly.dev`,
    tools: [
      <Nextjs />,
      <ReAct />,
      <GraphQL />,
      <NextAuth />,
      <Postgres />,
      <Tailwind />,
      <Docker />,
    ],
    description: `A work in progress as my latest personal
    project, this fun endeavor creates a dynamic world map
    to test my geographical knowledge of countries. To date,
    my efforts have focused on leveraging CSS animations &
    transitions with an eye toward minimal renderings.
    Nextjs provides server-side rendering with a React
    component-based UI and with NextAuth handling
    authentication. For deployment, I containerized my app
    and database with Docker and run the images on fly.io.`,
    image: null,
    video:
      'https://www.dropbox.com/s/o8wowgc4evzu4fk/Screen%20Recording%202023-07-16%20at%2011.04.46%20PM.mov?raw=1',
  },
  {
    id: 2,
    site: `https://movies-scene.herokuapp.com`,
    tools: [
      <Rails />,
      <ReAct />,
      <Redux />,
      <Material />,
      <ReactRouter />,
      <Postgres />,
      <ActiveRecord />,
      <ReduxSaga />,
      <ReduxForms />,
    ],
    description: `Relying on the MovieDB API for general movie info
    and images, I created my own movie site with an
    emphasis on rating movies quickly and categorizing
    them through any number of freely created
    watchlists, persisting user specific data to my own
    database. The last movie in the first row of the screenshot shows a
    movie being rated and added to the user's active
    playlist.`,
    image: moviesScene,
    video: null,
  },
  {
    id: 3,
    site: `https://ready-about.herokuapp.com/`,
    tools: [
      <Node />,
      <Express />,
      <ReAct />,
      <Redux />,
      <Material />,
      <ReactRouter />,
      <MongoDb />,
    ],
    description: `A Swiss Army app of sorts that I use as a playground
    to practice and test out different libraries and
    frameworks. It has the ubiquitous to-do page, a
    dictionary page that provides word lookup and saves
    a user’s searches, and a page that I used for
    relational database scripting to maximize my
    efficiency and accuracy helping a client.
    Additionally, the app includes some cool animation
    and sound effects.`,
    image: null,
    video:
      'https://www.dropbox.com/s/8kp6pquz8ns5jh8/Screen%20Recording%202023-05-04%20at%202.25.58%20AM.mov?raw=1',
  },
  {
    id: 4,
    site: `https://crickety.herokuapp.com/`,
    tools: [
      <Rails />,
      <ReAct />,
      <Foundation />,
      <ReactRouter />,
      <ActiveRecord />,
      <Rspec />,
      <Enzyme />,
      <Oauth />,
    ],
    description: `A scoring app for the dart game Cricket that allows
    players to record their play. In the spirit of
    competitiveness, players can track matches across
    time, who played whom, and even pause play to resume
    matches at a later date.`,
    image: cricket,
    video: null,
  },
  {
    id: 5,
    site: `http://tv-reviews.herokuapp.com/`,
    tools: [
      <Rails />,
      <ReAct />,
      <Foundation />,
      <ReactRouter />,
      <ActiveRecord />,
      <Rspec />,
      <Enzyme />,
      <Jasmine />,
    ],
    description: `As a member of a team of four at Launch Academy
    tasked with building an app in a production environment, I
    contributed to the design, development and final deployment of
    TV a la Carte. Guided by Agile methodology, and ensuring best
    practices such as adherence to TDD, almost all the code was
    collaboratively written through peer programing. The site
    caters to sharing TV reviews in an open forum.`,
    image: tvReviews,
    video: null,
  },
];
//
