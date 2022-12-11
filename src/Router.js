import React from 'react'



import {
  Routes,
  Route,
} from "react-router-dom";

import { Webview } from './containers/Webview'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Webview />}>
      </Route>
    </Routes>
  );
}

