"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
require("./index.css");
var App_tsx_1 = require("./App.tsx");
var Home_tsx_1 = require("./pages/Home.tsx");
var About_tsx_1 = require("./pages/About.tsx");
var Services_tsx_1 = require("./pages/Services.tsx");
var Skills_tsx_1 = require("./pages/Skills.tsx");
var Projects_tsx_1 = require("./pages/Projects.tsx");
var Contact_tsx_1 = require("./pages/Contact.tsx");
var ProjectDetails_tsx_1 = require("./pages/ProjectDetails.tsx");
(0, client_1.createRoot)(document.getElementById("root")).render(<react_1.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<App_tsx_1.default />}>
          <react_router_dom_1.Route index element={<Home_tsx_1.HomePage />}/>
          <react_router_dom_1.Route path="about" element={<About_tsx_1.AboutPage />}/>
          <react_router_dom_1.Route path="services" element={<Services_tsx_1.ServicesPage />}/>
          <react_router_dom_1.Route path="skills" element={<Skills_tsx_1.SkillsPage />}/>
          <react_router_dom_1.Route path="projects" element={<Projects_tsx_1.ProjectsPage />}/>
          <react_router_dom_1.Route path="project/:id" element={<ProjectDetails_tsx_1.ProjectDetailsPage />}/>
          <react_router_dom_1.Route path="contact" element={<Contact_tsx_1.ContactPage />}/>
        </react_router_dom_1.Route>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>
  </react_1.StrictMode>);
