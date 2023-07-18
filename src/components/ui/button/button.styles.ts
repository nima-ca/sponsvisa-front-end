import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const outline = defineStyle({
  fontWeight: 500,
  borderColor: `var(--color-text)`,
  color: `var(--color-text)`,

  _hover: {
    borderColor: `var(--color-text)`,
    color: `var(--color-text)`,
    backgroundColor: `var(--color-bg)`,

    opacity: 0.7,
  },

  _focus: {
    opacity: 0.5,
    backgroundColor: `var(--color-bg)`,
  },
});

export const solid = defineStyle({
  fontWeight: 500,
  backgroundColor: `var(--color-black-white)`,
  color: `var(--color-white-black)`,

  _hover: {
    backgroundColor: `var(--color-black-white)`,
    color: `var(--color-white-black)`,
    opacity: 0.7,
  },

  _focus: {
    opacity: 0.5,
    color: `var(--color-white-black)`,
    backgroundColor: `var(--color-black-white)`,
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { outline, solid },
});
