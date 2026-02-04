import UseStateEx from "./components/UseStateEx";
import UseEffectEx from "./components/UseEffectEx";
import UseReducerEx from "./components/UseReducerEx";
import UseRefEx from "./components/UseRefEx";
import UseMemoEx from "./components/UseMemoEx";
import UseCallbackEx from "./components/UseCallbackEx";

function App() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#173d75" }}>
      <h1 style={{ textAlign: "center" }}>Review Hooks Core</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <UseStateEx />
        <UseEffectEx />
        <UseReducerEx />
        <UseRefEx />
        <UseMemoEx />
        <UseCallbackEx />
      </div>
    </div>
  );
}
export default App;
