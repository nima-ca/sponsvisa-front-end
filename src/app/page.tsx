import Image from "next/image";
import styles from "./page.module.scss";
import GirlImage from "@public/images/Girl-1.svg";
import Link from "next/link";
import { ArrowRightIcon } from "@src/components/icons/arrowRight";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.main__container}`}>
        <Image
          className={styles.main__image}
          src={GirlImage}
          alt="A girl Traveling"
          // width and height are added for testing purposes
          width={0}
          height={0}
          priority
        />
        <div className={styles[`content-box`]}>
          <h1 className={styles.header}>Sponsvisa</h1>
          <p className={styles.description}>
            Sponsvisa is a platform to help you find the companies that offer
            visa sponsorship! you can also contribute to the app by adding more
            companies.
          </p>
          <Link className={styles.link} href="/companies">
            Get Started <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </main>
  );
}
