from django.db import models
from datetime import datetime


# Create your models here.

class RegisterForm(models.Model):
    # 性别选择器
    SEX_IN_USER_CHOICES = (('male', u'男'), ('female', u'女'))
    name = models.CharField(u'昵称', max_length=50, default=u'')
    gender = models.CharField(u'性别', max_length=6, choices=SEX_IN_USER_CHOICES, default='male')
    birthday = models.DateField(u'生日', default=datetime.now)
    village = models.CharField(u'村庄', max_length=100, default=u'')
    mobile = models.CharField(u'手机号', max_length=11, null=True, blank=True)
    wechat = models.CharField(u'微信号', max_length=50, null=True, blank=True)
    update_time = models.DateTimeField(u'更新时间', default=datetime.now)
    add_time = models.DateTimeField(u'添加时间', default=datetime.now)

    class Meta:
        verbose_name = u'报名表'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class JobType(models.Model):
    type = models.CharField('工作类型', max_length=30, default='')
    enabled = models.CharField('状态', choices=((1, '可用'), (0, '不可用')), default=1)
    create_time = models.DateTimeField(u'添加时间', default=datetime.now)
    update_time = models.DateTimeField(u'更新时间', default=datetime.now)

    class Meta:
        verbose_name = u'兼职类型'
        verbose_name_plural = '类型列表'

    def __str__(self):
        return self.type


class JobItem(models.Model):
    TYPE_IN_CHOICE = (('day', u'按天'), ('hour', u'小时'), ('time', u'次'))
    JOB_IN_CHOICE = (('mobile', u'手机代理'), ('editer', u'编辑'), ('other', u'其他'), ('factory', u'工厂'))
    title = models.CharField(u'标题', max_length=100, default=u'')
    area = models.CharField(u'地区', max_length=100, default=u'')
    pay_type = models.CharField(u'支付类型', max_length=10, choices=TYPE_IN_CHOICE, default='day')
    pay_price = models.DecimalField(u'价格', max_digits=12, decimal_places=2, blank=True, null=True)
    job_type = models.CharField(u'兼职类型', max_length=20, choices=JOB_IN_CHOICE, default='other', blank=True, null=True)
    numbers = models.IntegerField('招聘人数', default=0)

    start_date = models.DateField('开始时间', default=datetime.now, blank=True, null=True)
    end_date = models.DateField('结束时间', default=datetime.now, blank=True, null=True)

    jod_desc = models.CharField('职位描述', max_length=1000, default='', blank=True, null=True)
    enabled = models.CharField('状态', choices=((1, '可用'), (0, '不可用')), default=1)

    link_phone = models.CharField('联系人电话', max_length=13, default='', blank=True, null=True)

    create_time = models.DateTimeField(u'添加时间', default=datetime.now)
    update_time = models.DateTimeField(u'更新时间', default=datetime.now)

    class Meta:
        verbose_name = u'兼职'
        verbose_name_plural = '兼职列表'

    def __str__(self):
        return self.title
