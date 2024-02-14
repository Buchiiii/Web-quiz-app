import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as MoonLight } from "../../../assets/images/icon-moon-dark.svg";
import { ReactComponent as SunLight } from "../../../assets/images/icon-sun-dark.svg";
import { ReactComponent as MoonDark } from "../../../assets/images/icon-moon-light.svg";
import { ReactComponent as SunDark } from "../../../assets/images/icon-sun-light.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { AppDispatch, RootState } from "../../../redux/store";
import { changeTheme } from "../../../redux/slices/theme";
import { iconSwitch } from "../../../utils/iconSwitch";
import { useLocation } from "react-router-dom";

interface IHeaderProps {
  name?: string;
}

const Header = ({ name }: IHeaderProps) => {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const handleChange = () => {
    dispatch(changeTheme());
  };
  console.log(useLocation());
  return (
    <>
      <div className="">
        {name ? (
          <div
            className={
              location.pathname === `/result/${name}`
                ? "sm:h-[100px] md:h-[224px] h-[100px] flex justify-center "
                : "md:h-[120px] flex justify-center "
            }
          >
            <div className="w-[1160px]  grid grid-cols-2">
              <div className="h-100  flex items-center">
                <div
                  className="flex justify-center items-center w-[56px] h-[56px] rounded-lg"
                  style={{
                    backgroundColor:
                      name === "HTML"
                        ? "#FFF1E9"
                        : name === "CSS"
                        ? "#E0FDEF"
                        : name === "JavaScript"
                        ? "#EBF0FF"
                        : "#F6E7FF",
                  }}
                >
                  {iconSwitch(name)}
                </div>
                <label
                  style={{
                    fontSize: 20,
                    fontWeight: 500,
                    paddingLeft: 16,
                    color: isDark ? "white" : "black",
                  }}
                >
                  {name}
                </label>
              </div>
              <div className="flex items-center justify-end">
                <div className="flex  items-center ">
                  {isDark ? <SunDark /> : <SunLight />}
                </div>
                <div className="ms-[20px] me-[20px]">
                  <ToggleSwitch handleChange={handleChange} />{" "}
                </div>{" "}
                <div className="flex  items-center ">
                  {isDark ? <MoonDark /> : <MoonLight />}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <div>
              <div className="sm:h-[100px] md:h-[224px] h-[100px] flex justify-center ">
                <div className="w-[1160px] self-center ">
                  <div className=" flex justify-end">
                    <div className="flex  items-center ">
                      {isDark ? <SunDark /> : <SunLight />}
                    </div>
                    <div className="ms-[20px] me-[20px]">
                      <ToggleSwitch handleChange={handleChange} />{" "}
                    </div>{" "}
                    <div className="flex  items-center ">
                      {isDark ? <MoonDark /> : <MoonLight />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
