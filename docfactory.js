angular.module('ngDocfactory', []).directive('ngDocfactory', function ($sce) {
    console.log("Fired docfactory!");

    var getCodeRGB = function (code) {
        if(!angular.isObject(code)) return false;
        if (!/^\d+[,|]\d+[,|]\d+$/.test(code.rgb)) {
            code.rgb = "0,0,0";
        }
        return code.rgb;
    };

    return {
        scope: {
            code: '=scannableCode'
        },
        getCodeRGB: getCodeRGB,
        //template: '<h3>EUREKA! {{code.codeType}}</h3>',
        template: '<img id="{{code.elementId}}" src="//com-uchechilaka-docfactory.appspot.com/?size={{code.size}}&type={{code.codeType}}&rgb={{code.rgb}}&data={{code.content}}" class="{{code.class}}" />',
    };
});
