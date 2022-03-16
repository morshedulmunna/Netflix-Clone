import "./List.scss";
import ListItem from "../listItem/ListItem";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useRef, useState } from "react";

const List = () => {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMovie, setIsMovie] = useState(false);
  //   console.log(listRef);

  const handleClick = (direction) => {
    setIsMovie(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    // console.log(distance);
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 8) {
      setSlideNumber(slideNumber + 1);

      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <>
      <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
          <MdArrowBackIosNew
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMovie && "none" }}
          />
          <div className="container" ref={listRef}>
            <ListItem index={0} />
            <ListItem index={1} />
            <ListItem index={2} />
            <ListItem index={3} />
            <ListItem index={4} />
            <ListItem index={5} />
            <ListItem index={6} />
            <ListItem index={7} />
            <ListItem index={8} />
            <ListItem index={9} />
            <ListItem index={10} />
          </div>
          <MdArrowForwardIos
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
};

export default List;
