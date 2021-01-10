"use strict"
 var workingHours=['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//seattle Branch
var seattleStore = {
    min: 23,
    max: 65,
    averageCookiePurchased: 6.3,
    dailySales:0,
    salesPerHour:[],
    

    randomNumberOfCustomers  :function () {
        var randomCount=Math.floor(Math.random() * this.max) + this.min;
         console.log(randomCount);
         return Math.floor(randomCount);
        
      },

    hourlyDailySales :function () {
        for (var i=0;i<workingHours.length;i++){
            var numOfCookies= Math.floor(seattleStore.randomNumberOfCustomers() *seattleStore.averageCookiePurchased);
            seattleStore.salesPerHour.push(numOfCookies);
            seattleStore.dailySales += numOfCookies;
            // console.log(numOfCookies);
        }
        },
       
   render :function(){
       var container=document.getElementById('cookiesStores');
       var article =document.createElement('article');
       container.appendChild(article);
       var h2 =document.createElement('h2');
       article.appendChild(h2);
       h2.textContent='Seattle';
       article.appendChild(h2);
       var list=document.createElement('ul');
       article.appendChild(list);
       for (var i=0;i<workingHours.length;i++){
        var listItem = document.createElement('li');
        listItem.textContent  =workingHours[i]+': '+seattleStore.salesPerHour[i]+' cookies';
        list.appendChild(listItem);
       }
       var listItem = document.createElement('li');
        listItem.textContent  ='Total: '+seattleStore.dailySales+' cookies';
        list.appendChild(listItem);
   },
}
   seattleStore.hourlyDailySales();
   seattleStore.render();



//Tokyo Branch
var tokyoStore = {
    min: 3,
    max: 24,
    averageCookiePurchased: 1.2,
    dailySales:0,
    salesPerHour:[],
    
    randomNumberOfCustomers  :function () {
        var randomCount=Math.floor(Math.random() * this.max) + this.min;
         console.log(randomCount);
         return Math.floor(randomCount);
        
      },

    hourlyDailySales :function () {
        for (var i=0;i<workingHours.length;i++){
            var numOfCookies= Math.floor(tokyoStore.randomNumberOfCustomers() *tokyoStore.averageCookiePurchased);
            tokyoStore.salesPerHour.push(numOfCookies);
            tokyoStore.dailySales += numOfCookies;
            // console.log(numOfCookies);
        }
        },
       
   render :function(){
       var container=document.getElementById('cookiesStores');
       var article =document.createElement('article');
       container.appendChild(article);
       var h2 =document.createElement('h2');
       article.appendChild(h2);
       h2.textContent='Tokyo';
       article.appendChild(h2);
       var list=document.createElement('ul');
       article.appendChild(list);
       for (var i=0;i<workingHours.length;i++){
        var listItem = document.createElement('li');
        listItem.textContent  =workingHours[i]+': '+tokyoStore.salesPerHour[i]+' cookies';
        list.appendChild(listItem);
       }
       var listItem = document.createElement('li');
        listItem.textContent  ='Total: '+tokyoStore.dailySales+' cookies';
        list.appendChild(listItem);
   },
}
   tokyoStore.hourlyDailySales();
   tokyoStore.render();



//Dubai Branch
var dubaiStore = {
    min: 11,
    max: 38,
    averageCookiePurchased: 3.7,
    dailySales:0,
    salesPerHour:[],
    
    randomNumberOfCustomers  :function () {
        var randomCount=Math.floor(Math.random() * this.max) + this.min;
         console.log(randomCount);
         return Math.floor(randomCount);
        
      },

    hourlyDailySales :function () {
        for (var i=0;i<workingHours.length;i++){
            var numOfCookies= Math.floor(dubaiStore.randomNumberOfCustomers() *dubaiStore.averageCookiePurchased);
            dubaiStore.salesPerHour.push(numOfCookies);
            dubaiStore.dailySales += numOfCookies;
            // console.log(numOfCookies);
        }
        },
       
   render :function(){
       var container=document.getElementById('cookiesStores');
       var article =document.createElement('article');
       container.appendChild(article);
       var h2 =document.createElement('h2');
       article.appendChild(h2);
       h2.textContent='Dubai';
       article.appendChild(h2);
       var list=document.createElement('ul');
       article.appendChild(list);
       for (var i=0;i<workingHours.length;i++){
        var listItem = document.createElement('li');
        listItem.textContent  =workingHours[i]+': '+tokyoStore.salesPerHour[i]+' cookies';
        list.appendChild(listItem);
       }
       var listItem = document.createElement('li');
        listItem.textContent  ='Total: '+dubaiStore.dailySales+' cookies';
        list.appendChild(listItem);
   },
}
   dubaiStore.hourlyDailySales();
   dubaiStore.render();


//Paris Branch
var parisStore = {
    min: 20,
    max: 38,
    averageCookiePurchased: 2.3,
    dailySales:0,
    salesPerHour:[],
    
    randomNumberOfCustomers  :function () {
        var randomCount=Math.floor(Math.random() * this.max) + this.min;
         console.log(randomCount);
         return Math.floor(randomCount);
        
      },

    hourlyDailySales :function () {
        for (var i=0;i<workingHours.length;i++){
            var numOfCookies= Math.floor(parisStore.randomNumberOfCustomers() *parisStore.averageCookiePurchased);
            parisStore.salesPerHour.push(numOfCookies);
            parisStore.dailySales += numOfCookies;
            // console.log(numOfCookies);
        }
        },
       
   render :function(){
       var container=document.getElementById('cookiesStores');
       var article =document.createElement('article');
       container.appendChild(article);
       var h2 =document.createElement('h2');
       article.appendChild(h2);
       h2.textContent='Paris';
       article.appendChild(h2);
       var list=document.createElement('ul');
       article.appendChild(list);
       for (var i=0;i<workingHours.length;i++){
        var listItem = document.createElement('li');
        listItem.textContent  =workingHours[i]+': '+parisStore.salesPerHour[i]+' cookies';
        list.appendChild(listItem);
       }
       var listItem = document.createElement('li');
        listItem.textContent  ='Total: '+parisStore.dailySales+' cookies';
        list.appendChild(listItem);
   },
}
parisStore.hourlyDailySales();
parisStore.render();


//lima Branch
var limaStore = {
    min: 20,
    max: 38,
    averageCookiePurchased: 2.3,
    dailySales:0,
    salesPerHour:[],
    
    randomNumberOfCustomers  :function () {
        var randomCount=Math.floor(Math.random() * this.max) + this.min;
         console.log(randomCount);
         return Math.floor(randomCount);
        
      },

    hourlyDailySales :function () {
        for (var i=0;i<workingHours.length;i++){
            var numOfCookies= Math.floor(limaStore.randomNumberOfCustomers() *limaStore.averageCookiePurchased);
            limaStore.salesPerHour.push(numOfCookies);
            limaStore.dailySales += numOfCookies;
            // console.log(numOfCookies);
        }
        },
       
   render :function(){
       var container=document.getElementById('cookiesStores');
       var article =document.createElement('article');
       container.appendChild(article);
       var h2 =document.createElement('h2');
       article.appendChild(h2);
       h2.textContent='Lima';
       article.appendChild(h2);
       var list=document.createElement('ul');
       article.appendChild(list);
       for (var i=0;i<workingHours.length;i++){
        var listItem = document.createElement('li');
        listItem.textContent  =workingHours[i]+': '+parisStore.salesPerHour[i]+' cookies';
        list.appendChild(listItem);
       }
       var listItem = document.createElement('li');
        listItem.textContent  ='Total: '+parisStore.dailySales+' cookies';
        list.appendChild(listItem);
   },
}
limaStore.hourlyDailySales();
limaStore.render();

