import { lazy, JSXElementConstructor, ReactElement } from "react";

const home = lazy(() => import('../views/home'));
const task = lazy(() => import('../views/task'));
const tasks = lazy(() => import('../views/tasks'));

export default [
  { path: '/', component: home, },
  { path: '/tasks', component: tasks, },
  { path: '/task/:id', component: task, },
] as { path: string, component: JSXElementConstructor<any> }[];