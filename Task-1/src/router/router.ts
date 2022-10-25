import { main } from "../components/layout";
import { lazy, JSXElementConstructor, ReactElement } from "react";

const home = lazy(() => import('../views/home'));
const task = lazy(() => import('../views/task'));
const tasks = lazy(() => import('../views/tasks'));

export default [
  { path: '/', component: main(home), },
  { path: '/tasks', component: main(tasks), },
  { path: '/task/:id', component: main(task), },
] as { path: string, component: JSXElementConstructor<any> }[];