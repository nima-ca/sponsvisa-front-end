"use client";

import { InputGroup, InputRightElement } from "@chakra-ui/react";
import Input from "@src/components/ui/input/input";
import { FC } from "react";
import { InputProps } from "../input/input.types";
import Button from "@src/components/ui/button/button";
import { useToggle } from "@src/hooks/useToggle/useToggle";
import { ClosedEyeIcon } from "@src/components/icons/closedEye";
import { OpenEyeIcon } from "@src/components/icons/openEye";
import styles from "./passwrodInput.module.scss";

const PasswordInput: FC<Omit<InputProps, `type`>> = (props) => {
  const { state: show, toggle: toggleShow } = useToggle(false);
  return (
    <InputGroup size="md">
      <Input {...props} type={show ? `text` : `password`} pr="3.5rem" />
      <InputRightElement width="3.5rem">
        <Button onClick={toggleShow} size="sm" variant="link">
          {show ? (
            <ClosedEyeIcon className={styles.icon} />
          ) : (
            <OpenEyeIcon className={styles.icon} />
          )}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
