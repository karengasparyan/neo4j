import {Router} from "express";
const router = Router();
import NodeController from '../controllers/NodeController'

router.post("/", NodeController.create);
router.get("/", NodeController.getAll);
router.put("/:id", NodeController.update);
router.get("/:id", NodeController.get);
router.delete("/:id", NodeController.destroy);

export default router;