---
title: ' نسخه جدید بورس تهران در پایتون'
date: 2022-04-04T16:33:55+04:30
# weight: 1
# aliases: ["/first"]
tags: []
categories:
  - اقتصاد
  - بورس تهران
  - پایتون
author: 'مهدی قدسی‌زاده'
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: true
draft: false
hidemeta: false
comments: fale
description: 'دسترسی به بورس تهران با پایتون با کتابخانه tehran-stocks'
canonicalURL: 'https://learnwithmehdi.ir/posts/tehran-stocks-python'
disableHLJS: false # to disable highlightjs
disableShare: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
cover:
  image: 'https://unsplash.com/photos/s5kTY-Ve1c0'
  alt: 'بورس تهران در پایتون'
  caption: '<text>' # display caption under cover
  relative: false # when using page bundles set this to true
  hidden: true # only hide on current single page
---

## بسته پایتون بورس تهران در پایتون

احتمالا یکی از دلایل آشنایی شما با این وبسایت ممکنه کتابخانه بورس تهران در پایتون باشه.

این کتابخانه الان بعد از تقریبا ۳ سال فعالیت
بیش از ۳۳۰
ستاره داره.
[![GitHub stars](https://img.shields.io/github/stars/ghodsizadeh/tehran-stocks?label=Github%20Stars)](https://github.com/ghodsizadeh/tehran-stocks/stargazers)
و بیش از ۳۵ هزار بار نصب شده.

{{< youtube id="5ktBsR9Em58" autoplay="true"  >}}

امروز به صورت رسمی نسخه شماره ۱.۰.۰ این کتابخانه منتشر شده و شما می‌تونید با دستور زیر اون رو نصب کنید:

```bash
$ pip install tehran-stocks
```

در این نسخه تغییرهای زیادی صورت گرفته که بخشی از اون‌ها مربوط به افزایش سرعت عملکرد کتابخانه و برخی مربوط به دسترسی‌ بیشتر به اطلاعات بورس تهران هست.

- بهبود سرعت راه‌اندازی اولیه از ۱۰ دقیقه به زیر ۳۰ ثانیه برای دریافت لیست سهام
- افزایش ۵ برابری سرعت دریافت قیمت کل بازار
  (وابسته به سرعت اینترنت)
  - دریافت اطلاعت ۲۱ سال
  - دریافت بیش از ۱.۲ میلیون روز/قیمت/سهم
- بروزرسانی روزانه قیمت بازار در کمتر از ۱ دقیقه
- دریافت قیمت‌لحظه‌ای سهام
- دریافت تغییرات در تعداد سهام در سال‌های گذشته
- دریافت تعدیل قیمت
- امکان تغییر دیتابیس به هر دیتابیس پشتیبانی شده توسط SQLAlchemy مثل Postgresql و MySQL
- سازگاری کامل با تقویم شمسی با کمک بسته
  [jalali-pandas](https://github.com/ghodsizadeh/jalali-pandas)

امکاناتی که از قبل بوده و در این نسخه بهبود داده شده:

- دریافت تمامی قیمت‌های موجود در سایت بورس
- دریافت قیمت‌ها بر اساس گروه‌های سهام (مثل ETFها و خودروها و غیره)
- دسترسی به اطلاعات با خط فرمان
- ذخیره اطلاعات به صورت csv, excel و Stata(dta)
- سازگاری با `sqlalchemy`
- سازگاری با `PANDAS`
- استفاده از بسته `sqlite`

# راهنمای استفاده

برای تجربه تعاملی می‌تونید روی لینک زیر کلیک کنید و دستورها رو اونجا اجرا کنید:
(
فعلا بخاطر برخی مشکلات این کد در کولب کار نمی‌کنه و شما باید اون رو دانلود کنید و در سیستم خودتون با پایتون ۳.۸ به بالا این نوت‌بوک رو تست کنید.

)
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ghodsizadeh/tehran-stocks/blob/master/Example/Read_Data.ipynb)

## نصب کتابخانه

```bash
$ pip install tehran-stocks
```

## راه‌اندازی کتابخانه

بعد از
import
کردن کتابخانه بعد از اولین بار سیستم به صورت خودکار اطلاعات نزدیک به ۷۵۰
سهم را دریافت می کند.
‍‍‍

```python
>>> from tehran_stocks import Stocks, db
making package folder...
Includes: config.yml and stocks.db  if you are using sqlite.
you can change config.yml to your needs.
```

در این مرحله به ویرایش فایل
`config.yml`
می‌تونید دیتابیس خودتون رو از sqlite
به هر چیز دیگه تغییر بدید.

با اجرای دستورهای زیر می‌تونید سهم مورد نظر خودتون رو دریافت کنید:

```python
from tehran_stocks import Stocks, db

# You can use query to find stocks
stock = Stocks.query.filter_by(name='كگل').first() #find by symbol(نماد)

stock = Stocks.query.filter_by(code='35700344742885862').first() # find by code on tsetmc url

stock = Stocks.query.filter(Stocks.title.like('%گل گهر%')).first() # Search by title

stock_list = Stocks.query.filter_by(group_code =34).all() # find all Stocks in Khodro

stock_list = Stocks.query.filter(Stocks.group_code.in_([13,34])).all() # all stocks in khodro and felezat


## (Advanced)or run sql query using orm or raw sql
db.session.query(Stocks.group_code, Stocks.group_name).group_by(Stocks.group_code).all()

db.session.execute('select group_code , group_name from stocks group by group_name').fetchall()
```

با اجرای دستورهای زیر می‌تونید اطلاعات مورد نیاز برای هر سهم رو بدست بیارید:

```python
# دریافت دیتا در دیتافریم پانداس
>>> stock.df#
      id               code        ticker  dtyyyymmdd    first     high      low    close        value      vol  openint per     open     last       date
0  22491  35700344742885862  Gol-E-Gohar.    20040829  12000.0  12021.0  12000.0  12000.0  18841605000  1570000     2708   D  12000.0  12000.0 2004-08-29

>>> stock.summary()
Start date: 2004/08/29
End date: 2019/07/14
Total days: 2987

# انجام بروزرسانی قیمت سهم
>>> stock.update()

# دریافت خروجی در فرمت‌های مختلف
>>> stock.df.to_csv('price.csv')
>>> stock.df.to_excel('price.xlsx')
>>> stock.df.to_stata('price.dta')

```

## دریافت اطلاعات لحظه‌ای و تاریخی

با اجرای دستورهای زیر می‌تونید اطلاعات لحظه مانند آخرین قیمت، آخرین حجم معامله و ارزش بازار سهم رو دریافت کنید.
علاوه بر این تاریخچه تغییر در تعداد سهم(افزایش سرمایه)
و تغییر قیمت بر اساس تقسیم سود یا موارد دیگر رو مشاهده کنید.

```python

>>> stock.get_instant_detail()
{'time': '12:29:57',
 'last_price': '12950',
 'last_close': '13060',
 'last_high': '13300',
 'last_low': '13130',
 'last_open': '13330',
 'trade_count': '12760',
 'trade_volume': '1140',
 'trade_value': '4671236',
 'market_cap': '60715047900',
 'date_string': '20220404',
 'time_string': '122957'}

# get change in share count
>>> stock.get_shares_history()

date	new_shares	old_shares	gdate
0	1400-12-08 00:00:00	200.000 B	100.000 B	2022-02-27
1	1400-04-20 00:00:00	100.000 B	74.400 B	2021-07-11

# get change in price ~ dividend, split, etc.
>> stock.get_dividend()
date	after	before	dividend	gdate
0	1400-04-16 00:00:00	18770	20070	1300	2021-07-07
1	1399-04-18 00:00:00	16350	17250	900	2020-07-08

```

## کار با داده‌های شمسی

برای کار با داده‌های شمسی به صورت ضمنی از کتابخانه
[‍`jalali-pandas`](https://github.com/ghodsizadeh/jalali-pandas)
استفاده شده با کمک اون می‌تونید تحلیل‌های ادغامی برای ماه، سال، هفته و روز شمسی رو انجام بدید.
در زیر نمونه‌ای از این تحلیل‌ها رو می‌بینید.

```python
df = stock.df
df.jalali.groupby("year").count()
df.jalali.groupby("md").mean()
df.jalali.groupby("year").max()['close']
# or any of ['year', 'month', 'day', 'week', 'dayofweek', 'dayofmonth', 'ym', 'yq', 'ymd', 'md']

```

## اتصال به دیتابیس متفاوت

برای کار با دیتابیس‌های مختلف می‌تونید تظیمات موجود در
config.yml
که در آدرس زیر قرار داده شده را ویرایش کنید.

```bash
$ ~/.tse/config.yml #unix MacOS/Linux
$ C:\Users\User\{USERNAME}\.tse\config.yml #Windows
```

برای نمونه برای را‌ه‌اندازی با یک دیتابیس postgresql
می‌تونید از این تنظیمات استفاده کنید.

برای اینکار ممکنه نیاز به نصب
`pyscopg2`
داشته باشید.

```yaml
database:
  database: stocks
  engine: postgresql
  host: localhost
  password: password
  port: 5432
  user: postgres
```

---

# حمایت

برای حمایت‌ از این پروژه‌ راه‌های مختلفی وجود داره:

- مهمترین حمایت شما معرفی این کتابخانه به دوستانتون و در گروه‌ها و شبکه‌های اجتماعی که فعال کردید هست.
- ستاره دادن در گیتهاب
  [![GitHub stars](https://img.shields.io/github/stars/ghodsizadeh/tehran-stocks?label=Github%20Stars)](https://github.com/ghodsizadeh/tehran-stocks/stargazers)
- مشترک شدن در کانال یوتوب من (که احتمالا برای من جذاب‌ترینه)
  [![Youtube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/channel/UCF3v_GwH3Jg2c-V3hRwmcbg)
- حمایت با استفاده از بیتکوین  
  ![Keybase BTC](https://img.shields.io/keybase/btc/mghodsizadeh)
- خرید یک فنجان قهوه (که من احتمالا برای خرید یک قلم نوری ازش استفاده می‌کنم!) با پرداخت مبلغ دلخواه در لینک زیر:
  [![IDPay](https://img.shields.io/badge/IDPay-blue?style=for-the-badge&logo=idpay&logoColor=white)](https://idpay.ir/ghodsizadeh)
