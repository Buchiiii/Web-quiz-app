import { useSelector } from "react-redux";
import Header from "../../components/common/Header/Header";
import { RootState } from "../../redux/store";
import { useParams } from "react-router-dom";


interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const name = useParams();
  return (
    <>
      <div
        className=" ps-3 pe-3 pt-2 sm:ps-3 sm:pe-3"
        style={{
          overflowX: "hidden",
          height: "100vh",
          backgroundColor: isDark ? "#3B4D66" : "#FFFFFF",
          backgroundImage: !isDark
            ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='960' fill='none' viewBox='0 0 1440 960'%3E%3Cg stroke='%23edf1f9' stroke-width='144'%3E%3Ccircle cx='-50.5' cy='75.5' r='416.5'/%3E%3Ccircle cx='1388.5' cy='840.5' r='416.5'/%3E%3C/g%3E%3C/svg%3E")`
            : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='960' fill='none' viewBox='0 0 1440 960'%3E%3Ccircle cx='-50.5' cy='75.5' r='416.5' stroke='%232D3949' stroke-width='144'/%3E%3Ccircle cx='1388.5' cy='840.5' r='416.5' stroke='%232D3949' stroke-width='144'/%3E%3C/svg%3E")`,
        }}
      >
        <Header name={name.name} />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
