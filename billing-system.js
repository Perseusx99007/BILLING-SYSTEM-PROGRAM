//BILLING SYSTEM PROGRAM USING OBJECTS

var readlineSync = require('readline-sync');

var i,j;
var items;
var total = 0;
var itemQuantity;
var iQ;
var itemNumber;
var iN;
var number;
var num;
var name = new Array();
var price = new Array();
var itemTotal = [0 , 0, 0, 0, 0];                                                         //declaring array variable.
var check = [null, undefined, 0];                                                            //pre-defined array.
var checkPrint1 = new Array();                                                         //declaring array variable.
var checkPrint2 = new Array();                                                         //declaring array variable.

var Milk =  {                                                                   //objects
              Name : "Milk",
              Number : 1,
              Price : 70   
            } 

var Eggs =  {                                                          
              Name : "Eggs",
              Number : 2,
              Price : 6   
            }

var Chicken =   {                                                          
                  Name : "Chicken",
                  Number : 3,
                  Price : 160   
                }

var Wheat =   {                                                          
                Name : "Wheat",
                Number : 4,
                Price : 30   
              }   

var Rice =  {                                                          
              Name : "Rice",
              Number : 5,
              Price : 50   
            }        

var itemList = [Milk, Eggs, Chicken, Wheat, Rice];

console.log("THESE ARE THE LIST OF ITEMS AVAILABLE AT OUR STORE :- \n\n");

console.log("Item\t\t\t\t\t\tPrice");
console.log("_______________________________________\n");

for (i = 0; i < itemList.length; i++)
{
  items = itemList[i];
  console.log(items.Name + "\t\t\t\t\t\t" + items.Price);
}

number = readlineSync.question("\n\nPLEASE ENTER THE DIFFERENT TYPES OF ITEMS YOU WANT TO BUY. \n\n MAX [" + itemList.length + "]\n\n");
num = +number;

console.log("\n\n");

if (num > itemList.length)              //if the number entered is greater than array length, program stops.
{
  console.log("\n\nSadly, we do not have that many items in our shop. \n\n");
}
else
{
  for (i = 1; i <= num; i++)                            
  {
    
    for (j = 0; j < itemList.length; j++ )
    {
      items = itemList[j];
      console.log("PRESS " + items.Number + ". for :- " + items.Name);
    }
    
    itemNumber = readlineSync.question("\nEnter the item number you want to buy 1 - " + itemList.length + " :-\n\n");
    iN = +itemNumber;                                    //making sure it takes the input as a number and not as a string.
 
    if (iN < 1 || iN > itemList.length) 
    {
      console.log("\n\nSORRY, THIS ITEM IS NOT ON OUR LIST.\n\n")
    }
    else
    {
      itemQuantity = readlineSync.question("\n\nEnter the ammount of " + itemList[iN-1].Name + " you want to buy :- \n\n");
      iQ = +itemQuantity;                                         //making sure it takes the input as a number and not as a string.

      console.log("\n\n");

      total = total + (iQ * itemList[iN - 1].Price);              //calculating the grand total.
      name[iN - 1] = itemList[iN - 1].Name;                             //storing the iten name in an array.

      price[iN - 1] = (iQ * itemList[iN - 1].Price);                   //storing the iten price total in an array.
      itemTotal[iN - 1] = itemTotal[iN - 1] + price[iN - 1];                  //calculating and storing the total price of each individual item.
      
      checkPrint1 = name.filter((item) => item != 0 && item != undefined && item != null);
      checkPrint2 = itemTotal.filter((item) => item != 0 && item != undefined && item != null);
      //checkPrint1 = name.filter((item) => !check.includes(item));//removing any (NULL, undefined, 0) entries from the array and storing it in a new one.
      //checkPrint2 = itemTotal.filter((item) => !check.includes(item));//removing any (NULL, undefined, 0) entries from the array and storing it in a new one.
    }
  }
}

//console.log(checkPrint1);
//console.log(checkPrint2);
//console.log(name);
//console.log(itemTotal);
console.log("\n\nITEM \t\t\t\t\t\t TOTAL PRICE\n\n");

for (i = 0; i < checkPrint1.length; i++)
{
  console.log(checkPrint1[i] + "\t\t\t\t\t\t " + checkPrint2[i] + " RUPEES"); //printing the filtered array without any (NULL, undefined, 0) values.
}

console.log("\n_______________________________________________________________________________________");
console.log("\nGRAND TOTAL :-\t\t\t\t " + total + " RUPEES. (inclusive of all taxes)*");


