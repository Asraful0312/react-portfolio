import {
  Home,
  About,
  Contact,
  Experience,
  Projects,
  Skills,
  ProjectDetails,
} from "./utils/constans";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
