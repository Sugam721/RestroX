import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
};

export default App;
