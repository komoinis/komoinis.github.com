(function(){var a=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],b=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,c=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,d=typeof location!="undefined"&&location.href,e=[];define(function(){var f,g,h;typeof window!="undefined"&&window.navigator&&window.document?g=function(a,b){var c=f.createXhr();c.open("GET",a,!0),c.onreadystatechange=function(a){c.readyState===4&&b(c.responseText)},c.send(null)}:typeof process!="undefined"&&process.versions&&!!process.versions.node?(h=require.nodeRequire("fs"),g=function(a,b){b(h.readFileSync(a,"utf8"))}):typeof Packages!="undefined"&&(g=function(a,b){var c="utf-8",d=new java.io.File(a),e=java.lang.System.getProperty("line.separator"),f=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(d),c)),g,h,i="";try{g=new java.lang.StringBuffer,h=f.readLine(),h&&h.length()&&h.charAt(0)===65279&&(h=h.substring(1)),g.append(h);while((h=f.readLine())!==null)g.append(e),g.append(h);i=String(g.toString())}finally{f.close()}b(i)}),f={version:"0.25.0",strip:function(a){if(a){a=a.replace(b,"");var d=a.match(c);d&&(a=d[1])}else a="";return a},jsEscape:function(a){return a.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r")},createXhr:function(){var b,c,d;if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;for(c=0;c<3;c++){d=a[c];try{b=new ActiveXObject(d)}catch(e){}if(b){a=[d];break}}if(!b)throw new Error("createXhr(): XMLHttpRequest not available");return b},get:g,parseName:function(a){var b=!1,c=a.indexOf("."),d=a.substring(0,c),e=a.substring(c+1,a.length);c=e.indexOf("!"),c!==-1&&(b=e.substring(c+1,e.length),b=b==="strip",e=e.substring(0,c));return{moduleName:d,ext:e,strip:b}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,canUseXhr:function(a,b,c,d){var e=f.xdRegExp.exec(a),g,h,i;if(!e)return!0;g=e[2],h=e[3],h=h.split(":"),i=h[1],h=h[0];return(!g||g===b)&&(!h||h===c)&&(!i&&!h||i===d)},finishLoad:function(a,b,c,d,g){c=b?f.strip(c):c,g.isBuild&&g.inlineText&&(e[a]=c),d(c)},load:function(a,b,c,e){var g=f.parseName(a),h=g.moduleName+"."+g.ext,i=b.toUrl(h);!d||f.canUseXhr(i)?f.get(i,function(b){f.finishLoad(a,g.strip,b,c,e)}):b([h],function(a){f.finishLoad(g.moduleName+"."+g.ext,g.strip,a,c,e)})},write:function(a,b,c,d){if(b in e){var g=f.jsEscape(e[b]);c("define('"+a+"!"+b+"', function () { return '"+g+"';});\n")}},writeFile:function(a,b,c,d,e){var g=f.parseName(b),h=g.moduleName+"."+g.ext,i=c.toUrl(g.moduleName+"."+g.ext)+".js";f.load(h,c,function(b){f.write(a,h,function(a){d(i,a)},e)},e)}};return f})})()