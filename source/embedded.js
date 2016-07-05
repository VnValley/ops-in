;(function (document, window) {

    'use strict';

    var resolveCurrentScript = function () {
        var scripts = document.getElementsByTagName("script");

        for (var i = 0; i < scripts.length; ++i) {
            if(scripts[i].getAttribute('src') == '/source/embedded.js'){
              return scripts[i];
            }
        }
    }

    var createStylingNode = function () {
        var stylingNode = document.createElement('link');

        stylingNode.rel = 'stylesheet';
        stylingNode.href= '/source/embedded.css';

        return stylingNode;
    };

    var createButton = function () {
        var button = document.createElement('button');

        button.setAttribute('data-widget-btn', '');
        button.innerText = 'Click for options';

        return button;
    };

    var createOpions = function () {
        var optionsElement = document.createElement('ul');

        optionsElement.setAttribute('data-widget-options', '');

        optionsElement.innerHTML =
            "<li><a target='_blank' href='/source/index.html'>Link 1</a></li>" +
            "<li><a target='_blank' href='/source/index.html'>Link 2</a></li>" +
            "<li><a target='_blank' href='/source/index.html'>Link 3</a></li>"
        ;

        return optionsElement;
    };

    var stylingNode = createStylingNode();
    var button      = createButton();
    var options     = createOpions();


    // Append Button event handling
    button.onclick = function () {
        options.className = options.className ? '' : 'show';
    };

    window.onload = function () {
        var target = resolveCurrentScript().getAttribute('data-id');
        var rootElement = document.getElementById(target);
        var wrapperElement = document.createElement('div');

        wrapperElement.appendChild(stylingNode);
        wrapperElement.setAttribute('data-widget-wrapper', '');

        wrapperElement.appendChild(button);
        wrapperElement.appendChild(options);

        rootElement.appendChild(wrapperElement);
    };
})(document, window);