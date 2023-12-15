/**
 * Mocked data for menu calls
 */
//user.email + "/" + user.name + "/" + name + "/" + reviewText + "/" + stars + "/" + reviewDate
  
 const CheesePizza = [
    {"email": "johnbrown@brown.edu", "name": "John Brown", "menu_item": "cheese pizza", 
    "review": "not the best", "rating": "3.5"},
    {"email": "rashid@brown.edu", "name": "Rashid", "menu_item": "cheese pizza", 
    "review": "absolutely fantastically brilliant", "rating": "5"},
    {"email": "humbug@brown.edu", "name": "Humbug", "menu_item": "cheese pizza", 
    "review": "I hate this with every shred of my shoul", "rating": "0.5"}
 ]
  
  const Bakery = [
    {"email": "rodrick_heffley@brown.edu", "name": "Rodrick Heffley", "menu_item": "bakery", 
    "review": "Bruh this is mid", "rating": "2"},
    {"email": "bleuno@brown.edu", "name": "Blueno", "menu_item": "bakery", 
    "review": "best muffins i ever ingested", "rating": "4.7"}
 ]
  
  const reviewOutputs = {
      "cheese pizza": CheesePizza,
      "bakery" : Bakery,
      "": [], //not a valid entry, empty result
      "spicy with cheese": [] //no reviews yet
  }
  
  // exporting so we can use these mocked data 
  export { reviewOutputs };