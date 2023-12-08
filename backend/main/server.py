import scraper as sc
import bs4

print(sc.scrape_menu("andrews-commons", "Fri"))
myList = sc.scrape_menu("andrews-commons", "Fri")
print("BEGIN TODAY'S MENU")
print("   ")
print(myList)
print("  ")
print("END TODAY'S MENU")
# print(bs4.__version__)

