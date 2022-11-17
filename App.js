
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { Courses } from './components/Courses';
import AllCourses from './components/AllCourses';
import { Bundles } from './components/Bundles';
import SingleCourses  from './components/SingleCourses';
import { Dashboard } from './components/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apps" element={<Navigate replace to="courses" />} />
      <Route path="/courses" element={<Courses />} >
      <Route path="allcourses" element={<AllCourses />}>
        <Route path=":id" element={<SingleCourses/>}/>
        
        </Route>
      <Route path="bundles" element={<Bundles />} />
      
        </Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
