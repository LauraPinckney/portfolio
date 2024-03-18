import React from 'react';
import styles from './ProjectList.module.scss';
import { ProjectComponent } from '../projectComponent/ProjectComponent';
import { projects } from '../../data/projects.js';

export const ProjectList = () => {
  const projectDetails = projects.map(
    ({ title, about, tech, sourceCode, image }) => {
      return (
        <ProjectComponent
          key={title}
          title={title}
          about={about}
          tech={tech}
          sourceCode={sourceCode}
          image={image}
        />
      );
    }
  );
  return (
    <div className={styles.container}>
      <h1>Project List</h1>
      <div>{projectDetails}</div>
    </div>
  );
};
