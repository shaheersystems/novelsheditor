import { Route, Routes } from "react-router-dom";
import ContentPage from "./pages/Content";
import EditorPage from "./pages/Editor";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<ContentPage />} />
          <Route path="/editor" element={<EditorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
