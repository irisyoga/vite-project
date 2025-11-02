import { useEffect, useState, type JSX } from "react";
import type User from "./type/User";

export default function UsersPage(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  async function loadUsers(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/users");
    const arr = await res.json();
    setUsers(arr);
  }
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      <ul style={{listStyleType: "none"}}>
        {users.map((user) => (
          <li
            style={{ border: "solid black 2px", margin: "10px" }}
            key={user.id}
          >
            <div>Nick: {user.username}</div>
            <div>
              Username: {user.name.firstname} {user.name.lastname}
            </div>
            <div>Phone: {user.phone}</div>
            <div>Email:{user.email}</div>
            <div>
              Address: {user.address.street} St., {user.address.number},{" "}
              {user.address.city}
            </div>
            <div>Zip-code: {user.address.zipcode}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

