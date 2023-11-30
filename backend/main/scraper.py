from urllib import response
from bs4 import BeautifulSoup
import requests
import sqlite3

### IEX TRADING API METHODS ###
DINING_WEB = "https://dining.brown.edu"



#Use BeautifulSoup and requests to collect data required for the assignment.
req = requests.get(DINING_WEB)
dining_html = req.text
dining_soup = BeautifulSoup(dining_html, 'html.parser')
menu_element = dining_soup.find("a", class_='hidden-small').find_all("tr")
menu_link = menu_element.get('href')

req2 = requests.get(menu_link)
menu_html = 


'''
# Save data below.
init_stocks_list = []
item_attributes = []
stock_dict = {}
multipliers = {'K':1000, 'M':1000000}
for row in stock_items[1:]:
    item_attributes = [s.text for s in row.find_all('td')]
    stock_dict = {
        "Name" : item_attributes[1],
        "Symbol" : item_attributes[2].strip(),
        "Price" : float(item_attributes[3].replace(',', '').strip()),
        "Ch. %" : float(item_attributes[5][:-1]),
        "Vol. ": \
            int(float(item_attributes[6][:-1].replace(',', '')) * \
                multipliers[item_attributes[6][-1]]),
        "HQ (State)": item_attributes[7].lower().strip(),
    }
    init_stocks_list.append(stock_dict)
    item_attributes = []
    stock_dict = {}

#TODO: Use IEX trading API to collect sector and previous pricing data.

stocks_list = []
for stock in init_stocks_list:
    try:
        response = requests.get("https://api.iex.cloud/v1/stock/" + \
            stock["Symbol"] + "/chart/1m?chartCloseOnly=True&token=" + TOKEN)
        response.raise_for_status()
        jan_response = requests.get("https://api.iex.cloud/v1/stock/" + \
            stock["Symbol"] + \
            "/chart/date/20230120?chartByDay=true&chartCloseOnly=True&token=" \
                + TOKEN)
        jan_response.raise_for_status()
    except:
        continue
    else:
        price_total = 0.0
        if(len(response.json()) == 0):
            continue
        else:
            for day in response.json():
                price_total += day.get('close')
            close_average = price_total/len(response.json())
            stock['Average Price'] = close_average
            if(len(jan_response.json()) != 0 and \
            jan_response.json()[0].get('close') is not None):
                stock['Jan 20 closing'] = jan_response.json()[0].get('close')
            stocks_list.append(stock)
        
# Create connection to database

#Make sure you have the right path to data.db, in case you have any connection issues
conn = sqlite3.connect('data.db')
c = conn.cursor()

# Delete tables if they exist
c.execute('DROP TABLE IF EXISTS "companies";')
c.execute('DROP TABLE IF EXISTS "quotes";')
'''



