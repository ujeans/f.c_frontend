import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/posts" element={<h1>post list</h1>} />
      <Route path="/posts/:id" element={<h1>post detail</h1>} />
      <Route path="/posts/new" element={<h1>post new</h1>} />
      <Route path="/posts/edit/:id" element={<h1>post edit</h1>} />
      <Route path="/profile" element={<h1>profile</h1>} />
      <Route path="/profile/edit" element={<h1>profile edit</h1>} />
      <Route path="/notifications" element={<h1>notifications</h1>} />
      <Route path="search/" element={<h1>search</h1>} />
      <Route path="/users/login" element={<h1>login</h1>} />
      <Route path="/users/signup" element={<h1>signup</h1>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
