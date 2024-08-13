import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setCurrentUser } from "./reducer";

import "./styles.css";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchProfile = async () => {
    try {
        // const account = await client.profile();
        setProfile(currentUser);
      } catch (err: any) {
        navigate("/Kanbas/Account/Signin");
      }
  
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));

    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => { fetchProfile(); }, []);
  return (
    <div className="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div className="form-group profile">
          <input className="form-control wd-username" value={profile.username}
                 onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
          <input className="form-control  wd-password" value={profile.password}
                 onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
          <input className="form-control  wd-firstname" placeholder="firstName" value={profile.firstName}
                 onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
          <input className="form-control  wd-lastname" placeholder="lastName" value={profile.lastName}
                 onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>
          <input className="form-control wd-dob" value={profile.dob} placeholder="dob"
                 onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
          <input className="form-control wd-email" value={profile.email} placeholder="email"
                 onChange={(e) => setProfile({ ...profile, email: e.target.value })}/>
          <select className="form-control wd-role" onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          <button onClick={signout} className="wd-signout-btn btn btn-danger w-100 my-2 rounded">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
