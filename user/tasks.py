# -*- coding: utf-8 -*-
# data : 2018/5/5/005

from django.conf import settings
from django.core.mail import send_mail
from qimete.celery import app
import time
from datetime import datetime
@app.task
def from_send_mail(msg, title, email,):
    """向管理员或用户发送邮件"""
    time.sleep(15)
    msg_ = "请求时间是%s,发送时间是%s"%(msg,datetime.now())
    send_mail(title, '', settings.EMAIL_FROM, [email], html_message=msg_)


def from_send_mail1(msg, title, email,):
    """向管理员或用户发送邮件"""
    msg_ = "实时请求非celery,请求时间是%s,发送时间是%s"%(msg,datetime.now())
    send_mail(title, '', settings.EMAIL_FROM, [email], html_message=msg_)
