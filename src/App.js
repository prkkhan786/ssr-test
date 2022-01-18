import React, { useEffect, useState } from "react";
function App() {
  const SECRET_KEY = "my key";
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch(process.env.REACT_APP_SECRET_KEY, { SECRET_KEY }).then((res) =>
      console.log("")
    );
  }, []);

  const handleBtnClick = () => {
    setCount((prev) => prev + 1);
  };
  console.log(process.env);
  return (
    <div>
      <h1>Hello world</h1>
      <p>
        <button onClick={handleBtnClick}>Click Me</button>
      </p>
      <p>{count}</p>
      {/* <Child data={data} /> */}
    </div>
  );
}

export default App;
