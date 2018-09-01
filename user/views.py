from django.db.models import Q
from django.shortcuts import render

# Create your views here.
from django.views import View
from .tasks import from_send_mail, from_send_mail1
from datetime import datetime
from django.contrib.auth.backends import ModelBackend
from .models import UserProfile


class SetMessage(View):
    def get(self, request):
        msg = '%s' % datetime.now()
        context = {'info': "正常"}
        try:
            from_send_mail1(msg, '测试发邮件', 'hllyzms@vip.qq.com')
            from_send_mail.delay(msg, '测试发邮件', 'hllyzms@vip.qq.com')
        except Exception as e:
            context = {'info': e}
        return render(request, 'message.html', context)


class CustomBackend(ModelBackend):
    """
    custom the login backend,
    overrite the authenticate method()
    """

    def authenticate(self, username=None, password=None, **kwargs):
        try:
            """验证username或者email"""
            user = UserProfile.objects.get(Q(username=username) | Q(email=username))
            if user.check_password(password):
                return user
        except Exception as e:
            return None
