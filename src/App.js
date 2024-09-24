import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Home from "./components/Dashboard/Home";
import Signup from "./components/Signup";
import Tags from "./components/Dashboard/Tags";
import Project from "./components/Dashboard/Project";
import AddProject from "./components/Dashboard/AddProject";
import Comment from "./components/Dashboard/Comment";
import RichTextEditor from "./components/RichTextEditor";
import Profile from "./components/Profile";
import QuestionForm from "./components/Dashboard/QuestionForm";
import ProjectForm from "./components/Dashboard/ProjectForm";
import SeparateProject from "./components/SeparateProject";
import Projectdetails from "./components/Dashboard/Projectdetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="home" element={<Home />} />
          <Route path="question-tag/:tagname" element={<Home />} />
          <Route path="tags" element={<Tags />} />
          <Route path="project" element={<Project />} />
          <Route path="addproject" element={<AddProject />} />
          <Route path="profile" element={<Profile />} />
          <Route path="proform" element={<ProjectForm />} />
          <Route path="addquestion" element={<QuestionForm />} />
          <Route path="/projects/:id" element={<Projectdetails />} />
          <Route path="/project-join/:id" element={<SeparateProject />} />
          <Route path="/comments/:id" element={<Comment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
