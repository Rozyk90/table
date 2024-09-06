import { columns } from "../../../enums";
import { useAppDispatch } from "../../../redux/hooks";
import "../filters.css";

const Input = ({
  placeholder,
  fn,
  value,
}: {
  placeholder: string;
  fn: Function;
  value: string;
}) => {
  const dispatch = useAppDispatch();

  return (
    <input
      value={value}
      onChange={(e) => dispatch(fn(e.target.value))}
      placeholder={placeholder}
      className="input"
    ></input>
  );
};

export { Input };
