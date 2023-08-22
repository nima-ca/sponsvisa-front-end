import { FC } from "react";
import styles from "./contactCard.module.scss";
import { ContactCardProps } from "./contactCard.types";

const ContactCard: FC<ContactCardProps> = ({ link, text, Icon }) => {
  return (
    <a
      className={styles.card}
      target="_blank"
      href={link}
      rel="noopener noreferrer"
    >
      <div className={styles[`icon-container`]}>{Icon}</div>
      <p className={styles.text}>{text}</p>
    </a>
  );
};

export default ContactCard;
