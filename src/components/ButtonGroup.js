import Button from './Button'

function ButtonGroup(props) {

  return (
    <div>
      <div className="buttonGroup">
        <Button onClick={props.small} text="s" />
        <Button onClick={props.medium} text="m" />
        <Button onClick={props.large} text="l" />
        <Button onClick={props.xl} text="xl" />
      </div>
      <div className="buttonGroup">
        <Button onClick={props.square} text="square" />
        <Button onClick={props.round} text="round" />
        <Button onClick={props.circle} text="circle" />
      </div>
    </div>
  );
}

export default ButtonGroup;
