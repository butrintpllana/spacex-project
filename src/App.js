 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import { Homepage, Error, SingleLaunches, Launches } from "./pages";
 import { Header } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/launches" element={<Launches />}></Route>
          <Route path="/launches/:flight_number" element={<SingleLaunches />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
