import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Navbar from './components/Navbar/Navbar'
import  Contact  from "./components/contact/Contact";
import  CallToAction  from "./components/calltoaction/CallToAction"




//Pages
import Home from './pages/Home';




const App = () => {
  return (
    <div>
        <Router>
       <Navbar /> 
        <Routes>
          <Route path="/">
           <Route index element={<Home />} />
          
            {/* <Route path="login" element={<Login />} /> */}
            {/* <Route path="signup" element={<SignUp />} />
            <Route path="pricing" element={<Pricing />} /> */}
          {/*   <Route path="vendors">
              <Route index element={<Vendor />} />
              <Route path=":vendorId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Vendor" />}
              />
            </Route> */}
         {/*    <Route path="projects">
              <Route index element={<Project />} />
              <Route path=":projectId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Project" />}
              />
            </Route> */}
           {/*  <Route path="clients">
              <Route index element={<List />} />
              <Route path=":clientId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Client" />}
              />
            </Route> */}
           {/*  <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route> */}
           <Route path="contact">
              <Route index element={<Contact />} />
              
            
            </Route> 
           <Route path="quote">
              <Route index element={<CallToAction />} />
              
            
            </Route> 
          </Route>
        </Routes>
        <Footer /> 
      </Router>
    </div>
  )
}

export default App