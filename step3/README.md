#Step3

###Template Engine
---
-1. Use template engine:<br />
<b>ejs</b>(Embedded Javascript) is an implementation of template engine compatible with <b>Express</b>.<br />
In <b>app.js</b>, we can set engine and location of templates
```javascript
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
```
-2. Template variables display:<br />
display replaced HTML:
```html
<%= var %>
```
Javascript code:
```html
<% code %>
```
Original HTML:
```html
<%- code %>
```
-3. Layout template<br />
in <b>layout.ejs</b>:
```html
<%- body %>
```
is where the extending ejs lies.<br />
In <b>index.js</b> router:
```javascript
res.render('[embedded ejs]', {[var name]:[var value], layout:[layout ejs]});
```
when translating embedded template, it will apply to the template file as layout
layout.ejs is the default template ejs file, and layout attribute is optional.

-4. 
