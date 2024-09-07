import "./tableBody.css";

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";

interface User {
  name: string;
  username: string;
  email: string;
  phone: string | number;
}

const TableBody = () => {
  const { users } = useAppSelector((state) => state.users);
  const { sortBy, direction } = useAppSelector((state) => state.sort);
  const { name, username, email, phone } = useAppSelector(
    (state) => state.filters
  );

// ==============================================================

  const filterUsers = (user: User) => {
    const cleanPhone = (phone: string) => phone.replace(/\D/g, "");

    const matchesName =
      name === "" || user.name.toLowerCase().includes(name.toLowerCase());
    const matchesUsername =
      username === "" ||
      user.username.toLowerCase().includes(username.toLowerCase());
    const matchesEmail =
      email === "" || user.email.toLowerCase().includes(email.toLowerCase());

    const matchesPhone =
      phone === "" ||
      cleanPhone(user.phone.toString()).includes(cleanPhone(phone.toString()));

    return matchesName && matchesUsername && matchesEmail && matchesPhone;
  };

  // ==============================================================

  const sortByProperty = (a: User, b: User) => {
    const valueA = a[sortBy].toString();
    const valueB = b[sortBy].toString();

    return direction === "a-z"
      ? valueA.localeCompare(valueB)
      : valueB.localeCompare(valueA);
  };

  return (
    <tbody className="bodyContainer">
      {[...users]
        .filter((user) => filterUsers(user))
        .sort((a, b) => sortByProperty(a, b))
        .map((user, id) => (
          <tr key={id}>
            <td>{id + 1}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
