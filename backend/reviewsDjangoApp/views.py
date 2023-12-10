from django.shortcuts import render
from django.http import JsonResponse
from .scrapeFolder.scraper import scrape_menu

def scrape(request, dining_hall, day):
    # new_dict = {}
    # response_list = scrape_menu(dining_hall, day)
    # for i in range(len(response_list)):
    #     new_dict[i] = response_list[i]

    return JsonResponse(scrape_menu(dining_hall, day))
    # return JsonResponse({"number": id})

def insert_review(request):
    return JsonResponse({'Hello': 99})

def get_reviews(request):
    return JsonResponse({'Hello': 99})
