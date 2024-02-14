import { ReactComponent as HTML } from "../assets/images/icon-html.svg";
import { ReactComponent as CSS } from "../assets/images/icon-css.svg";
import { ReactComponent as Javascript } from "../assets/images/icon-js.svg";
import { ReactComponent as Accessibility } from "../assets/images/icon-accessibility.svg";

export const iconSwitch = (text: string) => {
  switch (text) {
    case "HTML":
      return <HTML />;

    case "CSS":
      return <CSS />;

    case "Accessibility":
      return <Accessibility />;

    case "Javascript":
      return <Javascript />;

    default:
      break;
  }
};
