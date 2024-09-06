import "../table.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setSort } from "../../../redux/slices/sort";
import { columns } from "../../../enums";

const TableHead = () => {
  const { direction, sortBy } = useAppSelector((state) => state.sort);
  const dispatch = useAppDispatch();

  const getSortMarkClass = (columnName: string) => {
    if (sortBy !== columnName) return "";
    return direction === "a-z" ? "mark" : "reverseMark";
  };

  const columnNames = [
    columns.name,
    columns.username,
    columns.email,
    columns.phone,
  ];

  return (
    <thead className="headContainer">
      <tr>
        <td>Lp.</td>
        {columnNames.map((column) => (
          <td key={column}>
            <button onClick={() => dispatch(setSort(column))}>
              {column} <div className={getSortMarkClass(column)} />
            </button>
          </td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
