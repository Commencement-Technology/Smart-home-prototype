import { getDevices,addDevices,updatedevices,deletedevices } from "../controllers/devices";
import { Router } from "express";

const router:Router= Router()

router.get("/devices",getDevices)
router.post("/adddevice",addDevices)
router.put("/updatedevice/:id",updatedevices)
router.delete("/deletedevice/:id",deletedevices)
export default router