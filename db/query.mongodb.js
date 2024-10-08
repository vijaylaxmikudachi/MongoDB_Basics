use("bridgeLabz");
db.employees.find({ "department": "Engineering" });

//In
db.employees.find({ "department": { $in: ["Marketing", "Sales"] } });

//NOT in
db.employees.find({ "department": { $nin: ["Human Resources"] } });

//Sort
db.employees.find({ "department": "Finance" }).sort({ "salary": 1 });

//count document
db.employees.countDocuments({ "department": "Operations" });

//Specific fields
db.employees.find({ "department": "Engineering" }, { "name": 1, "position": 1, "_id": 0 });


//Partial name
db.employees.find({ "department": { $regex: "Data", $options: "i" } });
