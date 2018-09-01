#coding=utf-8
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic.base import View

from .models import RegisterForm
from .forms import UserRegisterForm

# Create your views here.


class AddRegisterFormView(View):
    """
    用户报名表
    """
    def get(self, request):
        user_registerform = UserRegisterForm()
        return render(request, 'registerform.html', {'user_registerform': user_registerform})

    def post(self, request):
        userreg_form = UserRegisterForm(request.POST)
        user_reg = RegisterForm()
        user_reg.name = request.POST.get('name', '')
        user_reg.gender = request.POST.get('gender', '')
        user_reg.birthday = request.POST.get('birthday', '')
        user_reg.village = request.POST.get('village', '')
        user_reg.mobile = request.POST.get('mobile', '')
        user_reg.wechat = request.POST.get('wechat', '')
        user_reg.save()
        ret = {"status": None, "message": None}

        return HttpResponse('{"status":"success", "msg":"添加成功"}', content_type='application/json')
        # else:
        #     ret["message"] = "添加出错"
        #     return HttpResponse('{"status":"fail", "msg":"添加出错"}', content_type='application/json')
