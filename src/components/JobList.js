import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import JobListItem from './JobListItem';

export default function JobList({ jobs, handleSelectKeyword }) {

  return (
    <TransitionGroup className="listings">
      {jobs.map((job) => (
        <CSSTransition key={job.id} classNames="fade" timeout={200}>
          <JobListItem
            key={job.id}
            job={job}
            handleSelectKeyword={handleSelectKeyword}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
