var sql = require("./mysqlconnect");

var Customer = function (Customer) {
  this.fname = Customer.fname;
  this.lname = Customer.lname;
  this.email = Customer.email;
  this.contact = Customer.contact;
  
};
Customer.createCustomer = function (newCustomer, result) {
  console.log("New Customer to be added ");
  console.log(newCustomer);
  sql.query("INSERT INTO customers SET ?", newCustomer, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Customer.getCustomerById = function (CustomerId, result) {
  sql.query(
    "SELECT * FROM customers WHERE customer_id = ? ",
    CustomerId,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Customer.getAllCustomer = function (result) {
  console.log("Invoking dal getall Customers");

  sql.query("SELECT * FROM customers", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Customers : ", res);
      result(null, res);
    }
  });
};



module.exports = Customer;
