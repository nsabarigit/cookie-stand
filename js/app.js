'use-strict';

var hourOfSales = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm',
  '5pm', '6pm', '7pm', '8pm', 'Daily Location Total'];
var table = document.getElementById('cookie_sales');
var outputData = [];

function SalmonCookieStoreSales(storeName,
  minHourlyCustomers,
  maxHourlyCustomers,
  avgCookiesPerCustomer) {

  this.storeName = storeName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;

  this.salesPerHour = function() {
    var minHourlyCustomersRandom = Math.ceil(this.minHourlyCustomers);
    var maxHourlyCustomersRandom = Math.floor(this.maxHourlyCustomers);
    return Math.round((Math.floor(Math.random() * (maxHourlyCustomersRandom - minHourlyCustomersRandom + 1)) + minHourlyCustomers) * this.avgCookiesPerCustomer);
  },

  this.totalCookiesSoldInADay = 0,

  this.cookieCountDetails = function(){
    var storeSalesDetails = [];
    var totalCookiesPerDay = 0;
    storeSalesDetails[0] = this.storeName;

    for (var i=1; i < hourOfSales.length; i++){
      var cookiesSalePerHour = this.salesPerHour();
      storeSalesDetails[i] = cookiesSalePerHour;
      totalCookiesPerDay = totalCookiesPerDay + cookiesSalePerHour;
    }
    this.totalCookiesSoldInADay = totalCookiesPerDay;
    storeSalesDetails[i] = this.totalCookiesSoldInADay;

    // Logs for all Stores
    // console.log('storeSalesDetails', storeSalesDetails);
    return storeSalesDetails;
  };
}

function buildTableHeader() {
  var hourTemp = [];
  for(var i=0; i<hourOfSales.length; i++) {
    hourTemp = hourTemp + '<th>' + hourOfSales[i] + '</th>';
  }
  var newRow = document.createElement('tr');
  newRow.innerHTML = '<th>' + hourTemp + '</th>';
  table.appendChild(newRow);
}

function buildTableRow(salesDetailsArray) {
  var salesDataTemp =[];
  for(var i=0; i<salesDetailsArray.length; i++) {
    salesDataTemp = salesDataTemp + '<td>' + salesDetailsArray[i] + '</td>';
  }
  outputData.push(salesDataTemp);
}

function render(tableRow) {
  for(var j=0; j<tableRow.length;j++){
    var newRow = document.createElement('tr');
    newRow.innerHTML = tableRow[j];
    table.appendChild(newRow);
  }
}

buildTableHeader();

var firstAndPikeStore = new SalmonCookieStoreSales('1st and Pike', 23, 65, 6.3);
var firstAndPikeStoreResult = firstAndPikeStore.cookieCountDetails();
buildTableRow(firstAndPikeStoreResult);

var seatacAirportStore = new SalmonCookieStoreSales('SeaTac Airport', 3, 24, 1.2);
var seatacAirportStoreResult = seatacAirportStore.cookieCountDetails();
buildTableRow(seatacAirportStoreResult);

var seattleCenterStore = new SalmonCookieStoreSales('Seattle Center', 11, 38, 3.7);
var seattleCenterStoreResult = seattleCenterStore.cookieCountDetails();
buildTableRow(seattleCenterStoreResult);

var capitolHillStore = new SalmonCookieStoreSales('Capitol Hill', 20, 38, 2.3);
var capitolHillStoreResult = capitolHillStore.cookieCountDetails();
buildTableRow(capitolHillStoreResult);

var alkiStore = new SalmonCookieStoreSales('Alki', 2, 16, 4.6);
var alkiStoreResult = alkiStore.cookieCountDetails();
buildTableRow(alkiStoreResult);

render(outputData);

function createTableFooter() {
  var printTotalsData = [];
  var cookies = 0;
  for(var i=1; i<hourOfSales.length+1; i++) {
    cookies = firstAndPikeStoreResult[i] + seatacAirportStoreResult[i]
    + seattleCenterStoreResult[i] + capitolHillStoreResult[i] +
    alkiStoreResult[i];
    printTotalsData = printTotalsData + '<td>' + cookies + '</td>';
  }
  var newRow = document.createElement('tfoot');
  newRow.innerHTML = '<td>' + 'Totals' + printTotalsData + '</td>';
  table.appendChild(newRow);
}

createTableFooter();
