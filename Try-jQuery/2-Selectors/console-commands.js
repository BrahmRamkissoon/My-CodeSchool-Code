// 2.9 Using find()

/*
In a previous section, we learned how to select all vacations from America using $("#vacations .america"). This works, but let's change the previous code to use traversal instead with the find method.
*/

$("#vacations").find(".america");

// 2.10 Using first()

/*
We've decided to add a "feeling lucky" feature to our site where the first vacation is selected by default. Using traversal or filtering, select the first vacation li element from the list.
*/

$("#vacations").find("li").first();

// 2.11 Using last()

/*
As you are looking through your code, you notice that someone else is selecting the last vacation with $("#vacations li:last"). You can refactor this code to find the last li within #vacations using traversal instead.
*/

$("#vacations").find("li").last();