export default function Home() {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          margin: 0,
          marginBottom: "12px",
          fontSize: "24px",
        }}
      >
        Welcome to my App
      </h1>
      <HelloButton buttonText={"Hi"} buttonText2={"Mimo"} />
    </section>
  );
}

function HelloButton(props) {
  const { buttonText, buttonText2 } = props;
  return (
    <>
      <button
        style={{
          width: "120px",
          height: "36px",
        }}
      >
        {" "}
        {buttonText}{" "}
      </button>
      <button
        style={{
          width: "120px",
          height: "36px",
        }}
      >
        {" "}
        {buttonText2}{" "}
      </button>
    </>
  );
}
