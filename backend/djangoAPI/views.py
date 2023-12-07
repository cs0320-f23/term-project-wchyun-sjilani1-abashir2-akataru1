from django.http import JsonResponse
from .scraper import scrape_menu

def scrape(request, dining_hall, day):
    new_dict = {}
    response_list = scrape_menu(dining_hall, day)
    for i in range(len(response_list)):
        new_dict[i] = response_list[i]

    return JsonResponse(new_dict)
    # return JsonResponse({"number": id})