import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Summary";
import Layout from "@layouts/Layout";
import Education from "./pages/Education";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Education />} />
      </Route>
    </Routes>
  );
}
export default App;
