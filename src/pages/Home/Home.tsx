import Subjects from "../../components/Home/Subjects/Subjects";
import WelcomeMessage from "../../components/Home/Welcome-message/Welcome-message";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 w-[1160px]">
        <WelcomeMessage />
        <Subjects />
      </div>
    </div>
  );
};

export default Home;
