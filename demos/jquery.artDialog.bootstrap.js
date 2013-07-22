/*
 * bootstrap skin for artDialog 
 */

(function($){

    var originConstructor = $.artDialog.prototype.constructor;

    var originButtonMethod = $.artDialog.prototype.button;

    //添加button时需要手动添加上bootstrap 'btn' class
    //所以要劫持button方法
    artDialog.prototype.button = function(){

        originButtonMethod.apply(this,arguments);

        var instance = this;
        var configButtons = [].slice.call(arguments);
        var buttons = instance._listeners = instance._listeners || {};

        $.each(buttons, function(){
            $(this.elem).addClass('btn');
        });

        $.each(configButtons, function(){
            var id = this.id || this.value;
            //为artDialog的button选项扩展了addClass属性用来附加class,
            //这样比较好实现直接使用bootstrap不同样式的button
            if(buttons[id] && buttons[id].elem && this.addClass){
                $(buttons[id].elem).addClass(this.addClass);
            }
        });

        return this;
    }

    //直接把构造器劫持了,实例化了之后把bootstrap相应的class加上
     $.artDialog.prototype.constructor = function(config){

        originConstructor.apply(this,arguments);
        
        var dom = this.dom;

        //添加上bootstrap class
        $(dom['outer']).addClass('modal');
        $(dom['titleBar']).addClass('modal-header');
        //$(dom['main']).addClass('modal-body');
        $(dom['footer']).addClass('modal-footer');
        $(dom['close']).addClass('close'); 

        //交换title和close的位置
        $(dom['title']).appendTo($(dom['title']).parent()); 
        return this;
    }

    $.artDialog.prototype.constructor.prototype = $.artDialog.prototype; 

}(jQuery));