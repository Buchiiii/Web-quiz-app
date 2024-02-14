import { useParams } from "react-router-dom";
import ResultComponent from "../../components/Results/ResultComponent";

const Result = () => {
  const name = useParams();
  return (
    <>
      <div className="flex justify-center ">
        <div className=" w-[1160px]  ">
          <ResultComponent name={name.name as string} />
        </div>
      </div>
    </>
  );
};

export default Result;
