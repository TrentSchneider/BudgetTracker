import { populateTotal } from "./total";
import { populateTable } from "./table";
import { populateChart } from "./chart";
import { sendTransaction } from "./transaction";

let transactions = [];

fetch("/api/transaction")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // save db data on global variable
    transactions = data;

    populateTotal(transactions);
    populateTable(transactions);
    populateChart(transactions);
  });

document.querySelector("#add-btn").onclick = function () {
  sendTransaction(true, transactions);
};

document.querySelector("#sub-btn").onclick = function () {
  sendTransaction(false, transactions);
};
