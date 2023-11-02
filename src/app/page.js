import HelloButton from "../components/HelloButton";

export default function Page() {
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
      <HelloButton buttonText={"Hi"} buttonText2={"Mimo"} />
    </section>
  );
}
