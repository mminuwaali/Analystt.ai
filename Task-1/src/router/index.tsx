import router from "./router";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReactElement } from "react";

export default (): ReactElement => (
  <Router>
    <Routes>
      {router.map(item => (<Route key={item.path} {...item} element={<item.component />} />))}
    </Routes>
  </Router>
);
