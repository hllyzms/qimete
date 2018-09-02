<<<<<<< HEAD
from django.conf.urls import url, include
=======
from django.conf.urls import url
>>>>>>> e47dfe20f311a4af4c314e9579a773f275499f09
from django.contrib import admin
from django.views.generic import TemplateView, RedirectView
from user.views import SetMessage

<<<<<<< HEAD
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='index'),
    # 鑫铭汽贸
    url(r'^zhaomu/', include('xinmingcar.urls', namespace='xinming')),
=======

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='index'),
>>>>>>> e47dfe20f311a4af4c314e9579a773f275499f09
    url(r'^services/$', TemplateView.as_view(template_name='services.html'), name='services'),
    url(r'^how-we-work/$', TemplateView.as_view(template_name='how.html'), name='how-we-work'),
    url(r'^jobs/$', TemplateView.as_view(template_name='jobs.html'), name='jobs'),
    url(r'^projects_magrudy/$', TemplateView.as_view(template_name='projects_magrudy.html'), name='magrudy'),
    url(r'^projects_lifesize/$', TemplateView.as_view(template_name='projects_lifesize.html'), name='lifesize'),
    url(r'^ux-ui-designer/$', TemplateView.as_view(template_name='11ux-ui-designer.html'), name='ux-ui-designer'),
    url(r'^senior-designer/$', TemplateView.as_view(template_name='12senior-designer.html'), name='senior-designer'),
    url(r'^python-django-developer/$', TemplateView.as_view(template_name='13python-django-developer.html'),
        name='python-django-developer'),
    url(r'^business-development-manager/$', TemplateView.as_view(template_name='21business-development-manager.html'),
        name='business-development-manager'),
    url(r'^devops-cloud-engineer/$', TemplateView.as_view(template_name='22devops-cloud-engineer.html'),
        name='devops-cloud-engineer'),
    url(r'^senior-front-end-developer/$', TemplateView.as_view(template_name='23senior-front-end-developer.html'),
        name='senior-front-end-developer'),
    url(r'^content-marketing-specialist/$', TemplateView.as_view(template_name='31content-marketing-specialist.html'),
        name='content-marketing-specialist'),
<<<<<<< HEAD
    # 测试地址，验证功能
    url(r'^index/$', TemplateView.as_view(template_name='zhaomu/index.html'), name='index'),
    url(r'^list/$', TemplateView.as_view(template_name='zhaomu/temporarydatails.html'), name='list'),
=======

    url(r'^index/$', TemplateView.as_view(template_name='index1.html'), name='index1'),
>>>>>>> e47dfe20f311a4af4c314e9579a773f275499f09
    url(r'set_mess/$', SetMessage.as_view(), )
]
