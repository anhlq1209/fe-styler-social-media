
import PostSide from "../../components/postSide/PostSide";
import ProfileSide from "../../components/profileSide/ProfileSide";

import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <div className="profileSide">Rightside</div>
    </div>
  );
};

export default Home;
