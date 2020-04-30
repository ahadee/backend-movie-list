const express = require("express") 
const router = express.Router()

const { getAll, create, edit, deleteByIDMovie, findID  } = require("./controller")

router.get("/", getAll)
router.post("/",create)
router.put("/:id",edit)
router.delete("/:id",deleteByIDMovie)
router.get("/:userid",findID)

module.exports = router