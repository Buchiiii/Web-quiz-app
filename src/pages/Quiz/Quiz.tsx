import { useParams } from "react-router-dom";
import Questions from "../../components/Quiz/Questions/Questions";

const Quiz = () => {
  const name = useParams();
  return (
    <>
      <div className="flex justify-center ">
        <div className=" w-[1160px]  ">
          <Questions name={name.name as string} />
        </div>
      </div>
    </>
  );
};

export default Quiz;
