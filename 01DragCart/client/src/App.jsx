import React from "react";
import Background from "./components/Background";
import Forground from "./components/Forground";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 text-white relative">
        {/* <Background /> */}
        <Forground />
      </div>
    </>
  );
}

export default App;
