const EmployeeController = require("./controller/employee-controller");
const express = require("express");
const router = express.Router();

router.get("/employees", EmployeeController.getAllEmployees);
router.post("/add_emp", EmployeeController.create);
router.get("/findEmp/:id", EmployeeController.findEmp);
router.delete("/deleteEmployee/:id", EmployeeController.deleteEmployee);
router.put("/editEmployee/:id", EmployeeController.editEmployee);
module.exports = router;
