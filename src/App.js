import React from "react";

import Home from "./routes/home/Home";
import Groups from "./routes/groups/Groups";
import Group from "./routes/group/Group";
import People from "./routes/people/People";
import References from "./routes/references/References";
import Species from "./routes/species/Species";
import Paper from "./routes/paper/Paper";
import Data from "./routes/data/Data";
import Model from "./routes/model/Model";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/alien-species-page">
            <Route index element={<Home />} />
            <Route path="groups">
              <Route index element={<Groups />} />
              <Route path=":groupId">
                <Route index element={<Group />} />
                <Route path=":species" element={<Species />} />
              </Route>
            </Route>
            <Route path="people">
              <Route index element={<People />} />
            </Route>
            <Route path="paper">
              <Route index element={<Paper />} />
            </Route>
            <Route path="data">
              <Route index element={<Data />} />
            </Route>
            <Route path="model">
              <Route index element={<Model />} />
            </Route>
            <Route path="references">
              <Route index element={<References />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
