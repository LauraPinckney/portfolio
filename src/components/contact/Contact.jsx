import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import mail from '../../assets/mail.png';
import styles from './Contact.module.scss';

export const Contact = () => {
  return (
    <div>
      <h3 className={styles.container}>
        I love a chat! Hopefully speak to you soon
      </h3>
      <div className={styles.logos}>
        <div>
          <a href="mailto:lauraiscodingpleaseleaveamsg@gmail.com">
            <img src={mail} alt="Email" className={styles.logo}></img>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/LauraPinckney"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github" className={styles.logo}></img>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/laurapinckney/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className={styles.logo}></img>
          </a>
        </div>
      </div>
    </div>
  );
};
