const manyCustomerHandler = require("../../Controller/Customer_info/manyCustomer");
const router = require("express").Router();

router.post("/", manyCustomerHandler);

module.exports = router;
