import "./index.css";
interface IToggleSwitchProps {
  handleChange?: () => void;
}

const ToggleSwitch = ({ handleChange }: IToggleSwitchProps) => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={handleChange} />
        <span className="slider"></span>
      </label>
    </>
  );
};

export default ToggleSwitch;
