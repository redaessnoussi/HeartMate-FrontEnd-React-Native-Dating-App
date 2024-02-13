import { StyleSheet } from "react-native";

// Function to create a stylesheet object
const createStylesheet = (styles: object) => StyleSheet.create(styles);

// Font Weights
const fontRegular = "RobotoRegular";
const fontMedium = "RobotoMedium";
const fontBold = "RobotoBold";

// Heading
const Heading1 = createStylesheet({
  fontFamily: fontBold,
  fontSize: 36,
});

const Heading2 = createStylesheet({
  fontSize: 24,
  fontWeight: fontBold,
});

const Heading3 = createStylesheet({
  fontSize: 20,
  fontWeight: fontBold,
});

const Heading4 = createStylesheet({
  fontSize: 18,
  fontWeight: fontBold,
});

const Heading5 = createStylesheet({
  fontSize: 16,
  fontWeight: fontBold,
});

const Heading6 = createStylesheet({
  fontSize: 14,
  fontWeight: fontBold,
});

const Heading7 = createStylesheet({
  fontSize: 12,
  fontWeight: fontBold,
});

// Sub-heading
const Subhead1 = createStylesheet({
  fontSize: 16,
  fontWeight: fontMedium,
});

const Subhead2 = createStylesheet({
  fontSize: 14,
  fontWeight: fontMedium,
});

const Subhead3 = createStylesheet({
  fontSize: 12,
  fontWeight: fontMedium,
});

// Paragraph
const Paragraph1 = createStylesheet({
  fontSize: 16,
  fontWeight: fontMedium,
});

const Paragraph2 = createStylesheet({
  fontSize: 14,
  fontWeight: fontMedium,
});

const Paragraph3 = createStylesheet({
  fontSize: 12,
  fontWeight: fontMedium,
});

const Paragraph4 = createStylesheet({
  fontSize: 10,
  fontWeight: fontRegular,
});

// Export the stylesheets
export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Heading7,
  Subhead1,
  Subhead2,
  Subhead3,
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
};
