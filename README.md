# server-cookie

## conclusion
> 在 web 项目中设置  cookie 的时候 domain (域名) 属性为可选项，可设置也可以不设置。那么设置和不设置到底有什么区别呢？

+ 设置 cookie 时明确指定 domain 域名，子域名可读取（子域共享该cookie），删除时则也必须明确指定域名，否则无法删除。
+ 设置 cookie 时不指定域名，则表示只有当前域名可见（子域不可共享）。删除时也不需要指定域名，否则无法删除。

## intro

```
  npm install
  node index.js 
```
