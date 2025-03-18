import { useAuthContext } from "../context/AuthContext";
import "./Profile.css";
import bottle from "../../assets/yellowbottle.jpg";
import flowers from "../../assets/goldflower.jpg";
import flowers2 from "../../assets/whiteflower.jpg";

const Profile = () => {
  const { email } = useAuthContext();
  const name = email?.split("@")[0];
  return (
    <div className="profile">
      <div className="frame">
        <img src={bottle} alt="frame" />
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
      <div className="flowers">
        <div className="camellia">
          <img src={flowers2} alt="flowers" />
        </div>
        <div className="camellia-two">
          <img src={flowers} alt="flowers" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
