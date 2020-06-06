export interface Config {
  fgColor: string;
  bgColor: string;
  level?: "M" | "L" | "Q" | "H";
  renderAs?: "svg" | "canvas";
  includeMargin: boolean;
}
