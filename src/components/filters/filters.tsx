import "./filters.css";
import { Input } from "./elements/input";
import { columns } from "../../enums";
import {
  filtersClear,
  setEmail,
  setName,
  setPhone,
  setUsername,
} from "../../redux/slices/filters";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Filters = () => {
  const { name, username, email, phone } = useAppSelector(
    (state) => state.filters
  );
  const disaptch = useAppDispatch();
  const filters = [
    { fn: setName, placeholder: columns.name, value: name },
    { fn: setUsername, placeholder: columns.username, value: username },
    { fn: setEmail, placeholder: columns.email, value: email },
    { fn: setPhone, placeholder: columns.phone, value: phone },
  ];

  return (
    <form className="container">
      Filters:
      {filters.map((obj, id) => (
        <Input
          key={id}
          value={obj.value}
          fn={obj.fn}
          placeholder={obj.placeholder}
        />
      ))}
      <button type="button" onClick={() => disaptch(filtersClear())}>
        Clear
      </button>
    </form>
  );
};

export default Filters;
