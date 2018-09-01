from django.conf.urls import url
from django.views.generic import TemplateView
from .views import  AddRegisterFormView

app_name = 'xinmingcar'

urlpatterns = [
    # 测试地址，验证功能
    url(r'^$', TemplateView.as_view(template_name='zhaomu/index.html'), name='zhaomu'),
    url(r'add_reg/$', AddRegisterFormView.as_view(), name='add_reg'),

]
