# learn-ajax
>
+ AJAX即“Asynchronous Javascript And XML”（异步JavaScript和XML），是指一种创建交互式网页应用的网页开发技术。
+ AJAX = 异步 JavaScript和XML（标准通用标记语言的子集）。
+ AJAX 是一种用于创建快速动态网页的技术。
+ 通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
+ 传统的网页（不使用 AJAX）如果需要更新内容，必须重载整个网页页面。

>      以上来自百度百科


1. 创建XMLHttpRequest对象
      <pre>
      ajaxRequest = new XMLHttpRequest();
      </pre>
      兼容IE版本
      <pre>
      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
      ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      </pre>

2. 发送请求
      <pre>
      ajaxRequest.open(method,URL,async,userName,password);
      </pre>

+ 其中,method是和url是必须的参数,其他的是可选的.
+ async是否异步请求,默认值为ture,所以一般不用填写.
+ method的值一般有GET,POST,HEAD,PUT,DELETE等等.
+ GET 还是 POST？
      与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。
      然而，在以下情况中，请使用 POST 请求：
      无法使用缓存文件（更新服务器上的文件或数据库）
      向服务器发送大量数据（POST 没有数据量限制）
      发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠
      <pre>
      ajaxRequest.send();
      </pre>
      发送请求,POST的时候发送数据,GET的时候不填或者发送null.

3. onreadystatechange事件

      这个事件监听readyState值的改变,每改变一次就触发一次.
      readyState的值有四个

|State(状态)	|Description(描述)|
|-|-|
|0|	The request is not initialized.(请求未初始化)|
|1|	The request has been set up.(请求已经建立)|
|2|	The request has been sent.(请求被发送)|
|3|	The request is in process.(请求处理中)|
|4|	The request is completed.(请求完成)|

* readyState = 0 After you have created the XMLHttpRequest object, but before you have called the open() method.
* readyState = 1 After you have called the open() method, but before you have called send().
* readyState = 2 After you have called send().
* readyState = 3 After the browser has established a communication with the server, but before the server has completed the response.
* readyState = 4 After the request has been completed, and the response data has been completely received from the server.

      responseText是请求的返回值
      status是请求的状态码




express 设置跨域访问

<pre>
      app.all('*', function(req, res, next) {
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "X-Requested-With");
          res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
          res.header("X-Powered-By",' 3.2.1');
          res.header("Content-Type", "application/json;charset=utf-8");
          next();
      });
</pre>
