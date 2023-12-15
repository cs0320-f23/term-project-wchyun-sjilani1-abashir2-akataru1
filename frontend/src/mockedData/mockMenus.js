/**
 * Mocked data for menu calls
 */

  
const AndrewsOutputs = {
    'Breakfast': [], 
    'Lunch': [{'Menu item': 'pepperoni pizza', 
    'Description': 'fresh dough, house made sauce, pepperoni, mozzarella', 'Dietary restrictions': ''}, 
    {'Menu item': 'cheese pizza', 'Description': 'fresh dough, house made sauce, mozzarella cheese', 
    'Dietary restrictions': 'Vegetarian'}, 
    {'Menu item': 'vegan pizza of the day', 'Description': 'our housemade sauce and fresh vegetables', 'Dietary restrictions': 'Vegan'}, 
    {'Menu item': 'Chicken Parm', 'Description': '', 'Dietary restrictions': ''}, 
    {'Menu item': 'Eggplant Parm', 'Description': '', 'Dietary restrictions': 'Vegetarian'}, 
    {'Menu item': 'make your own grinder', 'Description': 'grinder is a new england term for a sub style sandwich, offered 7 days a week.  all grinders are made on our custom fresh baked roll, and stuffed with premium meats, cheeses, veggies & house made condiments.', 'Dietary restrictions': ''}, 
    {'Menu item': 'Grains & Greens', 'Description': '', 'Dietary restrictions': 'Halal'}, {'Menu item': 'Yakisoba Noodle Bowl', 'Description': 'Yakisoba noodles, spiced pork or impossible meat, crisp veggies and toppings', 'Dietary restrictions': ''}], 
    'Dinner': [{'Menu item': 'pepperoni pizza', 'Description': 'fresh dough, house made sauce, pepperoni, mozzarella', 'Dietary restrictions': ''}, 
    {'Menu item': 'cheese pizza', 'Description': 'fresh dough, house made sauce, mozzarella cheese', 'Dietary restrictions': 'Vegetarian'}, 
    {'Menu item': 'vegan pizza of the day', 'Description': 'our housemade sauce and fresh vegetables', 'Dietary restrictions': 'Vegan'}, 
    {'Menu item': 'Chicken Parm', 'Description': '', 'Dietary restrictions': ''}, 
    {'Menu item': 'Eggplant Parm', 'Description': '', 'Dietary restrictions': 'Vegetarian'}, 
    {'Menu item': 'Baked Pasta Station', 'Description': 'Italian Sausage with Pink Vodka Sauce', 'Dietary restrictions': ''}, 
    {'Menu item': 'make your own grinder', 'Description': 'grinder is a new england term for a sub style sandwich, offered 7 days a week.  all grinders are made on our custom fresh baked roll, and stuffed with premium meats, cheeses, veggies & house made condiments.', 'Dietary restrictions': ''}, 
    {'Menu item': 'jasmine rice', 'Description': '', 'Dietary restrictions': 'Vegan'}, 
    {'Menu item': 'Lemongrass Chicken Dumplings', 'Description': '', 'Dietary restrictions': ''}, 
    {'Menu item': 'brown rice', 'Description': '', 'Dietary restrictions': 'Vegan'}, 
    {'Menu item': 'Spicy Basil Chicken', 'Description': '', 'Dietary restrictions': 'Halal'}, 
    {'Menu item': 'Braised Tofu & Shiitake Mushroom', 'Description': '', 'Dietary restrictions': 'Vegan'}, 
    {'Menu item': 'Edamame Dumplings', 'Description': '', 'Dietary restrictions': 'Vegan'}, 
    {'Menu item': 'Roasted Brussels Sprouts', 'Description': '', 'Dietary restrictions': 'Vegan'}], 
    'Other': []
}
  
  const BlueRoomOutput = {
      'Breakfast': 
      [{'Menu item': 'bagel bar', 'Description': 'assorted bagels, house made cream cheese spreads', 'Dietary restrictions': ''}, 
      {'Menu item': 'breakfast sandwich', 'Description': 'local cage free eggs, assorted meats, cheeses & breads.  Try one of our signature sandwiches, or create your own!', 'Dietary restrictions': ''}, 
      {'Menu item': 'bakery', 'Description': 'daily assortment of freshly baked muffins, croissants, scones and cookies.', 'Dietary restrictions': ''}, 
      {'Menu item': 'coffee & espresso', 'Description': "Fair Trade organic coffee, locally roasted by New Harvest Coffee Roasters.  Try one of barista's signature creations, or our freshly brewed drip coffee.", 'Dietary restrictions': ''}], 
      'Lunch': [{'Menu item': 'bakery', 'Description': 'daily assortment of freshly baked muffins, croissants, scones and cookies.', 'Dietary restrictions': ''}, 
      {'Menu item': 'sandwiches & wraps', 'Description': 'choose from a rotating selection of our signature sandwiches and wraps, or create your own!', 'Dietary restrictions': ''}, 
      {'Menu item': 'soup du jour', 'Description': 'Chicken Noodle', 'Dietary restrictions': ''}, 
      {'Menu item': 'create your own salad', 'Description': 'local greens, cheese, grains, seasonal veggies and house made dressings.', 'Dietary restrictions': ''}, 
      {'Menu item': 'coffee & espresso', 'Description': "Fair Trade organic coffee, locally roasted by New Harvest Coffee Roasters.  Try one of barista's signature creations, or our freshly brewed drip coffee.", 'Dietary restrictions': ''}], 
      'Dinner': [], 'Other': []}
  
  const queryOutputs = {
      "blue-room/Wed": BlueRoomOutput,
      "andrews-commons/Thurs" : AndrewsOutputs,
      "shake-shack/Sat": {}, //not a valid dining hall, empty result
      "ivy-room/Sat": {'Breakfast': [], 'Lunch': [], "Dinner": []} //valid dining hall, but not open on saturday
  }
  
  
  
  
  // exporting so we can use these mocked data 
  export { queryOutputs };