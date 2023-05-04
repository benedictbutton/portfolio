import React from 'react';
import { workData } from '../Data/workData';
import WorkItem from './WorkItem';

const Work = () => {
  return (
    <div className="accordion mt-5" id="accordionOne">
      {workData.map((company) => (
        <WorkItem key={company.name} {...company} />
      ))}
    </div>
  );
};

export default Work;
