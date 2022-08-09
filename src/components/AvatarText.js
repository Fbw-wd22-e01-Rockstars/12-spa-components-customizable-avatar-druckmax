function AvatarText(props) {
  let dimension;
  switch (props.size) {
    case "s":
      dimension = 30;
      break;
    case "m":
      dimension = 60;
      break;
    case "l":
      dimension = 120;
      break;
    case "xl":
      dimension = 200;
      break;
    default:
      dimension = 60;
  }

  return (
    <div>
      <p className="img_description">
        size <b>{props.size}</b> with{" "}
        <b>
          {dimension} x {dimension}
        </b>{" "}
        px
      </p>
      <p className="img_description">
        type <b>{props.type}</b>
      </p>
    </div>
  );
}

export default AvatarText;
