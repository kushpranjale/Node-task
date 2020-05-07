const Employee = require("../models/employee.model");

module.exports = {
  // get all employee
  getAllEmployees(req, res, next) {
    Employee.find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  //   create employee
  create(req, res, next) {
    const schema = new Employee({
      emp_id: req.body.emp_id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      dob: req.body.dob,
      createdDate: req.body.createdDate,
      isActive: req.body.isActive,
    });

    Employee.create(schema)
      .then((result) =>
        res.json({
          result: result._id,
          message: "added successfully",
        })
      )
      .catch((err) => res.status(500).json(err));
  },

  //   get single employee
  findEmp(req, res, next) {
    Employee.findOne({ _id: req.params.id })
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status.json({ message: "not found!!!" });
        }
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  },

  //   Delete Employee
  deleteEmployee(req, res, next) {
    Employee.deleteOne({ _id: req.params.id }).then((result) => {
      res.status(200).json(result);
      console.log(result);
    });
    res.status(200).json({
      message: "deleted",
    });
  },

  //   Edit Employee
  editEmployee(req, res, next) {
    Employee.findOne({ _id: req.params.id })
      .then((edit) => {
        edit.emp_id = req.body.emp_id;
        edit.name = req.body.name;
        edit.email = req.body.email;
        edit.phone = req.body.phone;
        edit.address = req.body.address;
        edit.dob = req.body.dob;
        edit.createdDate = req.body.createdDate;
        edit.isActive = req.body.isActive;

        edit.save((result) => {
          console.log(edit);
          res.status(200).json({ message: "updated" });
          console.log("inside save " + result);
        });
      })
      .catch((err) => {
        res.status(501).json(err);
        console.log("inside save err " + err);
      });
  },
};
