$(function(){
    callbackSp();
    callbackNamed.init();
    Utils.write($('#scCallback'), '#scCallback-template');
    Utils.write($('#callbackNamed'), '#callbackNamed-template');
    Utils.write($('#promiseBasic'),'#promiseBasic-template');
    PromiseWithGenerator.init();
    Utils.write($('#promiseGenerator'),'#promiseGenerator-template');
    AsyncAwait.init();
    Utils.write($('#asyncAwait'),'#asyncAwait-template');
})
