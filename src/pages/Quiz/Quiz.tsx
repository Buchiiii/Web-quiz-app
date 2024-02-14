import { useParams } from "react-router-dom";
import Questions from "../../components/Quiz/Questions/Questions";

const Quiz = () => {
  const name = useParams();
  return (
    <>
      <div className="flex justify-center ">
        <Questions name={name.name as string} />
      </div>
    </>
  );
};

export default Quiz;
