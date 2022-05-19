import React from "react";

import Card from "./components/Card";

const App = () => {
  return (
    <>
      <h1 className="container text-center mt-5">DIO - ReactJs course</h1>
      <Card
        title="Card props"
        subtitle="Props subtitle"
        description="Props description"
      />
    </>
  );
};

export default App;
