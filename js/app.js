'use-strict';

var hourOfSales = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var i=0;
var liEl;

var firstAndPikeStore = {

  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  salesPerHour: function(){
    var minHourlyCustomers = Math.ceil(this.minHourlyCustomers);
    var maxHourlyCustomers = Math.floor(this.maxHourlyCustomers);
    return Math.round((Math.floor(Math.random() * (maxHourlyCustomers - minHourlyCustomers + 1)) + minHourlyCustomers) * this.avgCookiesPerCustomer);
  },
  totalCookiesSoldInADay:0,
  cookieCountDetails: function(hourOfSales){
    var storeSalesDetails = [];
    var totalCookiesPerDay = 0;

    for (var i=0; i < hourOfSales.length; i++){
      var cookiesSalePerHour = this.salesPerHour();
      storeSalesDetails[i] = [`${cookiesSalePerHour} cookies`];
      totalCookiesPerDay = totalCookiesPerDay + cookiesSalePerHour;
    }
    this.totalCookiesSoldInADay = `${totalCookiesPerDay} cookies`;
    return storeSalesDetails;
  }

};

var pikeSalesList = document.getElementById('1standpike');

for (i = 0; i < hourOfSales.length; i++) {
  // 1. Create new element
  liEl = document.createElement('li');
  // 2. Give the element some content
  liEl.textContent = hourOfSales[i] + ':' + firstAndPikeStore.cookieCountDetails(hourOfSales)[i][0];
  // 3. Append the new element to its parent in the DOM
  pikeSalesList.appendChild(liEl);
}

var liElTotal = document.createElement('li');
liElTotal.textContent = `Total:  ${firstAndPikeStore.totalCookiesSoldInADay}`;
pikeSalesList.appendChild(liElTotal);


// Store 2 - SeaTac Airport seaTacAirportStore


var seaTacAirportStore = {

  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  salesPerHour: function(){
    var minHourlyCustomers = Math.ceil(this.minHourlyCustomers);
    var maxHourlyCustomers = Math.floor(this.maxHourlyCustomers);
    return Math.round((Math.floor(Math.random() * (maxHourlyCustomers - minHourlyCustomers + 1)) + minHourlyCustomers) * this.avgCookiesPerCustomer);
  },
  totalCookiesSoldInADay:0,
  cookieCountDetails: function(hourOfSales){
    var storeSalesDetails = [];
    var totalCookiesPerDay = 0;

    for (var i=0; i < hourOfSales.length; i++){
      var cookiesSalePerHour = this.salesPerHour();
      storeSalesDetails[i] = [`${cookiesSalePerHour} cookies`];
      totalCookiesPerDay = totalCookiesPerDay + cookiesSalePerHour;
    }
    this.totalCookiesSoldInADay = `${totalCookiesPerDay} cookies`;
    return storeSalesDetails;
  }

};

var salesList = document.getElementById('seatacairport');

for (i = 0; i < hourOfSales.length; i++) {
  // 1. Create new element
  liEl = document.createElement('li');
  // 2. Give the element some content
  liEl.textContent = hourOfSales[i] + ':' + seaTacAirportStore.cookieCountDetails(hourOfSales)[i][0];
  // 3. Append the new element to its parent in the DOM
  salesList.appendChild(liEl);
}

var liElTotal = document.createElement('li');
liElTotal.textContent = `Total:  ${seaTacAirportStore.totalCookiesSoldInADay}`;
salesList.appendChild(liElTotal);




// seattle center store 

var seattleCenterStore = {

  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  salesPerHour: function(){
    var minHourlyCustomers = Math.ceil(this.minHourlyCustomers);
    var maxHourlyCustomers = Math.floor(this.maxHourlyCustomers);
    return Math.round((Math.floor(Math.random() * (maxHourlyCustomers - minHourlyCustomers + 1)) + minHourlyCustomers) * this.avgCookiesPerCustomer);
  },
  totalCookiesSoldInADay:0,
  cookieCountDetails: function(hourOfSales){
    var storeSalesDetails = [];
    var totalCookiesPerDay = 0;

    for (var i=0; i < hourOfSales.length; i++){
      var cookiesSalePerHour = this.salesPerHour();
      storeSalesDetails[i] = [`${cookiesSalePerHour} cookies`];
      totalCookiesPerDay = totalCookiesPerDay + cookiesSalePerHour;
    }
    this.totalCookiesSoldInADay = `${totalCookiesPerDay} cookies`;
    return storeSalesDetails;
  }

};

