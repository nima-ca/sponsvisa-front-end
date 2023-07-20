"use client";

import { IconButton, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ClosedEyeIcon } from "@src/components/icons/closedEye";
import { OpenEyeIcon } from "@src/components/icons/openEye";
import Input from "@src/components/ui/input/input";
import { useToggle } from "@src/hooks/useToggle/useToggle";
import { FC } from "react";
import { InputProps } from "../input/input.types";
import styles from "./passwordInput.module.scss";

const PasswordInput: FC<Omit<InputProps, `type`>> = (props) => {
  const { state: show, toggle: toggleShow } = useToggle(false);
  return (
    <InputGroup size="md">
      <Input {...props} type={show ? `text` : `password`} pr="3.5rem" />
      <InputRightElement width="3.5rem">
        <IconButton
          onClick={toggleShow}
          aria-label="Show Password"
          variant="link"
          icon={
            show ? (
              <ClosedEyeIcon className={styles.icon} />
            ) : (
              <OpenEyeIcon className={styles.icon} />
            )
          }
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
