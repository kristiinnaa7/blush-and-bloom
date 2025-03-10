import { useAuthContext } from "../context/AuthContext";

const Profile = () => {
  const { email } = useAuthContext();
  return <div>{email}</div>;
};

export default Profile;
