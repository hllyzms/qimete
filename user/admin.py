from django.contrib import admin

# Register your models here.
from .models import UserProfile

class UserProfileAdmin(admin.ModelAdmin):
    list_display = ("username","name","gender","mobile",)
    list_filter = ("mobile","username",)
    suit_list_filter_horizontal = ("mobile","username",)


admin.site.register(UserProfile,UserProfileAdmin)
