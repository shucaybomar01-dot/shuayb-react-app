function Clicker() {
  const handleClick = () => {
    alert("Button clicked!");
  }

  return (
    <button
      style={{
        padding: "10px",
        margin: "10px",
        backgroundColor: "lightgray",
      }}
      onClick={handleClick}
    >
      Click Me
    </button>
  );
}

export default Clicker;
