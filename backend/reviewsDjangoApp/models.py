from django.db import models

class bds_user_reviews(models.Model):
    email=models.TextField(null=True, blank=True)
    name=models.TextField(null=True, blank=True)
    menu_item=models.TextField(null=True, blank=True)
    review=models.TextField(null=True, blank=True)
    rating=models.DecimalField(max_digits=2, decimal_places=1)
    time=models.TextField()
    
    
