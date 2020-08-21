const router = require("express").Router();
const ExpenseController = require("../../controllers/expenseController");
const IncomeController = require("../../controllers/incomeController");
const SavingsController = require("../../controllers/savingsController");



                        /* ********** Expenses Routes ********** */

router.route("/")
   .get(ExpenseController.findAll)
  .post(ExpenseController.create);

// Matches with "/api/expense/:id"
 router
  .route("/api/expense/:id")
  .get(ExpenseController.findById)
  .put(ExpenseController.update)
  .delete(ExpenseController.remove);


                        /* ********** Incomes Routes ********** */
router.route("/")
.get(ExpenseController.findAll)
.post(ExpenseController.create);

router
 .route(("/api/income/id")
 .get(IncomeController.findById)
 .put(IncomeController.update)
 .delete(IncomeController.remove);


  // DONE 
                          /* ********** Savings Routes ********** */
router.route("/")
.get(SavingsController.findAll)
.post(SavingsController.create)

router

.route("/:id")
.get(SavingsController.findById)
.put(SavingsController.update) 
.delete(SavingsController.remove);

module.exports = router;
