from django.shortcuts import render
from django.http import JsonResponse
from .scrapeFolder.scraper import scrape_menu
import psycopg2
from pathlib import Path
import environ
import os
import traceback
import sys
from .models import bds_user_reviews
from django.core.serializers import serialize  
import json
from django.db.models import Avg


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent



"""This is the API handler that calls the backend scrape method"""
def scrape(request, dining_hall, day):
    return JsonResponse(scrape_menu(dining_hall, day))

"""Inserts the review with the given information into the dataset"""
def insert_review(request, email, name, menu_item, review, rating, time):
    try: 
        bds_user_reviews.objects.create(email=email, name=name, menu_item=menu_item, review=review, rating=rating, time=time)
        return JsonResponse({'Result': 'Success'})
    except Exception as e :
        print(str(e))
        return JsonResponse({'Result': str(e)})

"""Gets all of the reviews for the associated menu item passed in as a parameter"""
def get_reviews(request, menu_item):
    try:
        b = bds_user_reviews.objects.filter(menu_item = menu_item)
        b = serialize("json", b)
        b = json.loads(b)
        ret_list = []
        for i in range(len(b)):
            ret_list.append(b[i]['fields'])
        return JsonResponse(ret_list, safe=False)
    except Exception as e:
        print(str(e))
        return JsonResponse({'Result': str(e)})
    
"""Gets all of the average scores for the passed in items in the API endpoint"""
def get_avg_score(request, items: str):
    
    item_list = items.split(",x,")

    try:
        avg_scores = bds_user_reviews.objects.filter(menu_item__in = item_list).values('menu_item').annotate(avg_score=Avg('rating'))
        avg_scores = list(avg_scores)
        score_dict = {}
        for score in avg_scores:
            score_dict[score["menu_item"]] = score["avg_score"]

        return JsonResponse({'Result': 'Success','Average Score': score_dict})
    except Exception as e:
        return JsonResponse({'Result': str(e)})
    





