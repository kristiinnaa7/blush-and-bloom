import { useAuthContext } from "../context/AuthContext";
import "./Profile.css";
import profile from "../../assets/profile.jpg";
import frame from "../../assets/profileframe.jpg";
const Profile = () => {
  const { email } = useAuthContext();
  const name = email?.split("@")[0];
  return (
    <div className="profile">
      <div className="frame">
        <img src={frame} alt="frame" />
      </div>

      <div className="profile-info">
        <h2>Profile</h2>
        <div className="profile-fields">
          <div>
            <strong>Name:</strong> <span className="new-line">{name}</span>
          </div>
          <div>
            <strong>Email:</strong> <span className="new-line">{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
