import "./table.css";
import TableHead from "./elements/tableHead";
import TableBody from "./elements/tableBody";

const Table = () => {
  return (
    <table className="tableContainer">
      <TableHead />
      <TableBody />
    </table>
  );
};

export default Table;
