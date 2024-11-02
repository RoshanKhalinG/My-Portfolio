import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import StarsCanvas from "./components/StarsCanvas";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 99.1%, 0 100%);
`;

function App() {
  const [darkMode,] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading time with a timeout
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust this timeout as needed
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <ClimbingBoxLoader color="#00BFFF" size={20} />
        </div>
      ) : (
        <Router>
          <Navbar />
          <Body>
            <Wrapper>
              <StarsCanvas />
              <HeroSection />
              <Wrapper>
                <Skills />
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                <Contact />
              </Wrapper>
            </Wrapper>
            <Footer />
            {openModal.state && (
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            )}
          </Body>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;
