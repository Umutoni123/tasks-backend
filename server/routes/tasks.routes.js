import express from 'express';
import { createTask, deleteTasks, editTasks, getOneTask, getTasks } from '../controllers/tasks.controller';
import verifyLogin from '../middlewares/verifyLogin';
import uploadFiles from '../middlewares/upload';

const routes = express();

routes.post('/task', verifyLogin, createTask);
routes.get('/tasks', verifyLogin, getTasks);
routes.delete('/task', verifyLogin, deleteTasks);
routes.patch('/task', verifyLogin, editTasks);
routes.get('/one-task', verifyLogin, getOneTask);

export default routes;
