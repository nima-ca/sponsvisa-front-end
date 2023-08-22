import { FC } from "react";
import styles from "./page.module.scss";
import ContactCard from "@src/components/ui/cards/contactCard/contactCard";
import { GithubIcon } from "@src/components/icons/github";
import { MoneyIcon } from "@src/components/icons/money";

const ContactUsPage: FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>You Can Find Me Here!</h1>
      <div className={styles.card}>
        <ContactCard
          link="https://github.com/nima-ca"
          text="Github"
          Icon={<GithubIcon />}
        />
        <ContactCard
          link="https://reymit.ir/nima-ca"
          text="Donate"
          Icon={<MoneyIcon />}
        />
      </div>
      <p className={styles.description}>
        Sponsvisa is a non-profit platform, mainly developed for Iranian people
        to help them find companies that have a record of providing visa
        sponsorship. You can support me to keep this platform alive!
      </p>
    </main>
  );
};

export default ContactUsPage;
