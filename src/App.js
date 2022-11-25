import DataGrid from "./Screen/DataGridScreen";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<DataGrid/>}/>
      </Routes>
    </Router>
    {/* <DataGrid/> */}
    </>
    
  );
}

export default App;
