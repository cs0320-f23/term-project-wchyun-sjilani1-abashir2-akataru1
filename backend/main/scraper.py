from urllib import response
from bs4 import BeautifulSoup
import requests
import sqlite3
import re
import time
#from requests_html import HTMLSession

### IEX TRADING API METHODS ###
DINING_WEB = "https://dining.brown.edu/cafe/"

day_codes = {
    "Mon" : "1",
    "Tue" : "2",
    "Wed" : "3",
    "Thu" : "4",
    "Fri" : "5",
    "Sat" : "6",
    "Sun" : "0"
}

def has_row(tag):
    return tag.startswith("row ")


def scrape_menu(dining_hall : str, weekday: str) -> list:
    #Use BeautifulSoup and requests to collect data required for the assignment.
    req = requests.get(DINING_WEB + dining_hall + "/", verify=False)
    dining_html = req.text
    dining_soup = BeautifulSoup(dining_html, 'html.parser')
    menu_element = dining_soup.find("a", class_='hidden-small')
    menu_link = menu_element.get('href')
    print(menu_link)
    req2 = requests.get(menu_link)
    time.sleep(2)
    menu_html = req2.text
    menu_soup = BeautifulSoup(menu_html, 'html.parser')


    day_code = day_codes[weekday]
    #print(menu_soup)
    day_items = menu_soup.find_all(class_="day cell_menu_item", id=lambda x: x and x.endswith(day_code), recursive=True)
    print(day_items)
    init_menu_list = []
    menu_dict = {}
    for day_item in day_items:
        #station = row.find(class_="stationname").text
        print(day_item)
        menu_items = day_item.find_all(class_="menu-item-description")
        #menu_items = [s.find(class_="menu-item-description") for s in day_items.find_all(class_="menu-item")]
        for menu_item in menu_items:
            #print(menu_item)
            menu_dict = {
                "Menu item": menu_item.find(class_="weelydesc").text,
                #"Station": station,
                "Description": menu_item.find(class_="collapsed").text if menu_item.find(class_="collapsed") is not None else "",
                "Day Part": menu_item.find(class_="daypart-abbr").text
            }
            
            icons = menu_item.find_all(class_="menu-cor-icon")
            menu_dict["Dietary restictions"] = [d.get('alt') for d in icons]
            init_menu_list.append(menu_dict)
    return init_menu_list


print(scrape_menu("andrews-commons", "Fri"))
    



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



