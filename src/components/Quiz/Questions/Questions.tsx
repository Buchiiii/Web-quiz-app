import { useState } from "react";
import jsonData from "../../../data.json";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { COLORS } from "../../../constants/Theme";
import { ReactComponent as Check } from "../../../assets/images/icon-correct.svg";
import { ReactComponent as Wrong } from "../../../assets/images/icon-incorrect.svg";
import { incrementScore } from "../../../redux/slices/score";

interface IQuestionsProps {
  name: string;
}

const Questions = ({ name }: IQuestionsProps) => {
  const answers: string[] = [];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [choice, setChoice] = useState("");
  const [error, setError] = useState(false);
  const optionsLetter = ["A", "B", "C", "D"];
  const [progress, setProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const { isDark } = useSelector((state: RootState) => state.theme);

  const data = jsonData.quizzes.filter((element) => {
    return element.title === name;
  });
  const questions = data[0].questions;

  questions.forEach((element) => answers.push(element.answer));

  const calculateProgress = () => {
    setProgress(((questionIndex + 1) / questions.length) * 100);
  };

  const incrementQuestionIndex = () => {
    setQuestionIndex((previous) => previous + 1);
  };

  const calculateScore = (choice: string, answer: string) => {
    if (choice === answer) {
      dispatch(incrementScore());
    }
  };

  return (
    <>
      <div className="w-[1160px] grid md:grid-cols-2 sm:grid-cols-1">
        <div className="  flex pb-4">
          <div
            style={{ display: "flex" }}
            className=" md:h-[452px]  flex flex-col "
          >
            <div className="mb-[27px] ">
              <label
                style={{ color: COLORS.GreyNavy, fontFamily: "Rubik-Italic" }}
              >
                Question {questionIndex + 1} of {questions.length}
              </label>
            </div>
            <div>
              <label
                style={{
                  color: isDark ? "#fff" : "#313E51",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontFamily: "Rubik-Medium",
                }}
              >
                {questions[questionIndex].question}
              </label>
            </div>
            <div
              style={{ flex: 1 }}
              className="justify-end  h-[40px] mt-2 flex items-end"
            >
              <div className="h-[17px] w-[100%] p-1 rounded-lg border  shadow">
                <div className="h-2 relative w-200 ">
                  <span
                    className="absolute  "
                    style={{
                      backgroundColor: COLORS.Primary,
                      display: "inline-block ",
                      height: "100%",
                      width: `${progress}%`,
                      borderRadius: "20px",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ transition: "0.4s" }} className="flex flex-col ">
          {questions[questionIndex].options.map((element, index) => (
            <>
              <button
                disabled={isSubmitted}
                key={index}
                onClick={() => {
                  setChoice(element);
                }}
                className="flex items-center mb-[20px] shadow h-[96px]  "
                style={{
                  borderRadius: "20px",
                  borderWidth: element === choice ? "3px" : "",
                  backgroundColor: isDark ? "#3B4D66" : "#FFFFFF",
                  borderColor:
                    choice === element
                      ? isSubmitted
                        ? choice === answers[questionIndex]
                          ? "green"
                          : "red"
                        : COLORS.Primary
                      : isDark
                      ? "#3B4D66"
                      : "white",

                  marginBottom: index === 3 ? 0 : "",
                }}
              >
                <div className="flex w-[100%]">
                  <div
                    className="flex justify-center items-center ms-[20px] self-center  w-[56px] h-[56px] rounded-lg"
                    style={{
                      backgroundColor:
                        choice === element
                          ? isSubmitted
                            ? choice === answers[questionIndex]
                              ? "green"
                              : "red"
                            : COLORS.Primary
                          : "#F4F6FA",
                    }}
                  >
                    <label
                      style={{
                        color:
                          element === choice
                            ? choice === answers[questionIndex]
                              ? "white"
                              : "white"
                            : "",
                        fontSize: 18,
                        fontWeight: "500",
                      }}
                    >
                      {optionsLetter[index]}
                    </label>
                  </div>
                  <div
                    style={{ flex: 1 }}
                    className="flex  pe-4  self-center ms-[32px]"
                  >
                    <label
                      className=""
                      style={{
                        cursor: "pointer",
                        textAlign: "start",
                        fontSize: 18,
                        fontWeight: "500",
                        paddingLeft: 16,
                        color: isDark ? "white" : "black",
                      }}
                    >
                      {element}
                    </label>
                  </div>
                </div>
                <div>
                  {isSubmitted ? (
                    element === answers[questionIndex] ? (
                      <Check />
                    ) : (
                      <></>
                    )
                  ) : (
                    <></>
                  )}

                  {isSubmitted ? (
                    element === choice ? (
                      choice !== answers[questionIndex] ? (
                        <Wrong />
                      ) : (
                        <></>
                      )
                    ) : (
                      <></>
                    )
                  ) : (
                    <></>
                  )}
                </div>
              </button>
            </>
          ))}
          <div className="pb-3 flex flex-col ">
            {isSubmitted && !(questionIndex === questions.length - 1) ? (
              <>
                <button
                  style={{
                    transition: "0.4s",
                    backgroundColor: COLORS.Primary,
                    borderRadius: "20px",
                  }}
                  className=" mt-[20px] justify-center items-center flex rounded-lg h-[96px]"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

                    setChoice("");
                    setIsSubmitted(false);

                    incrementQuestionIndex();
                    calculateProgress();
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
                    Next Question
                  </label>
                </button>
              </>
            ) : (
              <>
                <button
                  id="myButton"
                  style={{
                    msTransitionDelay: "20s",
                    backgroundColor: COLORS.Primary,
                    borderRadius: "20px",
                  }}
                  className="mt-[20px] justify-center items-center flex rounded-lg h-[96px]"
                  onClick={() => {
                    if (choice === "") {
                      setError(true);
                    } else {
                      setError(false);
                      calculateScore(choice, answers[questionIndex]);
                      if (questionIndex === questions.length - 1) {
                        document
                          .getElementById("myButton")
                          ?.setAttribute("disabled", "");
                        setTimeout(() => {
                          navigate(`/result/${name}`);
                        }, 1000);
                      }
                      setIsSubmitted(true);
                    }
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
                    Submit Answer
                  </label>
                </button>

                {error ? (
                  <div className="mt-[20px] flex justify-center">
                    <div className="">
                      <Wrong />
                    </div>
                    <div className="self-center">
                      <label
                        style={{
                          color: "#EE5454",
                          fontSize: 18,
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontFamily: "Rubik-Regular",
                          marginLeft: 8,
                        }}
                      >
                        Please select an answer
                      </label>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
