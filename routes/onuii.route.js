import express from 'express';
import onuiiController from '../controllers/onuii.controller';

const onuiiRouter = express.Router();

onuiiRouter.post('/add', (req, res) => {
  onuiiController.addUser(req, res);
});

onuiiRouter.get('/get', (req, res) => {
  onuiiController.getAll(req, res);
})

onuiiRouter.get('/rank', (req, res) => {
  onuiiController.getRank(req, res);
});

export default onuiiRouter;
