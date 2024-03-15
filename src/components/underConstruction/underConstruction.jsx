import styles from './UnderConstruction.module.scss';

export const UnderConstruction = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.alert}>CURRENTLY UNDER CONSTRUCTION</h1>
      <h2 className={styles.alert}>
        Please bear with me as I am tinkering away
      </h2>
    </div>
  );
};
