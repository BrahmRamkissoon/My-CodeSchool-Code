// In the code below, is it appropriate to use a JavaScript object as a map?

const USERS_PER_PAGE = 10;

let pageSettings = {
  perPage:  USERS_PER_PAGE,
  canSort:  false
};

// Answer: 
// Yes. since keys like perPage and canSort are previously defined, we don't run the risk of accidentally overwriting values.