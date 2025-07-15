    const express = require("express");
    const cors = require("cors");
    const app = express();

    app.use(cors());
    app.use(express.json());

    let employees = [];
    let id = 1;

    // GET all employees
    app.get("/employees", (req, res) => {
    res.json(employees);
    });

    // POST create new employee
    app.post("/employees", (req, res) => {
    const emp = { id: id++, ...req.body };
    employees.push(emp);
    res.status(201).json(emp);
    });

    // PUT update employee
    app.put("/employees/:id", (req, res) => {
    const empId = parseInt(req.params.id);
    const index = employees.findIndex((e) => e.id === empId);

    if (index !== -1) {
        employees[index] = { ...employees[index], ...req.body };
        res.json(employees[index]);
    } else {
        res.status(404).json({ error: "Employee not found" });
    }
    });

    // DELETE employee
    app.delete("/employees/:id", (req, res) => {
    const empId = parseInt(req.params.id);
    employees = employees.filter((e) => e.id !== empId);
    res.json({ message: "Employee deleted" });
    });

    // Start server
    const PORT = 5000;
    app.listen(PORT, () => console.log(`Server running at  http://localhost:5000`));
