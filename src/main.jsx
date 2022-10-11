import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { ToDoTravel } from './ToDoTravel'
import tailwind from './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  {/* <React.StrictMode> */}
      <ToDoTravel />
  {/* </React.StrictMode> */}
</BrowserRouter>
)
