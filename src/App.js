import "./styles.css";

import {

  Routes,
  Route,
} from "react-router-dom";
import HeaderF from "./components/HeaderF";
import routes from "./routes";
export default function App() {


  return (
    <div className="App">
      <HeaderF/>
     <Routes>
       {
         routes.map(ele=>(
          <Route path={ele.link} element={ele.component}/>

         ))
       }
       
    </Routes>
    </div>
  );
}
