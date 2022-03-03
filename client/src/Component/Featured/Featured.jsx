import "./Featured.scss";
import { GrPlayFill } from "react-icons/gr";
import { GoInfo } from "react-icons/go";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="catagory">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantacy">Fantacy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thiriller">Thiriller</option>
            <option value="western">Western</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://i.ibb.co/h1dpc9w/pexels-photo-6899260.jpg"
        alt="HeaderImage"
      />
      <div className="info">
        <img
          src="https://i.ibb.co/6wPjdvS/AAAABUZde-G1-Dr-Mstq-YKHZ-d-A-cx2u-QN-Yb-CYx7-RABDk0y7-F8-ZK6nzg-Cz4bp5q-JVg-Miz-Pb-Vp-Iv-Xrd4x-MBQA.webp"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          corporis illo neque maiores, totam nam porro soluta nesciunt rem
          recusandae tempore sapiente. Numquam esse tempore maxime quisquam.
        </span>
        <div className="buttons">
          <button className="play">
            <GrPlayFill />
            <span>Play</span>
          </button>
          <button className="more">
            <GoInfo />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
