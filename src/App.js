
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Stepone from './Componenets/stepone';
import StepTwo from './Componenets/stepTwo';

function App() {
  return (
    <div className="App">


      <h2>User form </h2>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Stepone></Stepone>}></Route>
          <Route path="/second" element={<StepTwo></StepTwo>}></Route>



        </Routes>



      </BrowserRouter>



    </div>
  );
}

export default App;
