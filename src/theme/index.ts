import { createSystem, defaultConfig } from "@chakra-ui/react";

const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: { value: `"Great Vibes", serif` },
        heading: { value: `"Great Vibes", serif` },
      },
    },
  },
});

export default theme;
