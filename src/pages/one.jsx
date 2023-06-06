function Theme_select(props) {
  var flag;
  props.state == true ? (flag = "white") : (flag = "black");

  return (
    <div style={props.divstyle}>
      <h1 style={{ color: `${flag}` }}>Activate Theme</h1>
      <button onClick={props.Theme}>{props.btn}</button>
    </div>
  );
}
export default Theme_select;
