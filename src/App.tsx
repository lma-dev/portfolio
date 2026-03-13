import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChatBot from "./components/chatbot/ChatBot";
import "./css/style.css";

const About = lazy(() =>
  import("./components/About").then((m) => ({ default: m.About }))
);
const Technologies = lazy(() =>
  import("./components/Technologies").then((m) => ({ default: m.Technologies }))
);
const Achievement = lazy(() =>
  import("./components/Acheivement").then((m) => ({ default: m.Achievement }))
);
const Experience = lazy(() =>
  import("./components/Experience").then((m) => ({ default: m.Experience }))
);
const Education = lazy(() =>
  import("./components/Education").then((m) => ({ default: m.Education }))
);
const Projects = lazy(() =>
  import("./components/Projects").then((m) => ({ default: m.Projects }))
);
const Contact = lazy(() =>
  import("./components/Contact").then((m) => ({ default: m.Contact }))
);
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-700 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>{" "}
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="h-96" />}>
          <About />
          <Technologies />
          <Achievement />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </Suspense>
      </div>

      <ChatBot />
    </div>
  );
};

export default App;
