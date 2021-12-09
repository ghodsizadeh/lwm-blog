---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
# weight: 1
# aliases: ["/first"]
tags: []
categories:
    - Economics
    - Data
    - Programming
    - Blog
author: "مهدی قدسی‌زاده"
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: true
draft: false
hidemeta: false
comments: fale
description: "Desc Text."
canonicalURL: "https://learnwithmehdi.ir/posts/{{ .Name }}"
disableHLJS: false # to disable highlightjs
disableShare: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
cover:
    image: "https://unsplash.com/photos/s5kTY-Ve1c0" 
    alt: '{{ replace .Name "-" " " | title }} '
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: true # only hide on current single page
---
