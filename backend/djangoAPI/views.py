from django.http import JsonResponse

def say_hello(request):
    print("Hello")
    return JsonResponse({"Hello": 16})