"use client";

import { useCompanies } from "@src/hooks/api/useCompanies/useCompanies";
import { FC, useMemo } from "react";
import CompanyCard from "../ui/cards/companyCard/companyCard";
import styles from "./companiesList.module.scss";

import InfiniteScroll from "react-infinite-scroller";

const CompaniesList: FC = () => {
  const { data, isLoading, isError, fetchNextPage } = useCompanies();

  const companies = useMemo(
    () => data?.pages.map((page) => page.items).flat(),
    [data],
  );

  const notFound = companies?.length === 0 || isError;

  const loaderComponent = isLoading ? (
    <div key={`loaderComponent`} className={`${styles.cards} container`}>
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <CompanyCard
          key={index}
          id=""
          countryCode=""
          countryName=""
          name=""
          website=""
          isLoading={true}
        />
      ))}
    </div>
  ) : undefined;

  return (
    <InfiniteScroll
      pageStart={1}
      loadMore={() => fetchNextPage()}
      loader={loaderComponent}
      hasMore={true}
    >
      <div className={`${styles.cards} container`}>
        {companies &&
          companies.length > 0 &&
          companies.map((company) => (
            <CompanyCard
              key={company.id}
              id={company.id.toString()}
              name={company.name}
              website={company.website}
              countryCode={company.country}
              countryName={company.countryName}
            />
          ))}

        {notFound && <p>No Company is Found!</p>}
      </div>
    </InfiniteScroll>
  );
};

export default CompaniesList;
