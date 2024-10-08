use("bridgeLabz");

db.courses.find();

//Specific
db.courses.find({ "courseName": "Machine Learning" });

//Greater than or equal to
db.courses.find({ "duration": { $gte: 10 } });

//By key
db.courses.find({ "instructor": "Prof. Jane Smith" });

//Less than
db.courses.find({ "studentsEnrolled": { $lt: 100 } });

db.courses.find({
    "instructor": "Dr. Robert Brown",
    "duration": { $gte: 10 }
});

//Regular expression
db.courses.find({ "courseName": { $regex: "Development", $options: "i" } });

//Sorting in descending order
db.courses.find().sort({ "duration": -1 });

//Limiting the Result
db.courses.find().limit(5);

//Count Documents
db.courses.countDocuments();

//Returning Selected Fields
db.courses.find({ "duration": { $gte: 8 } }, { "courseName": 1, "instructor": 1 });
