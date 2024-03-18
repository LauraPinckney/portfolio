import React from 'react';
import styles from './ProjectComponent.module.scss';

export const ProjectComponent = (props) => {
  const { title, about, tech, liveCode, sourceCode, image } = props;

  return (
    <div>
      <div className={styles.container}>
        <h1>{title}</h1>
        <h2>{about}</h2>
        <p>{tech}</p>
        <div>{image}</div>

        <a href={liveCode} target="_blank" rel="noopener noreferrer"></a>
        <a href={sourceCode} target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>
  );
};
