import { Router } from "express";
const router = Router();
import NodeController from '../controllers/NodeController'

router.get("/all", NodeController.getAll);
router.post("/", NodeController.create);
router.put("/:id", NodeController.update);
router.get("/:id", NodeController.get);
router.delete("/:id", NodeController.destroy);

export default router;