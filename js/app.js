'use strict';
// Hours Array
var workingHours=['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// locations Array
var storeLocations = [];
var grandTotal = 0;
//Functions


function cookiesStores(shopName, minCustomerPerHour, maxCustomerPerHour, avgCookiePerCustomer) {
    this.shopName = shopName;
    this.minCustomerPerHour = minCustomerPerHour;
    this.maxCustomerPerHour = maxCustomerPerHour;
    this.avgCookiePerCustomer = avgCookiePerCustomer;
    this.avgCusPerHour = [];
    this.avgCookiesPerHour = [];
    this.totalCookies = 0;
    storeLocations.push(this);
}


// get a random number
function randomNumberOfCustomers(min, max) {
    return Math.floor(Math.random() * max) + min;
}
// prototype function to get average customers per hour
cookiesStores.prototype.getCusPerHour = function () {
    for (var i = 0; i < workingHours.length; i++) {
        this.avgCusPerHour.push(randomNumberOfCustomers(this.minCustomerPerHour, this.maxCustomerPerHour));
    }
}

// prototype function to get average cookies per hour
cookiesStores.prototype.getAvgCookiesPerHour = function () {
    for (var i = 0; i < workingHours.length; i++) {
        this.avgCookiesPerHour.push(Math.ceil(this.avgCusPerHour[i] * this.avgCookiePerCustomer));
        this.totalCookies = this.totalCookies + this.avgCookiesPerHour[i];
        grandTotal += this.avgCookiesPerHour[i];
    }
}

// prototype function to render table body
cookiesStores.prototype.render = function () {
    var tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    var shopTitleCell = document.createElement('th');
    shopTitleCell.textContent = this.shopName;
    tableRow.appendChild(shopTitleCell);
    var dataCell;
    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
        dataCell = document.createElement('td');
        dataCell.textContent = this.avgCookiesPerHour[i];
        tableRow.appendChild(dataCell);
    }
    var dailyLocationTotal = document.createElement('th');
    dailyLocationTotal.textContent = this.totalCookies;
    tableRow.appendChild(dailyLocationTotal);
}

// Stores Locatins
var seattleStore = new cookiesStores('Seattle', 23, 65, 6.3);
var tokyoStore = new cookiesStores('Tokyo', 3, 24, 1.2);
var dubaiStore = new cookiesStores('Dubai', 11, 38, 3.7);
var parisStore = new cookiesStores('Paris', 20, 38, 2.3);
var limaStore = new cookiesStores('Lima', 2, 16, 4.6);



var parentSec = document.getElementById('cookiesStores');
var locationSection = document.createElement('section');
parentSec.appendChild(locationSection);
var locationTable = document.createElement('table');
locationSection.appendChild(locationTable);


tableHeader();
tableData();

for (var i = 0; i < storeLocations.length; i++) {
    storeLocations[i].getCusPerHour();
    storeLocations[i].getAvgCookiesPerHour();
    storeLocations[i].render();
}
tableFooter();


// Header
function tableHeader() {
    var headRow = document.createElement('thead');
    locationTable.appendChild(headRow);
    var tableRow = document.createElement('tr');
    headRow.appendChild(tableRow);
    var emptyCell = document.createElement('th');
    tableRow.appendChild(emptyCell);
    var headRowCells;
    for (var j = 0; j <= workingHours.length - 1; j++) {
        headRowCells = document.createElement('th');
        headRowCells.textContent = workingHours[j];
        tableRow.appendChild(headRowCells);
    }
    var totalDaily = document.createElement('th');
    totalDaily.textContent = 'Daily Location Total';
    tableRow.appendChild(totalDaily);
}

// Body
var tableBody;
function tableData() {
    tableBody = document.createElement('tbody');
    locationTable.appendChild(tableBody);
}


// Footer
function tableFooter() {
    var footRow = document.createElement('tfoot');
    locationTable.appendChild(footRow);
    var tableRow = document.createElement('tr');
    footRow.appendChild(tableRow);
    var footRowCells = document.createElement('th');
    footRowCells.textContent = 'Totals';
    tableRow.appendChild(footRowCells);
    var dataCell = [];
    var dataTotal = 0;
    for (var i = 0; i < workingHours.length; i++) {
        var hourCol = 0;
        for (var j = 0; j < storeLocations.length; j++) {
            hourCol = hourCol + storeLocations[j].avgCookiesPerHour[i];
        }
        dataCell.push(hourCol);
        dataTotal = dataTotal + hourCol;
        footRowCells = document.createElement('th');
        footRowCells.textContent = dataCell[i];
        tableRow.appendChild(footRowCells);
    }
    var grandTotalCell = document.createElement('th');
    grandTotalCell.textContent = grandTotal;
    tableRow.appendChild(grandTotalCell);
}