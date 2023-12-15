import scraper as sc
import bs4

myList = sc.scrape_menu("blue-room", "Wed")
print("BEGIN TODAY'S MENU")
print("   ")
print(myList)
print("  ")
print("END TODAY'S MENU")
# print(bs4.__version__)

