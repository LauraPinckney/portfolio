import styles from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <div>
      <ol className={styles.container}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ol>
    </div>
  );
};
