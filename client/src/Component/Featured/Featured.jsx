import "./Featured.scss";
import { GrPlayFill } from "react-icons/gr";
import { GoInfo } from "react-icons/go";

const Featured = () => {
  return (
    <div className="featured">
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
