import express from 'express';
import onuiiController from '../controllers/onuii.controller';

const onuiiRouter = express.Router();

onuiiRouter.get('/rank', (req, res) => {
  onuiiController.getRank(req, res);
});

export default onuiiRouter;
