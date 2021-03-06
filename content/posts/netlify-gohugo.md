+++
ShowBreadCrumbs = false
ShowPostNavLinks = false
ShowReadingTime = false
TocOpen = true
author = "مهدی قدسی‌زاده"
canonicalURL = ""
categories = ["آموزش"]
comments = false
date = 2021-10-18T20:30:00Z
description = ""
disableHLJS = false
disableShare = false
hideSummary = false
hidemeta = false
searchHidden = false
showToc = true
tags = ["ساخت وبلاگ", "آموزش", "بلاگ"]
title = "ساخت وبلاگ با کمک گیتهاب،  netlify و gohugo"
[cover]
alt = ""
caption = ""
hidden = false
image = "https://source.unsplash.com/o6mV3NPlmGw/1200x800"
relative = false

+++
# ساخت وبلاگ با کمک گیتهاب و netlify

من مدت زیادی بود که مایل بودم در کنار کانال یوتوب یادگیری با مهدی یک وبلاگ برای همراهی بیشتر با دنبا‌ل‌کنندگان داشته باشم و بتونم محتوای تکمیلی را برای کسانی که با نوشته راحتتر هستند برسونم  در بین راه‌هایی که وجود داشت مثل استفاده از وردپرس یا گزینه‌های دیگه برای تجربه کردن استاتیک سایت جنریتور‌ها( یا تولیدکننده‌های وبسایت ایستا) یکی از این ابزارها رو انتخاب کردم. گزینه‌های موجود gatsbyjs، nextjs، Jekyll و gohugo بود.  
که من بعد از کمی جستجو بخاطر وجود پوسته‌های متنوع، سرعت بیلد بالا و البته علاقه به زبان go از gohugo استفاده کردم.

# آشنایی با هوگو

هوگو خودش رو سریعترین فریم‌ورک برای ساخت وبسایت در جهان می‌دونه و به شما این امکان رو می‌ده به راحتی یک وبسایت ایستا برای خودتون آماده کنید و در مقایسه با سایر گزینه‌ها بخصوص گزینه‌های مبتنی بر js به شدت سریعتره.

نکته مهم در این موارد اینه که اصلا نیازی به بلد بودن زبان گو وجود نداره و فقط باید یک سری تنظیمات رو در فایلی که به انتخاب شما می‌تونه از فرمت yml یا toml یا json استفاده کنه تغییر بدید.

بعد از آماده کردن وبسایت می‌تونید به راحتی با نوشتن در فایل‌های با فرمت md برای سایت یا بلاگ خودتون محتوا تولید کنید.

## نصب هوگو

برای نصب هوگو اگر از ویندوز استفاده می‌کنید از لینک زیر کمک بگیرید و اگر از لینوکس یا مک استفاده می‌کنید از پکیج منیجر محبوبتون کمک بگیرید.

مثلا برای مک کافیه این دستور رو اجرا کنید:

    brew install hugo

یا در لینوکس با استفاده از اسنپ:

    snap install hugo --channel=extended

## ساخت پروژه

بعد از نصب هوگو با دستور زیر می‌تونید یک پروژه هوگو بسازید:

    hugo new site blog
    cd quickstart
    git init ## to make your blog online and download theme

## انتخاب پوسته مناسب

قبل از نوشتن اولین مطلب بهتره که یک پوسته انتخاب کنید. معمولا پوست‌ها یک توضیح در مورد نحوه نصب خودشون دارن ولی به صورت عمومی شما باید با استفاده از \` git submodule\` اونها رو  فولدر theme کلون کنید.

من به شما پیشنهاد می‌کنم از سایت [هوگورنک](https://hugoranked.com) پوسته مورد نظرتون رو انتخاب کنید.

[https://hugoranked.com](https://hugoranked.com "https://hugoranked.com")

احتمالا دستوری شبیه به این دستور رو اجرا می‌کنید و بعد تنظیماتی که مد نظر هست رو با توجه به توضیحات پوسته انجام می‌دید.

    git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod --depth=1
    vi themes/PaperMod/config.yml # to config your theme

## نوشتن اولین مطلب

همه چیز تا اینجا خوب پیش رفته و کافیه که اولین مطلب رو در وبلاگ بنویسید.

مطالب همگی در فولدر `contents` ذخیره می‌شن.  و با توجه به مسیری که در این فولدر دارن در این سایت دیده میشن.

مثلا اگر پست وبلاگ شما در آدرس زیر باشه  
`contents/posts/first.md`

آدرس این پست در سایت شما چیزی شبیه به این خواهد بود.

`yoursite.com/posts/first`

هر چند راه‌های دیگری هم برای آدرس دهی وجود دارد ولی این روش اصلی در هوگو است.

بعد از اینکه نوشته خودتون رو کامل کردید با استفاده از دستور زیر می‌تونید سایت رو در کامپیوتر خودتون اجرا کنید.

    hugo server

> نکته مهم: بعد از هر بار ذخیره کردن محتوا نمونه ایجاد شده در کامپیوترتون به صورت خودکار بروز می‌شه

احتمالا وبسایت/وبلاگ شما در آدرس زیر مشاهده میشه.

[http://localhost:1313](http://localhost:1313/)

اگر غیر از این باشه  بعد از اجرای دستور فوق در توضیحات به شما اطلاع‌رسانی خواهد شد.

# اتصال به گیتهاب

برای اینکه نوشته‌ها و وبلاگ شما ذخیره بشه باید اونها رو در جایی مثل گیتهاب ذخیره کنید.

برای اینکار اول در گیتهاب یک حساب بازکنید و بعد از اون یک ریپوزیتوری با نام دلخواه بسازید.

بعد از اینکار گیتهاب شما رو راهنمایی می‌کنه که چجوری پروژه رو به ریپوزیتوری متصل کنید ولی با اجرای دستورهای زیر هم می‌تونید اینکار رو انجام بدید.

    git add . # اضافه کردن فایلها به توییت
    git commit -m "first commit" # انجام کامیت اول
    $ git remote add origin  <REMOTE_URL>  # آدرس رپوزیتوری شما
    $ git remote -v
    # مشاهده ریموت‌ جدید
    git push -u origin main # ارسال همه کده به سرور

اگر با گیت آشنایی ندارید توصیه می‌کنم ویدیوی آموزش گیت برای دانشجویان رو مشاهده کنید.

{{< youtube 6gsc-0bmksg >}}

# اتصال به netlify

# اتصال دامنه

# اضافه کردن CMS