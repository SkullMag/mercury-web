import './index.css';
import Definitions from './components/Definitions';
import LoginForm from './components/LoginForm';
import { render } from "react-dom";
import { 
    BrowserRouter,
    Routes,
    Route  
} from "react-router-dom";
import Header from './components/Header';


const rootElement = document.getElementById("root");
render(<BrowserRouter>
            <Header />
            <Routes>
                <Route path="/definitions" element={<Definitions />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>, 
       rootElement);

