import React, { useEffect, useState } from "react";
import { getEncryptedRequestBody } from "./encryption";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // fetch(process.env.REACT_APP_SECRET_KEY, { SECRET_KEY }).then((res) =>
    //   console.log("")
    // );
    getData();
  }, []);

  const getData = () => {
    const body = { myname: "parvez" };

    fetch(process.env.REACT_APP_SECRET_KEY, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: getEncryptedRequestBody(body),
    });
  };

  const handleBtnClick = () => {
    setCount((prev) => prev + 1);
  };

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
