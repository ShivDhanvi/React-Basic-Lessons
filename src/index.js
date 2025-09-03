import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AxiosSession from "./AxiosSession";
import DynamicAPI from "./DynamicAPI";
import FullStory from "./FullStory";
import StoryBook from "./StoryBook";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/storyBook" element={<StoryBook />} />
        <Route path="/dynamicApi" element={<DynamicAPI />} />
        <Route path="/posts" element={<AxiosSession />} />
        {/* Route for the detailed view of a single post.
          The ':id' is the dynamic parameter.
        */}
        <Route path="/posts/:id" element={<FullStory />} />
        {/* handling unknown pages */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
