"use client";

import { FC } from "react";
import CompanyCard from "../ui/cards/companyCard/companyCard";
import styles from "./companiesList.module.scss";
interface CompaniesListProps {}

const CompaniesList: FC<CompaniesListProps> = () => {
  return (
    <div className={`${styles.cards} container`}>
      <CompanyCard
        id="1"
        countryCode="GB"
        countryName="Great Britain"
        name="Amazon"
        website="www.amazon.com"
      />
    </div>
  );
};

export default CompaniesList;
