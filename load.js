
(function (_0x182d32, _0x56092f) {
    var _0x4da8e4 = function (_0x378548) {
        while (--_0x378548) {
            _0x182d32['push'](_0x182d32['shift']());
        }
    };
    _0x4da8e4(++_0x56092f);
}
    (_0x2377, 0x17a));
var _0x3254 = function (_0x4f161a, _0x2cd6d3) {
    _0x4f161a = _0x4f161a - 0x0;
    var _0x2fac6d = _0x2377[_0x4f161a];
    return _0x2fac6d;
};
(function () {

    var debugMode, touchMode, locale, localeParameter, extjsVersion, proj4jsVersion, fontAwesomeVersion, olVersion, i, language, languages, languageDefault;

    function addStyleFile(file) {
        var link = document.createElement('link');

        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', file);
        document.head.appendChild(link);

    }
    function addScriptFile(file) {
        var script = document.createElement('script');
        script.setAttribute('src', file);
        script.async = false;
        document.head.appendChild(script);
    }
    function addSvgFile(file, id) {
        var svg = document.createElement('object');
        svg.setAttribute('id', id);
        svg.setAttribute('data', file);
        svg.setAttribute('type', 'image/svg+xml');
        svg.setAttribute('style', 'visibility:hidden;position:absolute;left:-100px;');
        document.body.appendChild(svg);
    }
    debugMode = document.getElementById('loadScript').getAttribute('mode') === 'debug';
    touchMode = 'ontouchstart' in window || navigator.maxTouchPoints;

    //comentario ver esse token
    window.updateNotificationToken = function (token) {
        Traccar.app.updateNotificationToken(token);
    };


    locale = {};
    window.Locale = locale;

    locale.languages = {
        'ar': { name: 'العربية', code: 'en' },
        'az': { name: 'Azərbaycanca', code: 'en' },
        'bg': { name: 'Български', code: 'bg' },
        'bn': { name: 'বাংলা', code: 'en' },
        'cs': { name: 'Čeština', code: 'cs' },
        'de': { name: 'Deutsch', code: 'de' },
        'da': { name: 'Dansk', code: 'da' },
        'el': { name: 'Ελληνικά', code: 'el' },
        'en': { name: 'English', code: 'en' },
        'es': { name: 'Español', code: 'es' },
        'fa': { name: 'فارسی', code: 'fa' },
        'fi': { name: 'Suomi', code: 'fi' },
        'fr': { name: 'Français', code: 'fr' },
        'he': { name: 'עברית', code: 'he' },
        'hi': { name: 'हिन्दी', code: 'en' },
        'hr': { name: 'Hrvatski', code: 'hr' },
        'hu': { name: 'Magyar', code: 'hu' },
        'id': { name: 'Bahasa Indonesia', code: 'id' },
        'it': { name: 'Italiano', code: 'it' },
        'ja': { name: '日本語', code: 'ja' },
        'ka': { name: 'ქართული', code: 'en' },
        'kk': { name: 'Қазақша', code: 'en' },
        'ko': { name: '한국어', code: 'ko' },
        'km': { name: 'ភាសាខ្មែរ', code: 'en' },
        'lo': { name: 'ລາວ', code: 'en' },
        'lt': { name: 'Lietuvių', code: 'lt' },
        'lv': { name: 'Latviešu', code: 'lv' },
        'ml': { name: 'മലയാളം', code: 'en' },
        'ms': { name: 'بهاس ملايو', code: 'en' },
        'nb': { name: 'Norsk bokmål', code: 'no_NB' },
        'ne': { name: 'नेपाली', code: 'en' },
        'nl': { name: 'Nederlands', code: 'nl' },
        'nn': { name: 'Norsk nynorsk', code: 'no_NN' },
        'pl': { name: 'Polski', code: 'pl' },
        'pt': { name: 'Português', code: 'pt' },
        'pt_BR': { name: 'Português (Brasil)', code: 'pt_BR' },
        'ro': { name: 'Română', code: 'ro' },
        'ru': { name: 'Русский', code: 'ru' },
        'si': { name: 'සිංහල', code: 'en' },
        'sk': { name: 'Slovenčina', code: 'sk' },
        'sl': { name: 'Slovenščina', code: 'sl' },
        'sq': { name: 'Shqipëria', code: 'en' },
        'sr': { name: 'Srpski', code: 'sr' },
        'sv': { name: 'Svenska', code: 'sv' },
        'ta': { name: 'தமிழ்', code: 'en' },
        'th': { name: 'ไทย', code: 'th' },
        'tr': { name: 'Türkçe', code: 'tr' },
        'uk': { name: 'Українська', code: 'ukr' },
        'uz': { name: 'Oʻzbekcha', code: 'en' },
        'vi': { name: 'Tiếng Việt', code: 'en' },
        'zh': { name: '中文', code: 'zh_CN' },
        'zh_TW': { name: '中文 (Taiwan)', code: 'zh_TW' }
    };

    languageDefault = 'en';
    localeParameter = window.location.search.match(/locale=([^&#]+)/);
    locale.language = localeParameter && localeParameter[1];
    if (!(locale.language in locale.languages)) {
        languages = window.navigator.languages !== undefined ? window.navigator.languages.slice() : [];
        language = window.navigator.userLanguage || window.navigator.language;
        languages.push(language);
        languages.push(language.substr(0, 2));
        languages.push(languageDefault);
        for (i = 0; i < languages.length; i++) {
            language = languages[i].replace('-', '_');
            if (language in locale.languages) {
                locale.language = language;
                break;
            }
        }
    }
    window.addEventListener('load', function (event) {

        if (debugMode) {
            Ext.Loader.setConfig({
                disableCaching: false
            });
        }
        Ext.Ajax.request({
            url: 'l10n/' + languageDefault + '.json',
            callback: function (options, success, response) {
                window.Strings = Ext.decode(response.responseText);
                if (Locale.language !== languageDefault) {
                    Ext.Ajax.request({
                        url: 'l10n/' + Locale.language + '.json',
                        callback: function (options, success, response) {
                            var key, data = Ext.decode(response.responseText);
                            for (key in data) {
                                if (data.hasOwnProperty(key)) {
                                    window.Strings[key] = data[key];
                                }
                            }
                            addScriptFile(debugMode ? 'app.js' : 'app.min.js');
                        }
                    });
                } else {
                    addScriptFile(debugMode ? 'app.js' : 'app.min.js');
                }
            }
        });
    });
      // Hack for new versions of Android
      if (navigator.userAgent.indexOf('Android') !== -1 && navigator.userAgent.indexOf('OPR') !== -1) {
        var __originalUserAgent = navigator.userAgent;
        navigator.__defineGetter__('userAgent', function () { return __originalUserAgent.replace(/\/OPR[^)]*/g, ''); });
    }

    extjsVersion = '6.2.0';
    fontAwesomeVersion = '5.2.0';
    olVersion = '4.6.5';
    proj4jsVersion = '2.4.4';

    if (debugMode) {
        addScriptFile('//cdnjs.cloudflare.com/ajax/libs/extjs/' + extjsVersion + '/ext-all-debug.js');
        addScriptFile('//cdnjs.cloudflare.com/ajax/libs/extjs/' + extjsVersion + '/packages/charts/classic/charts-debug.js');
    } else {
        //addScriptFile('//cdnjs.cloudflare.com/ajax/libs/extjs/' + extjsVersion + '/ext-all.js');
        //addScriptFile('//cdnjs.cloudflare.com/ajax/libs/extjs/' + extjsVersion + '/packages/charts/classic/charts.js');
        addScriptFile('config/library/js/ext-all.js');
        addScriptFile('config/library/js/charts.js');
    }


    addScriptFile('//cdnjs.cloudflare.com/ajax/libs/extjs/' + extjsVersion + '/classic/locale/locale-' + locale.languages[locale.language].code + '.js');

    //addStyleFile('//cdnjs.cloudflare.com/ajax/libs/extjs/' + extjsVersion + '/classic/theme-triton/resources/theme-triton-all.css');
    //addScriptFile('//cdnjs.cloudflare.com/ajax/libs/extjs/' + extjsVersion + '/classic/theme-triton/theme-triton.js');
    //addStyleFile('//cdnjs.cloudflare.com/ajax/libs/extjs/' + extjsVersion + '/packages/charts/classic/triton/resources/charts-all.css');

    addStyleFile('config/library/css/theme-triton-all.css');
    addScriptFile('config/library/js/theme-triton.js');
    addStyleFile('config/library/css/charts-all.css');
    addStyleFile('config/library/css/all.css');

    addStyleFile('//cdnjs.cloudflare.com/ajax/libs/ol3/' + olVersion + '/ol.css');
    if (debugMode) {
        addScriptFile('//cdnjs.cloudflare.com/ajax/libs/ol3/' + olVersion + '/ol-debug.js');
    } else {
        addScriptFile('//cdnjs.cloudflare.com/ajax/libs/ol3/' + olVersion + '/ol.js');
    }

    if (debugMode) {
        addScriptFile('//cdnjs.cloudflare.com/ajax/libs/proj4js/' + proj4jsVersion + '/proj4-src.js');
    } else {
        addScriptFile('//cdnjs.cloudflare.com/ajax/libs/proj4js/' + proj4jsVersion + '/proj4.js');
    }


   
    //conferir essa linha aqui
    
    addStyleFile('config/library/css/ol-geocoder.min.css');
    addStyleFile('config/library/css/ol-popup.css');
    //addScriptFile('//cdn.rawgit.com/walkermatt/ol-popup/494a42c0/dist/ol-popup.js');
    addScriptFile('config/js/ol-popup/ol-popup.js');
    //addScriptFile('//cdn.rawgit.com/jonataswalker/ol-geocoder/54b23aea/dist/ol-geocoder.js');
    addScriptFile('config/js/ol-geocoder.js');
    addScriptFile('config/layerswitcher/src/ol3-layerswitcher.js');
    addScriptFile('//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js');

    //ate aqui 

    window.Images = ['arrow', 'default', 'animal', 'bicycle', 'boat', 'bus', 'car', 'crane', 'helicopter', 'motorcycle',
        'offroad', 'person', 'pickup', 'plane', 'ship', 'tractor', 'train', 'tram', 'trolleybus', 'truck', 'van'];

    for (i = 0; i < window.Images.length; i++) {
        addSvgFile('images/' + window.Images[i] + '.svg', window.Images[i] + 'Svg');
    }
})();
