import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    age: Number,
    fees: Number,
  });
  
  const StudentModal = mongoose.model('student', studentSchema);
  export default StudentModal