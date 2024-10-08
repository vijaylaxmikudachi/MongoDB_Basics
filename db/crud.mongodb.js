use("bridgeLabz")
//insert
db.employees.insertOne(  {
    "employeeId": ObjectId("652573559c9d5e312a88e7d5"),
    "name": "John Doe",
    "position": "Software Engineer",
    "department": "Engineering",
    "salary": 75000,
    "yearsOfExperience": 3
});

db.employees.insertMany([
  
    {
        "employeeId": ObjectId("652573579c9d5e312a88e7d6"),
        "name": "Jane Smith",
        "position": "Data Analyst",
        "department": "Data Science",
        "salary": 68000,
        "yearsOfExperience": 4
    },
    {
        "employeeId": ObjectId("652573589c9d5e312a88e7d7"),
        "name": "Alice Johnson",
        "position": "Project Manager",
        "department": "Operations",
        "salary": 85000,
        "yearsOfExperience": 6
    },
    {
        "employeeId": ObjectId("6525735a9c9d5e312a88e7d8"),
        "name": "Robert Brown",
        "position": "DevOps Engineer",
        "department": "Engineering",
        "salary": 78000,
        "yearsOfExperience": 5
    },
    {
        "employeeId": ObjectId("6525735b9c9d5e312a88e7d9"),
        "name": "Linda Davis",
        "position": "HR Manager",
        "department": "Human Resources",
        "salary": 70000,
        "yearsOfExperience": 8
    },
    {
        "employeeId": ObjectId("6525735d9c9d5e312a88e7da"),
        "name": "Daniel Martinez",
        "position": "Marketing Specialist",
        "department": "Marketing",
        "salary": 64000,
        "yearsOfExperience": 2
    },
    {
        "employeeId": ObjectId("6525735f9c9d5e312a88e7db"),
        "name": "Michael Clark",
        "position": "Sales Executive",
        "department": "Sales",
        "salary": 72000,
        "yearsOfExperience": 7
    },
    {
        "employeeId": ObjectId("652573609c9d5e312a88e7dc"),
        "name": "Emily Davis",
        "position": "UX Designer",
        "department": "Design",
        "salary": 68000,
        "yearsOfExperience": 4
    },
    {
        "employeeId": ObjectId("652573629c9d5e312a88e7dd"),
        "name": "David White",
        "position": "Software Architect",
        "department": "Engineering",
        "salary": 95000,
        "yearsOfExperience": 10
    },
    {
        "employeeId": ObjectId("652573649c9d5e312a88e7de"),
        "name": "Sarah Wilson",
        "position": "Financial Analyst",
        "department": "Finance",
        "salary": 70000,
        "yearsOfExperience": 5
    }
]);
