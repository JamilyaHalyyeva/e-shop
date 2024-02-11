import "./App.css";
import Nav from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<h1>Product Component</h1>} />
          <Route path="/add" element={<h1>Add Product Component</h1>} />
          <Route path="/update" element={<h1>Update Product Component</h1>} />
          <Route path="/delete" element={<h1>Delete Component</h1>} />
          <Route path="/logout" element={<h1>Logout Component</h1>} />
          <Route path="/profile" element={<h1>Profile Component</h1>} />
        </Routes>
        <h1>Dashboard part</h1>
          <p>
          It is a long established fact that a reader will be 
          distracted by the readable content of a page when looking 
          at its layout. The point of using Lorem Ipsum is that it has
           a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable English. 
          </p>
        

          <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
