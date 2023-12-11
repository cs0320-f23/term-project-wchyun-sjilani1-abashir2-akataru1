import scraper as sc
import bs4

print(sc.scrape_menu("andrews-commons", "Thu"))
myList = sc.scrape_menu("andrews-commons", "Thu")
print("BEGIN TODAY'S MENU")
print("   ")
print(myList)
print("  ")
print("END TODAY'S MENU")
# print(bs4.__version__)

