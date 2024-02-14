import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { COLORS } from "../../constants/Theme";
import { iconSwitch } from "../../utils/iconSwitch";
import { useNavigate } from "react-router-dom";
import { resetScore } from "../../redux/slices/score";

interface IResultComponentProps {
  name: string;
}
const ResultComponent = ({ name }: IResultComponentProps) => {
  const { score } = useSelector((state: RootState) => state.score);
  const { isDark } = useSelector((state: RootState) => state.theme);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      {" "}
      <div className="grid md:grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-col pb-3">
          <label
            style={{
              fontSize: 40,
              fontWeight: 300,

              color: isDark ? "#fff" : "#313E51",
            }}
          >
            Quiz completed
          </label>
          <label
            style={{
              fontWeight: 500,
              fontSize: 40,
              fontStyle: "normal",
              color: isDark ? "#fff" : "#313E51",
              fontFamily: "Rubik-Medium",
            }}
          >
            You scored...
          </label>
        </div>
        <div className=" pb-2 ">
          <div
            style={{
              borderRadius: "30px",
              backgroundColor: isDark ? "#3B4D66" : "white",
            }}
            className="h-[388px] shadow p-[48px] "
          >
            <div className="flex  justify-center">
              <div className="flex mb-[40px]">
                <div
                  className="flex justify-center items-center w-[56px] h-[56px] rounded-lg "
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
                <div className=" flex items-center">
                  <label
                    style={{
                      fontSize: 20,
                      fontWeight: "500",
                      paddingLeft: 16,
                      color: isDark ? "#fff" : "black",
                    }}
                  >
                    {name}
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <label
                  style={{
                    fontSize: 88,
                    fontWeight: "500",
                    fontStyle: "normal",
                    color: isDark ? "#fff" : "black",
                  }}
                >
                  {score}
                </label>
              </div>
              <div className="flex justify-center">
                <label
                  style={{
                    color: isDark ? "#fff" : "#626C7F",
                    fontSize: 18,
                    fontWeight: "400",
                    fontStyle: "normal",
                  }}
                >
                  out of 10
                </label>
              </div>
            </div>
          </div>
          <div className="">
            <button
              style={{
                backgroundColor: COLORS.Primary,
                borderRadius: "20px",
                display: "flex",
              }}
              className="mt-[20px] w-[100%] justify-center items-center flex rounded-lg h-[96px]"
              onClick={() => {
                dispatch(resetScore());
                navigate("/");
              }}
            >
              <label
                style={{
                  cursor: "pointer",
                  fontSize: 18,
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Play again
              </label>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultComponent;
