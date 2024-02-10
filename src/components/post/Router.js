import { Route,Routes } from "react-router-dom";

import React from 'react'
import List from "./List";
import Full from "./Full";

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<List />} />
        <Route path='/:id' element={<Full />} />
    </Routes>
  )
}
