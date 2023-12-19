import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "pages/Home";
import Movies from "pages/Movies";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};

export default App;
