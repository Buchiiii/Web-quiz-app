import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { iconSwitch } from "../../../utils/iconSwitch";
import { Link } from "react-router-dom";

const Subjects = () => {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const subjects = ["HTML", "CSS", "JavaScript", "Accessibility"];

  return (
    <>
      <div className="">
        {subjects.map((element, index) => (
          <Link
            key={index}
            className="flex mb-[20px] border shadow rounded-lg h-[96px]  "
            to={`/quiz/${element}`}
            style={{
              borderRadius: "20px",
              borderColor: isDark ? "#3B4D66" : "#FFFFFF",
              boxShadow: isDark ? "0px 0px 0.7px white" : "",
            }}
          >
            <div className="flex ">
              <div
                className="flex justify-center items-center ms-[20px] self-center  w-[56px] h-[56px] rounded-lg"
                style={{
                  backgroundColor:
                    element === "HTML"
                      ? "#FFF1E9"
                      : element === "CSS"
                      ? "#E0FDEF"
                      : element === "JavaScript"
                      ? "#EBF0FF"
                      : "#F6E7FF",
                }}
              >
                {iconSwitch(element)}
              </div>
              <div className="self-center ms-[32px]">
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: "500",
                    paddingLeft: 16,
                    color: isDark ? "white" : "black",
                  }}
                >
                  {element}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Subjects;
