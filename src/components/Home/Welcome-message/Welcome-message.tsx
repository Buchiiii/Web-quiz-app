import { useSelector } from "react-redux";
import { COLORS, FONT } from "../../../constants/Theme";
import { RootState } from "../../../redux/store";

const WelcomeMessage = () => {
  const { isDark } = useSelector((state: RootState) => state.theme);
  return (
    <>
      <div className="pb-3">
        <div className="flex flex-col ">
          <span
            className=" p-0"
            style={{
              fontSize: FONT.big,
              fontFamily: "Rubik-Medium ",
              margin: 0,
              color: isDark ? "#FFFFFF" : "black",
            }}
          >
            Welcome to the
          </span>
          <span
            style={{
              fontSize: FONT.big,
              fontFamily: "Rubik-Medium",
              margin: 0,
              padding: 0,
              color: isDark ? "#FFFFFF" : "black",
            }}
          >
            Frontend Quiz!
          </span>
          <span
            className="italic"
            style={{ fontFamily: "Rubik-Italic", color: COLORS.GreyNavy }}
          >
            Pick a subject to get started
          </span>
        </div>
      </div>
    </>
  );
};

export default WelcomeMessage;
