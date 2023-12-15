Project Name: Brown Dining Reviews 
CS Login: wchyun, sjilani1, abashir2, akataru1 
Github Repo: https://github.com/cs0320-f23/term-project-wchyun-sjilani1-abashir2-akataru1
Estimated Time: 50 hours

# Design Choices:

Frontend: 

For the frontend, the overall design we wanted to make on our final deliverables to start the website with 
Google Login. We were inspired by our CS Hours Login website, in which Brown students need to show their
email credentials to enter the website. We thought this would be a good execution for defense programming, as
we are able to protect other non-Brown users from entering the website. Once the user logins to the website, 
there is a huge title that says "Brown Dining Service" and have several drop down menus to indicate which 
dining hall they would like to access to. After clicking the "submit" button, the users are now able to look
at the name, description, ratings of all the individual menu. If the user clicks the "see reviews" button, 
users are also able to assess the previous reviews about those food. 

While using our program, the greatest challenge was creating a Google Login and learning the formats of
Javascript. We looked through the internet to create a Google Login, and after reading different 
materials, we were able to write the code in java script. After this, we decided to do all our 
front end components in java script, which took us a bit of time to get used to it, as we mainly used
Typescript during our sprints. 

App.js - We called all our classes in the App class. The most significant part to point out here would be that
we incorporated our code for Google Login in here. 

Header.js - This part of the code handles the header of the front end. It has "Brown Dining Hall Reviews"
as a header. 

MenuCard.js - This is the class that contains the overall format of menu. Once the user clicks the submit 
button after selecting the drop down menus, the users are able to see the menu projected out. We initially
created the basic design of the format in the first two weeks, and once our backend is working, we 
incorporated so that the front end shows the correct menu items in each dining hall by fetching API. 
We also handled the cases of the menus to minimize the bugs in our code. 

Review.js - This part shows how the reviews will are presented on the code. It will consist of 
name, rating, time, and review when the user looks at the reviews for it. 

ReviewAdd.js - This part of the code handles adding the reviews. The users are able to submit the reviews 
by adding factors like rating, time, and the actual review comments if they would like to. This part of the
code also operates by fetching the API + user's email + user name + name + review text + ratings (stars) + date. 

We also various drop down menus that we would like to present. 

day.js - This creates a drop down menu for what day the user would like to write/access reviews. 

Dhall.js - This creates a drop down menu for what dining hall the user would like to write/access reviews. 

meal.js - This creates a drop down menu for what meal the user would like to write/access reviews. 

inputs.js - This handles the submission of the drop down menus. It eventually calls the API with the 
selected dining hall and the selected day. 

We also contain the mock datas to complete the mock badge. These can be accessed on mockMenus.js and mockReviews.js. 

App.css - We adjusted the overall design/color scheme of our front end through App.css. We setted various fonts, font sizes, and background color in this class. We also setted the overall alignment of the front end. 

Header.css - We adjusted the overall design of the header in this class. We setted the optimal color, font size, and font family to make it look attractive. 

Backend: 

For the backend, the main role was to scrape the Brown Dining Hall's menu. We had to access all the menu, 
in order for us to present the correct menu at the desired date/location. After discussing as a whole 
team, we decided to use the "beautiful soup" in Python to scrape all the menu items in "https://dining.brown.edu/cafe/"
by assessing menu for each dining hall. Then we incorporated Django for the data management. Because
some of our teammates had experience using beautiful soup and Django, we decided to work in 
Python for our language.

Manage.py - This is the part of the code that runs the administrative tasks. Its main function is to call 
Django to work. 

Scraper.py - This is the class that we used to scrape the dining hall menu from the Brown Dining Service website. 
We represented days in numbers: for example, we represented Monday as "1", Tuesday as "2"...etc 
We then used BeautifulSoup to scrape the dining hall menu successfully. It is located in scrape_menu function inside
the class. 

Views.py - This is the class that handles the inserting and getting reviews on the backend. We use JSON responses 
in terms of the formats and also calculate the average score of the reviews for the individual item in this class. 

Server.py - This class calls the scraper inside the class and prints out the menu item successfully. 

models.py - This class handles the review system of our website. When the user inputs the reviews on the backend, 
it will save the review item that has information like email, name, menu item they wrote the review for, actual reviews,
ratings, and time that they inputted the comments. 

Settings.py - This class sets the overall Django settings for djangoAPI project. It also builds and sets the path and 
the environment variables of the project. 

urls.py - This class also sets the path of scraping, inserting and getting the reviews, and retrieving the average score
of the ratings. 

# Set Up:

Front end:

Initially, please do the following: 

npm install 

How to run the front end: 

npm start - After doing this, it will directly link to our frontend that we created. Once it's fully loaded, you will see the
Google login button. Please click this button, and please login through your brown email! Once you have this, please 
select the items in the drop down menu to access the reviews of the dining hall food! 

How to run tests:

Run tests by running "npx playwright test" in the terminal

Backend: 

It is very important to download Python and Django for this project. 

To download Python, you can do this in this link: https://www.python.org/downloads/

To download Django, you can do this in this link (https://www.djangoproject.com/download/) 
or you can use this command line too in Terminal : pip install Django==5.0.

To run the backend, please do the following: 
Python manage.py runserver

How to run tests:
Run the testings by clicking the play button. 