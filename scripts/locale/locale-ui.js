define(["jquery","locale/locale","i18n!std_dict/nls/nouns","text!locale/locale_template.html","jq/jquery.tmpl","jquery-ui/jquery-ui.custom.min"],function(a,b,c,d){function j(){i(),g()}function i(){a.template(e,d)}function h(){return{language_settings_label:f.root.language_setting_pl,browser_language:b.getBrowserLanguage(),available_languages:b.getAvailableLanguages()}}function g(){var b=a("#locale");b.length&&(b.children().empty(),a.tmpl(e,h()).appendTo(b),b.children("h2").click(function(){b.children("ul").toggle()}))}var e="locale_template",f=c,k={};setTimeout(j,20);return k})