# nugg-function
Please explain the new ways to declare variables in JavaScript?

let and const are both new in place of the var method

If the value doesn’t need to be reassigned at all or reference a fixed value, 
use const so that the code doesn’t get bogged down with uneeded values. 
If a variable might need to be reassigned a new value, use let.

---------------------------------------------------------------------

What do you expect to be the output from running getClothing(false)? Why is this the case?

What i expect is to see the var hot filled up. however an error of undefined var because 'freezing' 
is being used out of scope. and hot is not logged to console.

----------------------------------------------------------------------

What does the getClothing() function look like at run-time?

In its current form the function is a run time error.

-----------------------------------------------------------------------

