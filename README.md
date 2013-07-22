bootstrap-skin-for-artdialog
============================

artDialog的bootstrap皮肤.

注意这个玩意儿其实只是让`artDialog`支持`bootstrap`的样式,并不是完全写了一个跟`bootstrap`的样式一模一样的皮肤.

所以,你要使用这个皮肤,必须先引入 `bootstrap` 的css文件.

因为`artDialog`的html结构和`bootstrap`并不兼容,所以这个皮肤在不修改`artDialog`源码的基础上,劫持了部分`artDialog`的方法来实现兼容`bootstrap`.

所以,要想用,也必须引入`jquery.artDialog.bootstrap.js`这个文件,不过代码量很小.

最后,这个东西目前仅在`Chrome`由作者`目测`过,没有经过详细而严谨的测试.

不过,演示还是提供的,看这里: http://darkfe.com/bootstrap-skin-for-artdialog/demos/index.html
