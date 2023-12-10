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


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent




def scrape(request, dining_hall, day):
    # new_dict = {}
    # response_list = scrape_menu(dining_hall, day)
    # for i in range(len(response_list)):
    #     new_dict[i] = response_list[i]

    return JsonResponse(scrape_menu(dining_hall, day))
    # return JsonResponse({"number": id})

def insert_review(request, email, name, menu_item, review, rating, time):
    try: 
        # conn = psycopg2.connect(host=env("DATABASE_HOST"), 
        #                             dbname=env("DATABASE_NAME"), 
        #                             user=env("DATABASE_USER"), 
        #                             password=env("DATABASE_PASSWORD"), 
        #                             port=env("DATABASE_PORT"))
        # cur = conn.cursor()
        # # query = f"""INSERT INTO {env("REVIEWS_TABLE_NAME")} VALUES ({email}, {name}, {menu_item}, {review}, {rating}, {time});"""
        # query = f"""INSERT INTO reviewsdjangoapp_bds_user_reviews (email, name, review, rating, time, menu_item) VALUES (%s, %s, %s, %s, %s, %s);"""
        # data = (str(email), str(name), str(review), int(rating), str(time), str(menu_item))
        # cur.execute(query, data)
        bds_user_reviews.objects.create(email=email, name=name, menu_item=menu_item, review=review, rating=rating, time=time)
        return JsonResponse({'Result': 'Success'})
    except Exception as e :
        print(str(e))
        return JsonResponse({'Result': str(e)})


    

def get_reviews(request, menu_item):
    try:
        b = bds_user_reviews.objects.filter(menu_item = menu_item)
        b = serialize("json", b)
        b = json.loads(b)
        ret_list = []
        for i in range(len(b)):
            ret_list.append(b[i]['fields'])
        # print(b[0]['fields'])
        return JsonResponse(ret_list, safe=False)
    except Exception as e:
        print(str(e))
        return JsonResponse({'Result': str(e)})




