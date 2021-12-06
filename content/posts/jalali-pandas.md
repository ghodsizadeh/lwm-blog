---
title: "معرفی بسته pandas-jalali | آموزش کار با تاریخ شمسی در pandas"
date: 2021-12-06T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags: ["first"]
categories:
    - Economics
    - Data
    - Python
    - Blog
author: "مهدی قدسی‌زاده"
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: true
description: "آموزش کار با داد‌ه‌های تاریخ شمسی  در pandas  و python"  
canonicalURL: "https://learnwithmehdi.ir/posts/jalali-pandas"
disableHLJS: false # to disable highlightjs
disableShare: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
cover:
    image: "img/github-jalali-pandas.png?v=1" # image path/url
    alt: "jalali-pandas" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: false # only hide on current single page
---


# معرفی کتابخانه jalali-pandas
اگر با داده‌های که بر اساس  تاریخ شمسی آماده شده باشند کار کرده باشید در اولین مراحل کارتون مجبور با پیاده‌سازی دستوراتی شدید که به صورت پیش‌فرض برای تاریخ میلادی در دسترس بوده. مثلا برای محاسبه میانگین ماهانه یک سری زمانی تنها کافی بوده داده را با یک دستور ساده به ماهانه تبدیل کنید. در برخی موارد هم داده‌ها با تاریخ میلادی ذخیره شده ولی نیازمند تبدیل به تاریخ شمسی دارند که این فرایند هم کمی سخت و زمان‌گیر است.

کتابخانه پایتونی 
[`jalali-pandas`](https://github.com/ghodsizadeh/jalali-pandas)
دقیقا برای پر کردن این خلا آماده شده و با اضافه کردن یک دستور ساده به کتابخانه قدرتمند
‍`pandas`
بسیاری از این امکانات رو  برای شما فراهم می‌کنه.

در این مطلب سعی می‌کنم ویژگی‌های این کتابخانه و مسیری که می‌تونه پیش رو داشته باشه را بیان کنم و از شما می‌خوام اگر فکر می‌کنید  امکانات دیگری هم میشه به این کتابخانه اضافه کرد با من در
[بخش مسائل کتابخانه جلالی پانداس](https://github.com/ghodsizadeh/jalali-pandas/issues)
 در میان بگذارید.


## ویدیوی آموزش استفاده از کتابخانه jalali-pandas
اگر با ویدیو راحت‌تر هستید. می‌تونید در
[ یوتوب یادگیری با مهدی]()
 این ویدیو رو مشاهده کنید.
 (و ممنون می‌شم کانال رو سابسکرایب کنید.)
در غیر این صورت همه جزئیات رو می‌تونید در ادامه بخونید.
{{< youtube id="PYS4Hxmzbyg" autoplay="true"  >}}

## نصب کتابخانه
برای نصب کتابخانه کافیه که اون را با دستور زیر در محیط مورد نظر خود نصب کنید.
اگر در محیط ژوپیتر مانند مثل کولب کد می‌زنید کافیه که دستور را با یک
`%`
قبلش وارد کنید.
```bash
$ pip install jalali-pandas
$ %pip install jalali-pandas # inside jupyter notebook
```

## استفاده از کتابخانه
برای استفاده از کتابخانه در کد خودتون کافیه که کتابخانه را بعد از وارد کردن
`panadas`
وارد کنید.


```python
import pandas as pd
import jalali_pandas
```
با انجام اینکار یک متد جدید به سری و دیتافریم پانداز اضافه میشه که به شما قدرت زیادی در استفاده از داده‌های شمسی میده.

## کار با سری‌ها
تقریبا کوچکترین بخش در پانداز یک سری یا ستون دیتافریم هست.
این کتابخانه برای کار با سری‌ها امکانات زیر رو ارائه میده:
- تبدیل تاریخ شمسی به تاریخ میلادی
- تبدیل تاریخ میلادی به تاریخ شمسی
- تفسیر تاریخ شمسی از روی 
`string` 
- ارائه ویژگی‌هایی مثل سال/فصل/ماه/روز شمسی برای تاریخ شمسی برای کل سری

در اینجا با هم نحوه کار این کتابخانه در سری‌ها رو می‌بینیم:

```python
import pandas as pd
import jalali_pandas

# ساخت دیتا فریم نمونه
df = pd.DataFrame({"date": pd.date_range("2019-01-01", periods=10, freq="D")})

# تبدیل تاریخ میلادی به شمسی
df["jdate"] = df["date"].jalali.to_jalali()

# تبدیل تاریخ شمسی به میلادی
df["gdate"] = df["jdate"].jalali.to_gregorian()

#  تجزیه تاریخ شمسی از روی 
# string
df1 = pd.DataFrame({"date": ["1399/08/02", "1399/08/03", "1399/08/04"]})
df1["jdate"] = df1["date"].jalali.parse_jalali("%Y/%m/%d")


# دسترسی به سال، فصل، ماه و روز شمسی
df['year'] = df["jdate"].jalali.year
df['month'] = df["jdate"].jalali.month
df['quarter'] = df["jdate"].jalali.quarter
df['day'] = df["jdate"].jalali.day
df['weekday'] = df["jdate"].jalali.weekday
```

## کار با دیتافریم
یکی دیگه از ویژگی‌های این کتابخانه تبدیل دیتافریم‌ها به حالت‌های مختلف مربوط به تاریخ شمسی است که به دو صورت نمود پیدا می‌کنه:
- گروه‌بندی دیتافریم بر اساس تاریخ شمسی | 
groupby
- تبدیل داده به سری‌های مختلف (بازنمونه‌گیری) | resampling 
_(به زودی)_


```python
import pandas as pd
import jalali_pandas

df = pd.DataFrame(
    {
    "date": pd.date_range("2019-01-01", periods=10, freq="M"),
    "value": range(10),
    }
)
# مطمئن باشید که حتما یک ستون با دیتاتایپ تاریخ جلالی وجود دارد. | بر اساس سال‌های شمسی
df["jdate"] = df["date"].jalali.to_jalali()


# گروه بندی بر اساس سال | میانگین سالانه
gp = df.jalali.groupby("year")
gp.sum()

# میانگین ماهانه | بر اساس ماه‌های شمسی
mean = df.jalali.groupby('mean')

# میانگین سال/ماه/روزانه | بر اساس روز‌های شمسی
mean = df.jalali.groupby('ymd')
# معادل
# mean = df.jalali.groupby(['year','month','day'])


# میانگین سال/فصلی | بر اساس سال/فصل‌های شمسی
mean = df.jalali.groupby('yq')
# معادل
# mean = df.jalali.groupby(['year','quarter'])

```


## جمع‌بندی

کتابخانه 
pandas-jalali
یک کتابخانه مناسب برای کار با داده‌های شمسی است 
ولی با وجود امکاناتی که داره هنوز امکانات دیگه‌ای هم می‌تونه داشته باشه ممنون می‌شم اگر ایده‌ یا پیشنهادی دارید مطرح کنید و اگر دست به کد هستید خودتون هم در  توسعه‌اش مشارکت داشته باشید.

در آخر ممنون میشم اگر این کتابخانه براتون مفید بود توی گیتهاب به اون ستاره بدید تا هم برای دیگران شناسایی اون راحت باشه و هم به من انگیزه توسعه سرویس‌های بیشتری بده. :)

