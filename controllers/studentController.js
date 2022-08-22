import StudentModal from '../models/Students.js'

const addStudentDoc = async (req, res) => {
   try {
        console.log(req.body)
        const {name, age, fees} = req.body;
        const doc = new StudentModal({
            name: name,
            age: age,
            fees: fees
        })
        const result = await doc.save()
        res.send({"Status": "success" ,"message": "Student Added Successfully ?", "data": result})
   } catch (error) {
    console.log(error)
   }
}
const getAllStudentDoc = async (req, res) => {
    try {
        const result = await StudentModal.find()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}
const getSingleStudentDoc = async (req, res) => {
    try {
        // const id = req.body.id
        const id = req.params.id
        const result = await StudentModal.findById(id)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}
const updateStudentDoc = async (req, res) => {
    try {
        const result = await StudentModal.findByIdAndUpdate(req.params.id, req.body)
        res.send({"message": "Student Update Succesfully !!", "Status": "Success", "data": result})
    } catch (error) {
        console.log(error)
    }
}

const deleteStudentDoc = async (req, res) => {
    try {
        const id = req.params.id
        // const id = req.body.id
        const result = await StudentModal.findByIdAndDelete(id)
        const data = StudentModal.find()
        res.send({"message": "Student Deleted Successfully !!", "Status": "Success", "data": result, "data": data})
    } catch (error) {
        console.log(error)
    }
}


export { addStudentDoc, getAllStudentDoc, updateStudentDoc ,deleteStudentDoc, getSingleStudentDoc}


