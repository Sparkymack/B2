import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";
import NotFound from "./screens/NotFound";
import Page1 from "./screens/Page1";
import Page2 from "./screens/Page2";
import Page3 from "./screens/Page3";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <NavBar />
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/Page1"
              element={
                <Layout>
                  <Page1 />
                </Layout>
              }
            />
            <Route
              path="/Page2"
              element={
                <Layout>
                  <Page2 />
                </Layout>
              }
            />
            <Route
              path="/Page2"
              element={
                <Layout>
                  <Page3 />
                </Layout>
              }
            />
            <Route
              path="/sign-up"
              element={
                <Layout>
                  <SignUp />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout>
                  <Profile />
                </Layout>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
