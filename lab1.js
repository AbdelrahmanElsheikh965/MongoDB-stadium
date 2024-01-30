
// 1. Create database named: FacultySystemDB.
// use FacultySystemDB
//---------------------------------------------------------------------------------

// 2. Create collection (student) that has:
// 	? FirstName: string, LastName: string, Age: Number, Faculty: An object that
// 	has Name and Address
// 	? Grades: An array of objects, each object has: CourseName, Grade, Pass
// 	(Boolean).
// 	? IsFired: Boolean

/* db.createCollection("student")
db.student.insertOne({
    "FirstName":"ahmed",
     "LastName":"ali",
     "Age": 20,
     "Faculty": {"Name": "Medicine", "Address":"Tanta"},
     "Grades": [
        {"CourseName": "Compilers", "Grade": 100, "Pass": true},
        {"CourseName": "Networks",  "Grade": 97, "Pass": true},
        {"CourseName": "DBs",       "Grade": 98, "Pass": true},
     ],
       "IsFired": false
    })
*/
//---------------------------------------------------------------------------------
        

// 3. Insert 3 (at least) documents in Student collection with different values.
// 	? Try inserting one record each time

/*
db.student.insertOne({
    "FirstName":"ahmed",
     "LastName":"ali",
     "Age": 20,
     "Faculty": {"Name": "Medicine", "Address":"Tanta"},
     "Grades": [
        {"CourseName": "Compilers", "Grade": 100, "Pass": true},
        {"CourseName": "Networks",  "Grade": 97, "Pass": true},
        {"CourseName": "DBs",       "Grade": 98, "Pass": true},
     ],
       "IsFired": false
    })
*/

//---------------------------------------------------------------------------------

// 	? Try inserting many students using one insert statement.

/*
db.student.insertMany(
[
    {
        "FirstName":"mohamed",
         "LastName":"esmaiel",
         "Age": 34,
         "Faculty": {"Name": "Art", "Address":"Mansoura"},
         "Grades": [
            {"CourseName": "Compilers", "Grade": 95, "Pass": true},
            {"CourseName": "Networks",  "Grade": 76, "Pass": true},
            {"CourseName": "DBs",       "Grade": 66, "Pass": true},
         ],
           "IsFired": false
     },
     {
        "FirstName":"nagy",
         "LastName":"ali",
         "Age": 23,
         "Faculty": {"Name": "Medicine", "Address":"Tanta"},
         "Grades": [
            {"CourseName": "Compilers", "Grade": 88, "Pass": true},
            {"CourseName": "Networks",  "Grade": 64, "Pass": true},
            {"CourseName": "DBs",       "Grade": 100, "Pass": true},
         ],
           "IsFired": false
     },
     {
        "FirstName":"taha",
         "LastName":"ali",
         "Age": 20,
         "Faculty": {"Name": "Medicine", "Address":"Tanta"},
         "Grades": [
            {"CourseName": "Compilers", "Grade": 100, "Pass": true},
            {"CourseName": "Networks",  "Grade": 100, "Pass": true},
            {"CourseName": "DBs",       "Grade": 100, "Pass": true},
         ],
           "IsFired": false
     }
 ]
)

*/
//--------------------------------------------------------------------------------- 

// 4. Retrieve the following data:
// 	? All Students.
//         db.student.find({})
     
     
// 	? Student with specific First Name.
//         db.student.find({FirstName:"taha"})


// 	? Students who his First Name=Ahmed, or Last Name= Ahmed.
//            db.student.find( {$or:[{FirstName:"Ahmed"},{LastName:"ali"}]} )


// 	? Students that their First name isn't "Ahmed".
//             db.student.find({FirstName:{$ne:"ahmed"}})

            
// 	? Students with Age more than or equal to 21, and their faculty isn't NULL.
//            db.student.find( {$and:[ {Age:{$gte:21} }, { Faculty:{$ne:null} } ]} )

            
// 	? Display student with specific First Name, and display his First Name, 
// 	  Last name, IsFired fields only.
//             db.student.find({FirstName: "taha"}, {FirstName:1, LastName:1, IsFired:1, _id:0 })

// db.student.find({}).limit(1) = db.student.findOne({})

// 5. Update the student with specific FirstName, and change his LastName.
//     db.student.updateOne({FirstName:"mohamed"}, {$set:{LastName:"mohsen"}})
            
// 6. Delete Fired students.
//     db.student.deleteMany({IsFired: true})

// 7. Delete all students collection.
//         db.student.drop()

// 8. Delete the whole DB.
        // db.dropDatabase()
