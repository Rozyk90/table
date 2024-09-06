import { useAppSelector } from "../../redux/hooks";
import "./other.css";

const Loading = () => {
  return <div className="loading" />;
};

const Failed = () => {
  const { error } = useAppSelector((state) => state.users);
  return <h2 className="failed">{error}</h2>;
};

export { Loading, Failed };
