"use client";

import { IconButton, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ClosedEyeIcon } from "@src/components/icons/closedEye";
import { OpenEyeIcon } from "@src/components/icons/openEye";
import Input from "@src/components/ui/input/input";
import { useToggle } from "@src/hooks/useToggle/useToggle";
import { FC } from "react";
import { InputProps } from "@src/components/ui/input/input.types";
import styles from "./passwordInput.module.scss";
import {
  PASSWORD_INPUT_CLOSED_EYE_TEST_ID,
  PASSWORD_INPUT_ICON_BUTTON_TEST_ID,
  PASSWORD_INPUT_OPEN_EYE_TEST_ID,
  PASSWORD_INPUT_TEST_ID,
} from "./passwordInput.constants";

const PasswordInput: FC<Omit<InputProps, `type`>> = (props) => {
  const { state: show, toggle: toggleShow } = useToggle(false);
  return (
    <InputGroup size="md" data-testid={PASSWORD_INPUT_TEST_ID}>
      <Input {...props} type={show ? `text` : `password`} pr="3.5rem" />
      <InputRightElement width="3.5rem">
        <IconButton
          onClick={toggleShow}
          aria-label="Show Password"
          variant="link"
          data-testid={PASSWORD_INPUT_ICON_BUTTON_TEST_ID}
          icon={
            show ? (
              <ClosedEyeIcon
                data-testid={PASSWORD_INPUT_CLOSED_EYE_TEST_ID}
                className={styles.icon}
              />
            ) : (
              <OpenEyeIcon
                data-testid={PASSWORD_INPUT_OPEN_EYE_TEST_ID}
                className={styles.icon}
              />
            )
          }
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
