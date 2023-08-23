import { FC } from "react";
import styles from "./page.module.scss";
import CompaniesList from "@src/components/companiesList/companiesList";

const CompaniesPage: FC = () => {
  return (
    <main className={styles.main}>
      <CompaniesList />
    </main>
  );
};

export default CompaniesPage;
