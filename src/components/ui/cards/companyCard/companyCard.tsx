"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import styles from "./companyCard.module.scss";
import { Skeleton, Tooltip } from "@chakra-ui/react";
import Image from "next/image";

interface CompanyCardProps {
  id: string;
  name: string;
  countryCode: string;
  countryName: string;
  website: string;
  isLoading?: boolean;
}

const CompanyCard: FC<CompanyCardProps> = ({
  id,
  countryCode,
  countryName,
  name,
  website,
  isLoading = false,
}) => {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      onClick={() => {
        router.push(`/companies/${id}`);
      }}
    >
      {isLoading ? (
        <div className={styles[`skeleton-container`]}>
          <Skeleton height="10px" />
          <Skeleton height="10px" />
        </div>
      ) : (
        <>
          <div className={styles.container}>
            <h3 className={styles.name}>{name}</h3>
            <Tooltip label={countryName}>
              <span className={styles.country}>
                <Image
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
                  alt={`${countryName} flag`}
                  width={20}
                  height={20}
                />
                <p>{countryCode}</p>
              </span>
            </Tooltip>
          </div>
          <p className={styles.website}>{website}</p>
        </>
      )}
    </div>
  );
};

export default CompanyCard;
