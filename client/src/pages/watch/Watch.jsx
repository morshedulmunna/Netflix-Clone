import "./Watch.scss";
import { IoMdArrowRoundBack } from "react-icons/io";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <IoMdArrowRoundBack />
        Home
      </div>
      <video
        src="https://player.vimeo.com/external/441919418.sd.mp4?s=fd32c6313281aed64cbbf439dc17e86fc7bbaa15&profile_id=139&oauth2_token_id=57447761"
        autoPlay
        progress
        controls
      />
    </div>
  );
};

export default Watch;
