import React from 'react';
import styles from './ProjectList.module.scss';
import { ProjectComponent } from '../projectComponent/ProjectComponent';
import { projects } from '../../data/projects.js';

export const ProjectList = () => {
  const projectDetails = projects.map((project, i) => {
    return (
      <ProjectComponent
        key={i}
        title={project.title}
        about={project.about}
        tech={project.tech}
        liveCode={project.liveCode}
        sourceCode={project.sourceCode}
      />
    );
  });
  return (
    <div className={styles.container}>
      <h1>Project List</h1>
      <div>{projectDetails}</div>
    </div>
  );
};
