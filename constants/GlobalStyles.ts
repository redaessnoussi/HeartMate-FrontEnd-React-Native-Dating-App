import { StyleSheet } from "react-native";

// Function to create a stylesheet object
const createStylesheet = (styles: object) => StyleSheet.create(styles);

// Font Weights
const fontRegular = "PoppinsRegular";
const fontMedium = "PoppinsSemiBold";
const fontBold = "PoppinsBold";

// Heading
const Heading1 = createStylesheet({
  fontFamily: fontBold,
  fontSize: 36,
});

const Heading2 = createStylesheet({
  fontFamily: fontBold,
  fontSize: 24,
});

const Heading3 = createStylesheet({
  fontFamily: fontBold,
  fontSize: 20,
});

const Heading4 = createStylesheet({
  fontFamily: fontBold,
  fontSize: 18,
});

const Heading5 = createStylesheet({
  fontFamily: fontBold,
  fontSize: 16,
});

const Heading6 = createStylesheet({
  fontFamily: fontBold,
  fontSize: 14,
});

const Heading7 = createStylesheet({
  fontFamily: fontBold,
  fontSize: 12,
});

// Sub-heading
const Subhead1 = createStylesheet({
  fontFamily: fontMedium,
  fontSize: 16,
});

const Subhead2 = createStylesheet({
  fontFamily: fontMedium,
  fontSize: 14,
});

const Subhead3 = createStylesheet({
  fontFamily: fontMedium,
  fontSize: 12,
});

// Paragraph
const Paragraph1 = createStylesheet({
  fontFamily: fontMedium,
  fontSize: 16,
});

const Paragraph2 = createStylesheet({
  fontFamily: fontMedium,
  fontSize: 14,
});

const Paragraph3 = createStylesheet({
  fontFamily: fontMedium,
  fontSize: 12,
});

const Paragraph4 = createStylesheet({
  fontFamily: fontRegular,
  fontSize: 10,
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
