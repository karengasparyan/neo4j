import {Router} from "express";
const router = Router();
import node from './node'

router.use('/node', node);

export default router;
