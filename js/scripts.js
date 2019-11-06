function BankAccount(money) {
  this.money = money;
}

BankAccount.prototype.changeBalance = function(moneyChange) {
  this.money = parseInt(this.money) + parseInt(moneyChange);
  return this.money;
}


// UI -------


$(document).ready(function() {
  // attachContactListeners();


  $("form#initialDeposit").submit(function(event) {
    event.preventDefault();
    var inputInitialDeposit = $("#inputInitialDeposit").val();
    var newAccount = new BankAccount(inputInitialDeposit);
    var currentBalance = newAccount.changeBalance(0);
    console.log(currentBalance);
    $("#currentBalance").show();
    $("#currentBalance").append(currentBalance);

    // function attachContactListeners() {
    //   $("#deposit").on("click", "#depositBtn", function() {
    //     var deposit = $("#inputDeposit").val();
    //     var currentBalance = newAccount.changeBalance(deposit);
    //     $("#currentBalance").show();
    //     $("#currentBalance").append(currentBalance);
    //
    //   });
    // };

  });



});