var salesList = document.getElementById('seattlecenter');

for (i = 0; i < hourOfSales.length; i++) {
  // 1. Create new element
  liEl = document.createElement('li');
  // 2. Give the element some content
  liEl.textContent = hourOfSales[i] + ':' + seattleCenterStore.cookieCountDetails(hourOfSales)[i][0];
  // 3. Append the new element to its parent in the DOM
  salesList.appendChild(liEl);
}

var liElTotal = document.createElement('li');
liElTotal.textContent = `Total:  ${seattleCenterStore.totalCookiesSoldInADay}`;
salesList.appendChild(liElTotal);





// capitol hill store 

var capitolHillStore = {

  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  salesPerHour: function(){
    var minHourlyCustomers = Math.ceil(this.minHourlyCustomers);
    var maxHourlyCustomers = Math.floor(this.maxHourlyCustomers);
    return Math.round((Math.floor(Math.random() * (maxHourlyCustomers - minHourlyCustomers + 1)) + minHourlyCustomers) * this.avgCookiesPerCustomer);
  },
  totalCookiesSoldInADay:0,
  cookieCountDetails: function(hourOfSales){
    var storeSalesDetails = [];
    var totalCookiesPerDay = 0;

    for (var i=0; i < hourOfSales.length; i++){
      var cookiesSalePerHour = this.salesPerHour();
      storeSalesDetails[i] = [`${cookiesSalePerHour} cookies`];
      totalCookiesPerDay = totalCookiesPerDay + cookiesSalePerHour;
    }
    this.totalCookiesSoldInADay = `${totalCookiesPerDay} cookies`;
    return storeSalesDetails;
  }

};

var salesList = document.getElementById('capitolhill');

for (i = 0; i < hourOfSales.length; i++) {
  // 1. Create new element
  liEl = document.createElement('li');
  // 2. Give the element some content
  liEl.textContent = hourOfSales[i] + ':' + capitolHillStore.cookieCountDetails(hourOfSales)[i][0];
  // 3. Append the new element to its parent in the DOM
  salesList.appendChild(liEl);
}

var liElTotal = document.createElement('li');
liElTotal.textContent = `Total:  ${capitolHillStore.totalCookiesSoldInADay}`;
salesList.appendChild(liElTotal);








// Alki store 

var alkiStore = {

  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  salesPerHour: function(){
    var minHourlyCustomers = Math.ceil(this.minHourlyCustomers);
    var maxHourlyCustomers = Math.floor(this.maxHourlyCustomers);
    return Math.round((Math.floor(Math.random() * (maxHourlyCustomers - minHourlyCustomers + 1)) + minHourlyCustomers) * this.avgCookiesPerCustomer);
  },
  totalCookiesSoldInADay:0,
  cookieCountDetails: function(hourOfSales){
    var storeSalesDetails = [];
    var totalCookiesPerDay = 0;

    for (var i=0; i < hourOfSales.length; i++){
      var cookiesSalePerHour = this.salesPerHour();
      storeSalesDetails[i] = [`${cookiesSalePerHour} cookies`];
      totalCookiesPerDay = totalCookiesPerDay + cookiesSalePerHour;
    }
    this.totalCookiesSoldInADay = `${totalCookiesPerDay} cookies`;
    return storeSalesDetails;
  }

};

var salesList = document.getElementById('alki');

for (i = 0; i < hourOfSales.length; i++) {
  // 1. Create new element
  liEl = document.createElement('li');
  // 2. Give the element some content
  liEl.textContent = hourOfSales[i] + ':' + alkiStore.cookieCountDetails(hourOfSales)[i][0];
  // 3. Append the new element to its parent in the DOM
  salesList.appendChild(liEl);
}

var liElTotal = document.createElement('li');
liElTotal.textContent = `Total:  ${alkiStore.totalCookiesSoldInADay}`;
salesList.appendChild(liElTotal);
