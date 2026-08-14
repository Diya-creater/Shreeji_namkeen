import { useState } from "react";

import Loader from "./components/Loader/Loader";
import Home from "./pages/Home/Home";

function App() {

  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader
          onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;