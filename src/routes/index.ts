import {Router} from "express";
const router = Router();
import node from './node'
import authorization from "../middlewares/authorization";

router.use('/node', authorization, node);

export default router;
