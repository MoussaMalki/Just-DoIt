export const Input = ({ text }) => {
  return <input placeholder={text} style={inputStyles} />;
};

const inputStyles = {
  width: " 21.8rem",
  height: "3rem",
  borderRadius: "5px",
  border: "1px solid RGB(188, 188, 188)",
  outline: "none",
  marginBottom: "1vh",
  padding: "0 10px",
  color: "#fff",
};

export default Input;
