const router = require('express').Router();
const { auth } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} = require('../controllers/recordController');
// console.log(createRecord, getRecords, updateRecord, deleteRecord);
router.post('/', auth, authorize('admin'), createRecord);
router.get('/', auth, authorize('viewer','analyst','admin'), getRecords);
router.put('/:id', auth, authorize('admin'), updateRecord);
router.delete('/:id', auth, authorize('admin'), deleteRecord);

module.exports = router;