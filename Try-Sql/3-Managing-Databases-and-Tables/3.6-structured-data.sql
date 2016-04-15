/*

We've added a few more rows to the advertisements table, but there are still a few more changes that need to be made. Check out the objectives below. 

It looks like one of the rows is missing some information. Let's write an UPDATE statement to update that row. Set the category of the 'Commercial' row to 'Television'.


Uh oh! Our boss just said we don't have the budget for advertisements, so we don't need this table any more. Below your existing code, remove the entire advertisements table.
*/


Update advertisements
Set category = 'Television'
Where id = 4;

Drop Table advertisements;