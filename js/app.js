"use strict"
 var workingHours=['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


function CookieStore (storeName, min, max, averageCookiePurchased ){

    this.storeName = storeName;
    this.min = min;
    this.max = max;
    this.averageCookiePurchased = averageCookiePurchased;
    this.dailySales = 0;
    this.salesPerHour = [];
    this.hourlySales = 0;
    this.hourlyPerSale = [];

}

CookieStore.prototype.randomNumberOfCustomers = function(){
    var randomCount=Math.floor(Math.random() * this.max) + this.min;
    console.log(randomCount);
    return Math.floor(randomCount);
}

CookieStore.prototype.hourlyDailySales = function(){
    for (var i=0;i<workingHours.length;i++){
        var numOfCookies= Math.floor(seattleStore.randomNumberOfCustomers() *this.averageCookiePurchased);
        this.salesPerHour.push(numOfCookies);
        this.dailySales += numOfCookies;
        // console.log(numOfCookies);
    }
}


CookieStore.prototype.hourlySales = function(){
    for (var i=0;i<locations.length;i++){
        var numOfCookies= Math.floor(seattleStore.randomNumberOfCustomers() *this.averageCookiePurchased);
        this.salesPerHour.push(numOfCookies);
        this.dailySales += numOfCookies;
        // console.log(numOfCookies);
    }
}

  
  function tableHeader() { 
    var tableRow = document.createElement('tr');
    for (var i =-1; i < workingHours.length; i++) {
      var tableHeaderElement = document.createElement('th');
      tableHeaderElement.textContent = workingHours[i];
      tableRow.appendChild(tableHeaderElement);
      
    }
    tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = 'Location Total';
    tableRow.appendChild(tableHeaderElement);

    cookiesStores.appendChild(tableRow);
  };
  


  CookieStore.prototype.tableFooter = function() { 
    var container=document.getElementById('cookiesStoresResult');
    var article =document.createElement('article');
    container.appendChild(article);

  var moralsTable = document.createElement('table');
  article.appendChild(moralsTable);
  var firstRow = document.createElement('tr');
  moralsTable.appendChild(firstRow);
    for (var i =0; i < this.salesPerHour.length; i++) {

        var hourlySaleSale= seattleStore.salesPerHour[i]+ tokyoStore.salesPerHour[i]+ dubaiStore.salesPerHour[i]+ parisStore.salesPerHour[i]+ limaStore.salesPerHour[i];             
        this.hourlyPerSale.push(hourlySaleSale);
        this.hourlySales += hourlySaleSale;
        console.log(hourlySaleSale,'el total ya bane adam');

    }

    var firstdata = document.createElement('td');
    firstdata.textContent = this.hourlyPerSale;
    firstRow.appendChild(firstdata);
  }


CookieStore.prototype.render = function(){
    var container=document.getElementById('cookiesStores');
    var article =document.createElement('article');
    container.appendChild(article);
  // create and append the table

  // create and append the table
  var moralsTable = document.createElement('table');
  article.appendChild(moralsTable);

  var firstRow = document.createElement('tr');
  moralsTable.appendChild(firstRow);

  var secondRow = document.createElement('tr');
  moralsTable.appendChild(secondRow);


  var thirdRow = document.createElement('tr');
  moralsTable.appendChild(thirdRow);


    var firstdata = document.createElement('td');
    firstdata.textContent = this.storeName;
    secondRow.appendChild(firstdata);
 
  

for (var i = 0; i < workingHours.length; i++){
  var firstdata = document.createElement('td');
  firstdata.textContent = this.salesPerHour[i];
  secondRow.appendChild(firstdata);
}

var firstdata = document.createElement('td');
firstdata.textContent = this.dailySales;
secondRow.appendChild(firstdata);





}


tableHeader();

 //seattle Branch

 var seattleStore = new CookieStore('Seattle', 23, 65, 6.3, );
 seattleStore.randomNumberOfCustomers();
 seattleStore.hourlyDailySales();

 seattleStore.render();


 console.log(seattleStore);
 

 // Tokyo Branch
 var tokyoStore = new CookieStore('Tokyo', 3, 24, 1.2 );
 tokyoStore.randomNumberOfCustomers();
 tokyoStore.hourlyDailySales();
 tokyoStore.render();

 console.log(tokyoStore);


  // Dubai Branch
  var dubaiStore = new CookieStore('Dubai', 11, 38, 3.7 );
  dubaiStore.randomNumberOfCustomers();
  dubaiStore.hourlyDailySales();
  dubaiStore.render();
 
  console.log(dubaiStore);



  //  Paris Branch
  var parisStore = new CookieStore('Paris', 20, 38, 2.3 );
  parisStore.randomNumberOfCustomers();
  parisStore.hourlyDailySales();
  parisStore.render();
 
  console.log(parisStore);

    //  Paris Branch
    var limaStore = new CookieStore('Lima', 2, 16, 4.6 );
    limaStore.randomNumberOfCustomers();
    limaStore.hourlyDailySales();
    limaStore.render();
    limaStore.tableFooter();
   


