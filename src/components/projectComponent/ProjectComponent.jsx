import React from 'react';
import styles from './ProjectComponent.module.scss';

export const ProjectComponent = ({ title, about, tech, sourceCode, image }) => (
  <div>
    <div className={styles.container}>
      <div>
        <a href={sourceCode} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="project" class={styles.image}></img>
        </a>
      </div>
      <h2>{title}</h2>
      <div className={styles.details}>
        <p>{about}</p>
        <p className={styles.tech}>{tech}</p>
      </div>
    </div>
  </div>
);
