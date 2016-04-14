/*
In the concessions table shown below, there are two things that need to be changed. 

Change the item of 'Pizza' to 'Hamburger'.

There is a special on 'Popcorn' and 'Candy', so change the price for all 'Popcorn' and 'Candy' to '1.00'.


*/

 Update concessions
 Set item = 'Hamburger'
 Where id = 8;
 
 Update concessions
 Set price = '1.00'
 Where item = 'Popcorn'
 Or item = 'Candy';