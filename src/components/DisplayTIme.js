const DisplayTIme = () => {
  let date = new Date();
  let theDate = date.toDateString().slice(0, 10);
  let theTime = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div style={dateDiv}>
        <h1 style={timeStyles}>{theTime}</h1>
        <p style={dateStyles}>{theDate}</p>
      </div>
    </>
  );
};

export default DisplayTIme;

const dateDiv = {
  textAlign: "center",
  margin: "5vh 0",
};
const timeStyles = {
  fontSize: "5rem",
  color: "var(--main-color)",
};

const dateStyles = {
  fontSize: "1rem",
  color: "#fff",
};
