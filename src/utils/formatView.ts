import language from "./language";

const VIEW_FORMATTER = new Intl.NumberFormat(language, {
  notation: "compact",
});
export default VIEW_FORMATTER;
