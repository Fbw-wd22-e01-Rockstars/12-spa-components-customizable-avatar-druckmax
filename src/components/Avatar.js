import "./Avatar.css";

function Avatar(props) {
  return (
    <div className="img_container">
      <img
        className={`img ${props.size.key} ${props.type}`}
        src={props.src}
        alt="picsum"
      />
    </div>
  );
}

export default Avatar;
