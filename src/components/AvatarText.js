function AvatarText(props) {
  return (
    <div>
      <p className="img_description">
        size <b>{props.size.key}</b> with{" "}
        <b>
          {props.size.dimension} x {props.size.dimension}
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
