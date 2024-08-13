import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";

export default function PeopleDetails({ fetchUsers }: { fetchUsers: () => void; }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editingName, setEditingName] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingRole, setEditingRole] = useState(false);

  const { uid, id } = useParams();
  const [user, setUser] = useState<any>({});

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
    setName(`${user.firstName} ${user.lastName}`);
    setEmail(user.email);
    setRole(user.role);
  };

  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName, email, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditingName(false);
    setEditingEmail(false);
    setEditingRole(false);
    fetchUsers();
    navigate(`/Kanbas/Courses/${id}/People`);
  };

  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    fetchUsers();
    navigate(`/Kanbas/Courses/${id}/People`);
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);

  if (!uid) return null;

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <Link to={`/Kanbas/Courses/${id}/People`} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" />
      </Link>
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      <div className="text-danger fs-4 wd-name">
        {!editingName && !editingEmail && !editingRole && (
          <FaPencil onClick={() => { setEditingName(true); setEditingEmail(true); setEditingRole(true); }} className="float-end fs-5 mt-2 wd-edit" />
        )}
        {(editingName || editingEmail || editingRole) && (
          <FaCheck onClick={saveUser} className="float-end fs-5 mt-2 me-2 wd-save" />
        )}

        {!editingName && (
          <div className="wd-name" onClick={() => setEditingName(true)}>
            {user.firstName} {user.lastName}
          </div>
        )}
        {editingName && (
          <input
            className="form-control w-50 wd-edit-name"
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveUser();
              }
            }}
          />
        )}
      </div>
      <hr />

      <div className="mb-3">
        <b>Email:</b>
        {!editingEmail && (
          <span className="wd-email ms-2" onClick={() => setEditingEmail(true)}>
            {user.email}
          </span>
        )}
        {editingEmail && (
          <input
            className="form-control wd-edit-email mt-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveUser();
              }
            }}
          />
        )}
      </div>

      <div className="mb-3">
        <b>Role:</b>
        {!editingRole && (
          <span className="wd-roles ms-2" onClick={() => setEditingRole(true)}>
            {role}
          </span>
        )}
        {editingRole && (
          <select
            className="form-control wd-edit-role mt-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveUser();
              }
            }}
          >
            <option value="STUDENT">Student</option>
            <option value="FACULTY">Faculty</option>
            <option value="ASSISTANT">Assistant</option>
          </select>
        )}
      </div>

      <hr />
      <b>Login ID:</b> <span className="wd-login-id ms-2">{user.loginId}</span> <br />
      <b>Section:</b> <span className="wd-section ms-2">{user.section}</span> <br />
      <b>Total Activity:</b> <span className="wd-total-activity ms-2">{user.totalActivity}</span>
      <hr />
      <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete">
        Delete
      </button>
      <button onClick={() => navigate(`/Kanbas/Courses/${id}/People`)} className="btn btn-secondary float-start float-end me-2 wd-cancel">
        Cancel
      </button>
    </div>
  );
}
