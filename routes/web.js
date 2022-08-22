import express from 'express'
const router = express.Router()

import {addStudentDoc, getAllStudentDoc, getSingleStudentDoc, updateStudentDoc, deleteStudentDoc} from '../controllers/studentController.js'

router.get('/', getAllStudentDoc)
router.post('/', addStudentDoc)
router.get('/:id', getSingleStudentDoc)
router.put('/:id', updateStudentDoc)
router.delete('/:id', deleteStudentDoc)

export default router