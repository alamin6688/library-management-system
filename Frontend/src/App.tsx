import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};

export default App;
