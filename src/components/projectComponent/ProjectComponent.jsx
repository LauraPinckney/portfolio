import React from 'react';
import styles from './ProjectComponent.module.scss';

export const ProjectComponent = (props) => {
  const { title, about, tech, sourceCode, image } = props;

  return (
    <div>
      <div className={styles.container}>
        <h1>{title}</h1>
        <h2>{about}</h2>
        <p>{tech}</p>
        <a href={sourceCode} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="image of project" width="100" height="50"></img>
        </a>
      </div>
    </div>
  );
};
