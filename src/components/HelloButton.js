export default function HelloButton({ buttonText, buttonText2 }) {
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
      <button>{buttonText}</button>
      <button>{buttonText2}</button>
    </section>
  );
}
