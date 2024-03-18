import React from 'react';
import styles from './ProjectComponent.module.scss';

export const ProjectComponent = ({ title, about, tech, sourceCode, image }) => (
  <div>
    <div className={styles.container}>
      <h1>{title}</h1>
      <h2>{about}</h2>
      <p>{tech}</p>
      <a href={sourceCode} target="_blank" rel="noopener noreferrer">
        <img src={image} alt="project" class={styles.image}></img>
      </a>
    </div>
  </div>
);
