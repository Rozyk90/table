import "./App.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

import { status as enumStatus } from "./enums";
import { fetchUsers } from "./redux/slices/users";

import { Loading } from "./components/other/other";
import Filters from "./components/filters/filters";
import Table from "./components/tabel/table";
import { Failed } from "./components/other/other";

function App() {
  const { status } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === enumStatus.idle) {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return (
    <div className="App">
      {(status === enumStatus.idle || status === enumStatus.loading) && (
        <Loading />
      )}
      {status === enumStatus.succeeded && <Filters />}
      {status === enumStatus.succeeded && <Table />}
      {status === enumStatus.failed && <Failed />}
    </div>
  );
}

export default App;
