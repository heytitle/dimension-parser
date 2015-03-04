/**
 * dimensionParser.js v0.0.2
 */
var dimensionParser=function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){function d(a,b,c){var d=i(a).match(new RegExp(b,"gi")).last().match(new RegExp(b,"i"));return d.toBoolean()?d.toObject(c):null}function e(a){var b=i(a).match(/(\d+)\/(\d+)/).toObject("numerator","denominator");return b.numerator&&b.denominator?b.numerator/b.denominator:0}function f(a){return-1!==k.indexOf(a)?j[a]:0}function g(a){return f(a)||e(a)}var h=c(2),i=c(1),j={"¼":.25,"½":.5,"¾":.75,"⅛":1/8,"⅜":3/8,"⅝":5/8,"⅞":7/8,"⅓":1/3,"⅔":2/3,"⅕":.2,"⅖":.4,"⅗":.6,"⅘":.8,"⅙":1/6,"⅚":5/6},k=Object.keys(j),l=["in","cm","mm","ft"],m=[{match:"([0-9][0-9\\.]*)(?:\\s*([0-9][0-9\\/]*|"+k.join("|")+"))?\\s*x\\s*([0-9][0-9\\.]*)(?:\\s*([0-9][0-9\\/]*|"+k.join("|")+"))?(?:\\s*x\\s*([0-9][0-9\\.]*)(?:\\s*([0-9][0-9\\/]*|"+k.join("|")+"))?)?\\s*("+l.join("|")+")\\.?",props:["width","width_remainder","height","height_remainder","length","length_remainder","type"]}];a.exports=function(a,b){for(var c,e=0;e<m.length&&!(c=d(a,m[e].match,m[e].props));e++);if(c&&(c.width&&(c.width=parseFloat(c.width)),c.height&&(c.height=parseFloat(c.height)),c.length&&(c.length=parseFloat(c.length)),c.width_remainder&&(c.width=c.width+g(c.width_remainder)),c.height_remainder&&(c.height=c.height+g(c.height_remainder)),c.length_remainder&&(c.length=c.length+g(c.length_remainder)),c.type=String(c.type).toLowerCase(),c.width=new h(c.width+" "+c.type).to(b).scalar,c.height=new h(c.height+" "+c.type).to(b).scalar,c.length&&(c.length=new h(c.length+" "+c.type).to(b).scalar)),c){var f={width:c.width.toFixed(2),height:c.height.toFixed(2)};return c.length&&(f.length=c.length.toFixed(2)),f}return null}},function(a,b,c){var d=c(3);a.exports=function(a){return new d(a)}},function(a){!function(b,c){"use strict";a.exports=c()}(this,function(){"use strict";function a(b){if(C(b),!A(this))return new a(b);if(this.scalar=null,this.baseScalar=null,this.signature=null,this._conversionCache={},this.numerator=H,this.denominator=H,B(b)?(this.scalar=b.scalar,this.numerator=b.numerator&&0!==b.numerator.length?b.numerator:H,this.denominator=b.denominator&&0!==b.denominator.length?b.denominator:H):_.call(this,b),this.denominator.join("*").indexOf("temp")>=0)throw new D("Cannot divide with temperatures");if(this.numerator.join("*").indexOf("temp")>=0){if(this.numerator.length>1)throw new D("Cannot multiply by temperatures");if(!j(this.denominator,H))throw new D("Cannot divide with temperatures")}if(this.initValue=b,Y.call(this),this.isTemperature()&&this.baseScalar<0)throw new D("Temperatures must not be less than absolute zero")}function b(a,b){return(a+" "+b).trim()}function c(){throw new D("Incompatible units")}function d(b,c){for(var d,e=[],f=[],g=1,h=0;h<b.length;h++)d=b[h],db[d]?g=t(g,db[d]):fb[d]&&(g*=fb[d].scalar,fb[d].numerator&&e.push(fb[d].numerator),fb[d].denominator&&f.push(fb[d].denominator));for(var i=0;i<c.length;i++)d=c[i],db[d]?g/=db[d]:fb[d]&&(g/=fb[d].scalar,fb[d].numerator&&f.push(fb[d].numerator),fb[d].denominator&&e.push(fb[d].denominator));return e=e.reduce(function(a,b){return a.concat(b)},[]),f=f.reduce(function(a,b){return a.concat(b)},[]),a({scalar:g,numerator:e,denominator:f})}function e(a){var b=ab[a];if(b)return b;var c,d=[];if(!rb.test(a))throw new D("Unit not recognized");for(;c=qb.exec(a);)d.push(c.slice(1));return d=d.map(function(a){return eb[a[0]]?[eb[a[0]],gb[a[1]]]:[gb[a[1]]]}),d=d.reduce(function(a,b){return a.concat(b)},[]),d=d.filter(function(a){return a}),ab[a]=d,d}function f(){}function g(a){var b=bb.get(a);if(b)return b;var c=j(a,H);return b=c?"1":i(h(a)).join("*"),bb.set(a,b),b}function h(a){for(var b,c,d=[],e=0;e<a.length;e++)b=a[e],c=a[e+1],db[b]?(d.push(hb[b]+hb[c]),e++):d.push(hb[b]);return d}function i(a){var b=a.reduce(function(a,b){var c=a[b];return c||a.push(c=a[b]=[b,0]),c[1]++,a},[]);return b.map(function(a){return a[0]+(a[1]>1?a[1]:"")})}function j(a,b){if(b.length!==a.length)return!1;for(var c=0;c<a.length;c++){if(b[c].compareArray&&!b[c].compareArray(a[c]))return!1;if(b[c]!==a[c])return!1}return!0}function k(a,b){return Math.round(a*Math.pow(10,b))/Math.pow(10,b)}function l(b,c){var d=b.units(),e=c.to(d),f=a(o(d));return a({scalar:b.scalar-e.scalar,numerator:f.numerator,denominator:f.denominator})}function m(b,c){var d=c.to(o(b.units()));return a({scalar:b.scalar-d.scalar,numerator:b.numerator,denominator:b.denominator})}function n(b,c){var d=c.to(o(b.units()));return a({scalar:b.scalar+d.scalar,numerator:b.numerator,denominator:b.denominator})}function o(a){if("tempK"===a)return"degK";if("tempC"===a)return"degC";if("tempF"===a)return"degF";if("tempR"===a)return"degR";throw new D("Unknown type for temp conversion from: "+a)}function p(b,c){var d,e=q(b),f=c.units();if("degK"===f)d=e.scalar;else if("degC"===f)d=e.scalar;else if("degF"===f)d=9*e.scalar/5;else{if("degR"!==f)throw new D("Unknown type for degree conversion to: "+f);d=9*e.scalar/5}return a({scalar:d,numerator:c.numerator,denominator:c.denominator})}function q(b){var c,d=b.units();if(d.match(/(deg)[CFRK]/))c=b.baseScalar;else if("tempK"===d)c=b.scalar;else if("tempC"===d)c=b.scalar;else if("tempF"===d)c=5*b.scalar/9;else{if("tempR"!==d)throw new D("Unknown type for temp conversion from: "+d);c=5*b.scalar/9}return a({scalar:c,numerator:["<kelvin>"],denominator:H})}function r(b,c){var d,e=c.units();if("tempK"===e)d=b.baseScalar;else if("tempC"===e)d=b.baseScalar-273.15;else if("tempF"===e)d=9*b.baseScalar/5-459.67;else{if("tempR"!==e)throw new D("Unknown type for temp conversion to: "+e);d=9*b.baseScalar/5}return a({scalar:d,numerator:c.numerator,denominator:c.denominator})}function s(b){var c,d=b.units();if(d.match(/(deg)[CFRK]/))c=b.baseScalar;else if("tempK"===d)c=b.scalar;else if("tempC"===d)c=b.scalar+273.15;else if("tempF"===d)c=5*(b.scalar+459.67)/9;else{if("tempR"!==d)throw new D("Unknown type for temp conversion from: "+d);c=5*b.scalar/9}return a({scalar:c,numerator:["<temp-K>"],denominator:H})}function t(){for(var a=1,b=0,c=0;c<arguments.length;c++){var d=arguments[c];b+=v(d),a*=d}return 0!==b?k(a,b):a}function u(a,b){if(0===b)throw new D("Divide by zero");var c=Math.pow(10,v(b)),d=c/(c*b);return t(a,d)}function v(a){if(!cb(a))return 0;for(var b=0;a%1!==0;)a*=10,b++;return b}function w(a,b){a=a.filter(function(a){return a!==G}),b=b.filter(function(a){return a!==G});for(var c,d={},e=0;e<a.length;e++)db[a[e]]?(c=[a[e],a[e+1]],e++):c=a[e],c&&c!==G&&(d[c]?d[c][0]++:d[c]=[1,c]);for(var f=0;f<b.length;f++)db[b[f]]?(c=[b[f],b[f+1]],f++):c=b[f],c&&c!==G&&(d[c]?d[c][0]--:d[c]=[-1,c]);a=[],b=[];for(var g in d)if(d.hasOwnProperty(g)){var h,i=d[g];if(i[0]>0)for(h=0;h<i[0];h++)a.push(i[1]);else if(i[0]<0)for(h=0;h<-i[0];h++)b.push(i[1])}return 0===a.length&&(a=H),0===b.length&&(b=H),a=a.reduce(function(a,b){return a.concat(b)},[]),b=b.reduce(function(a,b){return a.concat(b)},[]),[a,b]}function x(a){return a}function y(a){return"string"==typeof a||a instanceof String}function z(a){return cb(a)}function A(b){return b instanceof a}function B(a){return a&&"object"==typeof a&&a.hasOwnProperty("scalar")}function C(a){if(!(y(a)||z(a)||A(a)||B(a)))throw new D("Only strings, numbers or quantities accepted as initialization values")}function D(){var a;return this?(a=Error.apply(this,arguments),this.name="QtyError",this.message=a.message,void(this.stack=a.stack)):(a=Object.create(D.prototype),D.apply(a,arguments),a)}var E={"<googol>":[["googol"],1e100,"prefix"],"<kibi>":[["Ki","Kibi","kibi"],Math.pow(2,10),"prefix"],"<mebi>":[["Mi","Mebi","mebi"],Math.pow(2,20),"prefix"],"<gibi>":[["Gi","Gibi","gibi"],Math.pow(2,30),"prefix"],"<tebi>":[["Ti","Tebi","tebi"],Math.pow(2,40),"prefix"],"<pebi>":[["Pi","Pebi","pebi"],Math.pow(2,50),"prefix"],"<exi>":[["Ei","Exi","exi"],Math.pow(2,60),"prefix"],"<zebi>":[["Zi","Zebi","zebi"],Math.pow(2,70),"prefix"],"<yebi>":[["Yi","Yebi","yebi"],Math.pow(2,80),"prefix"],"<yotta>":[["Y","Yotta","yotta"],1e24,"prefix"],"<zetta>":[["Z","Zetta","zetta"],1e21,"prefix"],"<exa>":[["E","Exa","exa"],1e18,"prefix"],"<peta>":[["P","Peta","peta"],1e15,"prefix"],"<tera>":[["T","Tera","tera"],1e12,"prefix"],"<giga>":[["G","Giga","giga"],1e9,"prefix"],"<mega>":[["M","Mega","mega"],1e6,"prefix"],"<kilo>":[["k","kilo"],1e3,"prefix"],"<hecto>":[["h","Hecto","hecto"],100,"prefix"],"<deca>":[["da","Deca","deca","deka"],10,"prefix"],"<deci>":[["d","Deci","deci"],.1,"prefix"],"<centi>":[["c","Centi","centi"],.01,"prefix"],"<milli>":[["m","Milli","milli"],.001,"prefix"],"<micro>":[["u","μ","µ","Micro","mc","micro"],1e-6,"prefix"],"<nano>":[["n","Nano","nano"],1e-9,"prefix"],"<pico>":[["p","Pico","pico"],1e-12,"prefix"],"<femto>":[["f","Femto","femto"],1e-15,"prefix"],"<atto>":[["a","Atto","atto"],1e-18,"prefix"],"<zepto>":[["z","Zepto","zepto"],1e-21,"prefix"],"<yocto>":[["y","Yocto","yocto"],1e-24,"prefix"],"<1>":[["1","<1>"],1,""],"<meter>":[["m","meter","meters","metre","metres"],1,"length",["<meter>"]],"<inch>":[["in","inch","inches",'"'],.0254,"length",["<meter>"]],"<foot>":[["ft","foot","feet","'"],.3048,"length",["<meter>"]],"<yard>":[["yd","yard","yards"],.9144,"length",["<meter>"]],"<mile>":[["mi","mile","miles"],1609.344,"length",["<meter>"]],"<naut-mile>":[["nmi"],1852,"length",["<meter>"]],"<league>":[["league","leagues"],4828,"length",["<meter>"]],"<furlong>":[["furlong","furlongs"],201.2,"length",["<meter>"]],"<rod>":[["rd","rod","rods"],5.029,"length",["<meter>"]],"<mil>":[["mil","mils"],254e-7,"length",["<meter>"]],"<angstrom>":[["ang","angstrom","angstroms"],1e-10,"length",["<meter>"]],"<fathom>":[["fathom","fathoms"],1.829,"length",["<meter>"]],"<pica>":[["pica","picas"],.00423333333,"length",["<meter>"]],"<point>":[["pt","point","points"],.000352777778,"length",["<meter>"]],"<redshift>":[["z","red-shift"],1.302773e26,"length",["<meter>"]],"<AU>":[["AU","astronomical-unit"],1495979e5,"length",["<meter>"]],"<light-second>":[["ls","light-second"],299792500,"length",["<meter>"]],"<light-minute>":[["lmin","light-minute"],1798755e4,"length",["<meter>"]],"<light-year>":[["ly","light-year"],9460528e9,"length",["<meter>"]],"<parsec>":[["pc","parsec","parsecs"],3085678e10,"length",["<meter>"]],"<kilogram>":[["kg","kilogram","kilograms"],1,"mass",["<kilogram>"]],"<AMU>":[["u","AMU","amu"],6.0221415e26,"mass",["<kilogram>"]],"<dalton>":[["Da","Dalton","Daltons","dalton","daltons"],6.0221415e26,"mass",["<kilogram>"]],"<slug>":[["slug","slugs"],14.5939029,"mass",["<kilogram>"]],"<short-ton>":[["tn","ton"],907.18474,"mass",["<kilogram>"]],"<metric-ton>":[["tonne"],1e3,"mass",["<kilogram>"]],"<carat>":[["ct","carat","carats"],2e-4,"mass",["<kilogram>"]],"<pound>":[["lbs","lb","pound","pounds","#"],.45359237,"mass",["<kilogram>"]],"<ounce>":[["oz","ounce","ounces"],.0283495231,"mass",["<kilogram>"]],"<gram>":[["g","gram","grams","gramme","grammes"],.001,"mass",["<kilogram>"]],"<grain>":[["grain","grains","gr"],6479891e-11,"mass",["<kilogram>"]],"<dram>":[["dram","drams","dr"],.0017718452,"mass",["<kilogram>"]],"<stone>":[["stone","stones","st"],6.35029318,"mass",["<kilogram>"]],"<hectare>":[["hectare"],1e4,"area",["<meter>","<meter>"]],"<acre>":[["acre","acres"],4046.85642,"area",["<meter>","<meter>"]],"<sqft>":[["sqft"],1,"area",["<feet>","<feet>"]],"<liter>":[["l","L","liter","liters","litre","litres"],.001,"volume",["<meter>","<meter>","<meter>"]],"<gallon>":[["gal","gallon","gallons"],.0037854118,"volume",["<meter>","<meter>","<meter>"]],"<quart>":[["qt","quart","quarts"],.00094635295,"volume",["<meter>","<meter>","<meter>"]],"<pint>":[["pt","pint","pints"],.000473176475,"volume",["<meter>","<meter>","<meter>"]],"<cup>":[["cu","cup","cups"],.000236588238,"volume",["<meter>","<meter>","<meter>"]],"<fluid-ounce>":[["floz","fluid-ounce","fluid-ounces"],295735297e-13,"volume",["<meter>","<meter>","<meter>"]],"<tablespoon>":[["tbs","tablespoon","tablespoons"],147867648e-13,"volume",["<meter>","<meter>","<meter>"]],"<teaspoon>":[["tsp","teaspoon","teaspoons"],492892161e-14,"volume",["<meter>","<meter>","<meter>"]],"<bushel>":[["bu","bsh","bushel","bushels"],.035239072,"volume",["<meter>","<meter>","<meter>"]],"<kph>":[["kph"],.277777778,"speed",["<meter>"],["<second>"]],"<mph>":[["mph"],.44704,"speed",["<meter>"],["<second>"]],"<knot>":[["kt","kn","kts","knot","knots"],.514444444,"speed",["<meter>"],["<second>"]],"<fps>":[["fps"],.3048,"speed",["<meter>"],["<second>"]],"<gee>":[["gee"],9.80665,"acceleration",["<meter>"],["<second>","<second>"]],"<kelvin>":[["degK","kelvin"],1,"temperature",["<kelvin>"]],"<celsius>":[["degC","celsius","celsius","centigrade"],1,"temperature",["<kelvin>"]],"<fahrenheit>":[["degF","fahrenheit"],5/9,"temperature",["<kelvin>"]],"<rankine>":[["degR","rankine"],5/9,"temperature",["<kelvin>"]],"<temp-K>":[["tempK"],1,"temperature",["<temp-K>"]],"<temp-C>":[["tempC"],1,"temperature",["<temp-K>"]],"<temp-F>":[["tempF"],5/9,"temperature",["<temp-K>"]],"<temp-R>":[["tempR"],5/9,"temperature",["<temp-K>"]],"<second>":[["s","sec","secs","second","seconds"],1,"time",["<second>"]],"<minute>":[["min","mins","minute","minutes"],60,"time",["<second>"]],"<hour>":[["h","hr","hrs","hour","hours"],3600,"time",["<second>"]],"<day>":[["d","day","days"],86400,"time",["<second>"]],"<week>":[["wk","week","weeks"],604800,"time",["<second>"]],"<fortnight>":[["fortnight","fortnights"],1209600,"time",["<second>"]],"<year>":[["y","yr","year","years","annum"],31556926,"time",["<second>"]],"<decade>":[["decade","decades"],315569260,"time",["<second>"]],"<century>":[["century","centuries"],3155692600,"time",["<second>"]],"<pascal>":[["Pa","pascal","Pascal"],1,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<bar>":[["bar","bars"],1e5,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<mmHg>":[["mmHg"],133.322368,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<inHg>":[["inHg"],3386.3881472,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<torr>":[["torr"],133.322368,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<atm>":[["atm","ATM","atmosphere","atmospheres"],101325,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<psi>":[["psi"],6894.76,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<cmh2o>":[["cmH2O"],98.0638,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<inh2o>":[["inH2O"],249.082052,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<poise>":[["P","poise"],.1,"viscosity",["<kilogram>"],["<meter>","<second>"]],"<stokes>":[["St","stokes"],1e-4,"viscosity",["<meter>","<meter>"],["<second>"]],"<mole>":[["mol","mole"],1,"substance",["<mole>"]],"<molar>":[["M","molar"],1e3,"concentration",["<mole>"],["<meter>","<meter>","<meter>"]],"<wtpercent>":[["wt%","wtpercent"],10,"concentration",["<kilogram>"],["<meter>","<meter>","<meter>"]],"<katal>":[["kat","katal","Katal"],1,"activity",["<mole>"],["<second>"]],"<unit>":[["U","enzUnit"],1.6667e-15,"activity",["<mole>"],["<second>"]],"<farad>":[["F","farad","Farad"],1,"capacitance",["<farad>"]],"<coulomb>":[["C","coulomb","Coulomb"],1,"charge",["<ampere>","<second>"]],"<ampere>":[["A","Ampere","ampere","amp","amps"],1,"current",["<ampere>"]],"<siemens>":[["S","Siemens","siemens"],1,"conductance",["<second>","<second>","<second>","<ampere>","<ampere>"],["<kilogram>","<meter>","<meter>"]],"<henry>":[["H","Henry","henry"],1,"inductance",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<ampere>","<ampere>"]],"<volt>":[["V","Volt","volt","volts"],1,"potential",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<second>","<ampere>"]],"<ohm>":[["Ohm","ohm","Ω","Ω"],1,"resistance",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<second>","<ampere>","<ampere>"]],"<weber>":[["Wb","weber","webers"],1,"magnetism",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<ampere>"]],"<tesla>":[["T","tesla","teslas"],1,"magnetism",["<kilogram>"],["<second>","<second>","<ampere>"]],"<gauss>":[["G","gauss"],1e-4,"magnetism",["<kilogram>"],["<second>","<second>","<ampere>"]],"<maxwell>":[["Mx","maxwell","maxwells"],1e-8,"magnetism",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<ampere>"]],"<oersted>":[["Oe","oersted","oersteds"],250/Math.PI,"magnetism",["<ampere>"],["<meter>"]],"<joule>":[["J","joule","Joule","joules"],1,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<erg>":[["erg","ergs"],1e-7,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<btu>":[["BTU","btu","BTUs"],1055.056,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<calorie>":[["cal","calorie","calories"],4.184,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<Calorie>":[["Cal","Calorie","Calories"],4184,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<therm-US>":[["th","therm","therms","Therm"],105480400,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<newton>":[["N","Newton","newton"],1,"force",["<kilogram>","<meter>"],["<second>","<second>"]],"<dyne>":[["dyn","dyne"],1e-5,"force",["<kilogram>","<meter>"],["<second>","<second>"]],"<pound-force>":[["lbf","pound-force"],4.448222,"force",["<kilogram>","<meter>"],["<second>","<second>"]],"<hertz>":[["Hz","hertz","Hertz"],1,"frequency",["<1>"],["<second>"]],"<radian>":[["rad","radian","radians"],1,"angle",["<radian>"]],"<degree>":[["deg","degree","degrees"],Math.PI/180,"angle",["<radian>"]],"<gradian>":[["gon","grad","gradian","grads"],Math.PI/200,"angle",["<radian>"]],"<steradian>":[["sr","steradian","steradians"],1,"solid_angle",["<steradian>"]],"<rotation>":[["rotation"],2*Math.PI,"angle",["<radian>"]],"<rpm>":[["rpm"],2*Math.PI/60,"angular_velocity",["<radian>"],["<second>"]],"<byte>":[["B","byte"],1,"memory",["<byte>"]],"<bit>":[["b","bit"],.125,"memory",["<byte>"]],"<dollar>":[["USD","dollar"],1,"currency",["<dollar>"]],"<cents>":[["cents"],.01,"currency",["<dollar>"]],"<candela>":[["cd","candela"],1,"luminosity",["<candela>"]],"<lumen>":[["lm","lumen"],1,"luminous_power",["<candela>","<steradian>"]],"<lux>":[["lux"],1,"illuminance",["<candela>","<steradian>"],["<meter>","<meter>"]],"<watt>":[["W","watt","watts"],1,"power",["<kilogram>","<meter>","<meter>"],["<second>","<second>","<second>"]],"<horsepower>":[["hp","horsepower"],745.699872,"power",["<kilogram>","<meter>","<meter>"],["<second>","<second>","<second>"]],"<gray>":[["Gy","gray","grays"],1,"radiation",["<meter>","<meter>"],["<second>","<second>"]],"<roentgen>":[["R","roentgen"],.00933,"radiation",["<meter>","<meter>"],["<second>","<second>"]],"<sievert>":[["Sv","sievert","sieverts"],1,"radiation",["<meter>","<meter>"],["<second>","<second>"]],"<becquerel>":[["Bq","bequerel","bequerels"],1,"radiation",["<1>"],["<second>"]],"<curie>":[["Ci","curie","curies"],37e9,"radiation",["<1>"],["<second>"]],"<cpm>":[["cpm"],1/60,"rate",["<count>"],["<second>"]],"<dpm>":[["dpm"],1/60,"rate",["<count>"],["<second>"]],"<bpm>":[["bpm"],1/60,"rate",["<count>"],["<second>"]],"<dot>":[["dot","dots"],1,"resolution",["<each>"]],"<pixel>":[["pixel","px"],1,"resolution",["<each>"]],"<ppi>":[["ppi"],1,"resolution",["<pixel>"],["<inch>"]],"<dpi>":[["dpi"],1,"typography",["<dot>"],["<inch>"]],"<cell>":[["cells","cell"],1,"counting",["<each>"]],"<each>":[["each"],1,"counting",["<each>"]],"<count>":[["count"],1,"counting",["<each>"]],"<base-pair>":[["bp"],1,"counting",["<each>"]],"<nucleotide>":[["nt"],1,"counting",["<each>"]],"<molecule>":[["molecule","molecules"],1,"counting",["<1>"]],"<dozen>":[["doz","dz","dozen"],12,"prefix_only",["<each>"]],"<percent>":[["%","percent"],.01,"prefix_only",["<1>"]],"<ppm>":[["ppm"],1e-6,"prefix_only",["<1>"]],"<ppt>":[["ppt"],1e-9,"prefix_only",["<1>"]],"<gross>":[["gr","gross"],144,"prefix_only",["<dozen>","<dozen>"]],"<decibel>":[["dB","decibel","decibels"],1,"logarithmic",["<decibel>"]]},F=["<meter>","<kilogram>","<second>","<mole>","<farad>","<ampere>","<radian>","<kelvin>","<temp-K>","<byte>","<dollar>","<candela>","<each>","<steradian>","<decibel>"],G="<1>",H=[G],I="[+-]",J="\\d+",K=I+"?"+J,L="\\."+J,M="(?:"+J+"(?:"+L+")?)|(?:"+L+")",N="[Ee]"+K,O="(?:"+M+")(?:"+N+")?",P=I+"?\\s*"+O,Q="("+P+")?\\s*([^/]*)(?:/(.+))?",R=new RegExp("^"+Q+"$"),S="\\^|\\*{2}",T=new RegExp("([^ \\*]+?)(?:"+S+")?(-?\\d+)"),U=new RegExp("([^ \\*]+?)(?:"+S+")?(\\d+)"),V=["length","time","temperature","mass","current","substance","luminosity","currency","memory","angle","capacitance"],W={"-312058":"resistance","-312038":"inductance","-152040":"magnetism","-152038":"magnetism","-152058":"potential","-39":"acceleration","-38":"radiation","-20":"frequency","-19":"speed","-18":"viscosity",0:"unitless",1:"length",2:"area",3:"volume",20:"time",400:"temperature",7942:"power",7959:"pressure",7962:"energy",7979:"viscosity",7961:"force",7997:"mass_concentration",8000:"mass",159999:"magnetism",160000:"current",160020:"charge",312058:"conductance",3199980:"activity",3199997:"molar_concentration",3200000:"substance",63999998:"illuminance",64000000:"luminous_power",1280000000:"currency",25600000000:"memory",511999999980:"angular_velocity",512000000000:"angle",10240000000000:"capacitance"},X={};a.parse=function(b){if(!y(b))throw new D("Argument should be a string");try{return a(b)}catch(c){return null}},a.swiftConverter=function(b,c){var d=a(b),e=a(c);if(d.eq(e))return x;var f;return f=d.isTemperature()?function(a){return d.mul(a).to(e).scalar}:function(a){return a*d.baseScalar/e.baseScalar},function(a){var b,c,d;if(Array.isArray(a)){for(c=a.length,d=[],b=0;c>b;b++)d.push(f(a[b]));return d}return f(a)}},a.getKinds=function(){var a=Object.keys(W).map(function(a){return W[a]}).sort();return a},a.formatter=b;var Y=function(){if(this.baseScalar)return this.baseScalar;if(this.isBase())this.baseScalar=this.scalar,this.signature=Z.call(this);else{var a=this.toBase();this.baseScalar=a.scalar,this.signature=a.signature}},Z=function(){if(this.signature)return this.signature;for(var a=$.call(this),b=0;b<a.length;b++)a[b]*=Math.pow(20,b);return a.reduce(function(a,b){return a+b},0)},$=function(){if(!this.isBase())return $.call(this.toBase());for(var a=new Array(V.length),b=0;b<a.length;b++)a[b]=0;for(var c,d,e=0;e<this.numerator.length;e++)(c=E[this.numerator[e]])&&(d=V.indexOf(c[2]),d>=0&&(a[d]=a[d]+1));for(var f=0;f<this.denominator.length;f++)(c=E[this.denominator[f]])&&(d=V.indexOf(c[2]),d>=0&&(a[d]=a[d]-1));return a},_=function(a){if(y(a)||(a=a.toString()),a=a.trim(),0===a.length)throw new D("Unit not recognized");var b=R.exec(a);if(!b)throw new D(a+": Quantity not recognized");var c=b[1];c?(c=c.replace(/\s/g,""),this.scalar=parseFloat(c)):this.scalar=1;for(var d,f,g,h=b[2],i=b[3];b=T.exec(h);){if(d=parseFloat(b[2]),isNaN(d))throw new D("Unit exponent is not a number");if(0===d&&!rb.test(b[1]))throw new D("Unit not recognized");f=b[1]+" ",g="";for(var j=0;j<Math.abs(d);j++)g+=f;d>=0?h=h.replace(b[0],g):(i=i?i+g:g,h=h.replace(b[0],""))}for(;b=U.exec(i);){if(d=parseFloat(b[2]),isNaN(d))throw new D("Unit exponent is not a number");if(0===d&&!rb.test(b[1]))throw new D("Unit not recognized");f=b[1]+" ",g="";for(var k=0;d>k;k++)g+=f;i=i.replace(b[0],g,"g")}h&&(this.numerator=e(h.trim())),i&&(this.denominator=e(i.trim()))};a.prototype={constructor:a,toFloat:function(){if(this.isUnitless())return this.scalar;throw new D("Can't convert to Float unless unitless.  Use Unit#scalar")},isUnitless:function(){return j(this.numerator,H)&&j(this.denominator,H)},isCompatible:function(b){return y(b)?this.isCompatible(a(b)):A(b)&&void 0!==b.signature?this.signature===b.signature:!1},isInverse:function(a){return this.inverse().isCompatible(a)},kind:function(){return W[this.signature.toString()]},isBase:function(){return void 0!==this._isBase?this._isBase:this.isDegrees()&&this.numerator[0].match(/<(kelvin|temp-K)>/)?(this._isBase=!0,this._isBase):(this.numerator.concat(this.denominator).forEach(function(a){a!==G&&-1===F.indexOf(a)&&(this._isBase=!1)},this),this._isBase===!1?this._isBase:(this._isBase=!0,this._isBase))},toBase:function(){if(this.isBase())return this;if(this.isTemperature())return s(this);var a=X[this.units()];return a||(a=d(this.numerator,this.denominator),X[this.units()]=a),a.mul(this.scalar)},units:function(){if(void 0!==this._units)return this._units;var a=j(this.numerator,H),b=j(this.denominator,H);if(a&&b)return this._units="",this._units;var c=g(this.numerator),d=g(this.denominator);return this._units=c+(b?"":"/"+d),this._units},eq:function(a){return 0===this.compareTo(a)},lt:function(a){return-1===this.compareTo(a)},lte:function(a){return this.eq(a)||this.lt(a)},gt:function(a){return 1===this.compareTo(a)},gte:function(a){return this.eq(a)||this.gt(a)},toPrec:function(b){if(y(b)&&(b=a(b)),z(b)&&(b=a(b+" "+this.units())),this.isUnitless()?b.isUnitless()||c():b=b.to(this.units()),0===b.scalar)throw new D("Divide by zero");var d=t(Math.round(this.scalar/b.scalar),b.scalar);return a(d+this.units())},toString:function(a,b){var c;if(z(a))c=this.units(),b=a;else if(y(a))c=a;else if(A(a))return this.toPrec(a).toString(b);var d=this.to(c),e=void 0!==b?k(d.scalar,b):d.scalar;return d=(e+" "+d.units()).trim()},format:function(b,c){1===arguments.length&&"function"==typeof b&&(c=b,b=void 0),c=c||a.formatter;var d=this.to(b);return c.call(this,d.scalar,d.units())},compareTo:function(b){return y(b)?this.compareTo(a(b)):(this.isCompatible(b)||c(),this.baseScalar<b.baseScalar?-1:this.baseScalar===b.baseScalar?0:this.baseScalar>b.baseScalar?1:void 0)},same:function(a){return this.scalar===a.scalar&&this.units()===a.units()},inverse:function(){if(this.isTemperature())throw new D("Cannot divide with temperatures");if(0===this.scalar)throw new D("Divide by zero");return a({scalar:1/this.scalar,numerator:this.denominator,denominator:this.numerator})},isDegrees:function(){return(null===this.signature||400===this.signature)&&1===this.numerator.length&&j(this.denominator,H)&&(this.numerator[0].match(/<temp-[CFRK]>/)||this.numerator[0].match(/<(kelvin|celsius|rankine|fahrenheit)>/))},isTemperature:function(){return this.isDegrees()&&this.numerator[0].match(/<temp-[CFRK]>/)},to:function(b){var d,e;if(!b)return this;if(!y(b))return this.to(b.units());if(d=this._conversionCache[b])return d;if(e=a(b),e.units()===this.units())return this;if(this.isCompatible(e))if(e.isTemperature())e=r(this,e);else if(e.isDegrees())e=p(this,e);else{var f=u(this.baseScalar,e.baseScalar);e=a({scalar:f,numerator:e.numerator,denominator:e.denominator})}else this.isInverse(e)?e=this.inverse().to(b):c();return this._conversionCache[b]=e,e},add:function(b){if(y(b)&&(b=a(b)),this.isCompatible(b)||c(),this.isTemperature()&&b.isTemperature())throw new D("Cannot add two temperatures");return this.isTemperature()?n(this,b):b.isTemperature()?n(b,this):a({scalar:this.scalar+b.to(this).scalar,numerator:this.numerator,denominator:this.denominator})},sub:function(b){if(y(b)&&(b=a(b)),this.isCompatible(b)||c(),this.isTemperature()&&b.isTemperature())return l(this,b);if(this.isTemperature())return m(this,b);if(b.isTemperature())throw new D("Cannot subtract a temperature from a differential degree unit");return a({scalar:this.scalar-b.to(this).scalar,numerator:this.numerator,denominator:this.denominator})},mul:function(b){if(z(b))return a({scalar:t(this.scalar,b),numerator:this.numerator,denominator:this.denominator});if(y(b)&&(b=a(b)),(this.isTemperature()||b.isTemperature())&&!this.isUnitless()&&!b.isUnitless())throw new D("Cannot multiply by temperatures");var c=this,d=b;c.isCompatible(d)&&400!==c.signature&&(d=d.to(c));var e=w(c.numerator.concat(d.numerator),c.denominator.concat(d.denominator));return a({scalar:t(c.scalar,d.scalar),numerator:e[0],denominator:e[1]})},div:function(b){if(z(b)){if(0===b)throw new D("Divide by zero");return a({scalar:this.scalar/b,numerator:this.numerator,denominator:this.denominator})}if(y(b)&&(b=a(b)),0===b.scalar)throw new D("Divide by zero");if(b.isTemperature())throw new D("Cannot divide with temperatures");if(this.isTemperature()&&!b.isUnitless())throw new D("Cannot divide with temperatures");var c=this,d=b;c.isCompatible(d)&&400!==c.signature&&(d=d.to(c));var e=w(c.numerator.concat(d.denominator),c.denominator.concat(d.numerator));return a({scalar:c.scalar/d.scalar,numerator:e[0],denominator:e[1]})}};var ab={};f.prototype.get=function(a){return arguments.length>1&&(a=Array.apply(null,arguments)),a.reduce(function(b,c,d){if(b){var e=b[c];return d===a.length-1?e?e.data:void 0:e}},this)},f.prototype.set=function(a,b){return arguments.length>2&&(a=Array.prototype.slice.call(arguments,0,-1),b=arguments[arguments.length-1]),a.reduce(function(c,d,e){var f=c[d];return void 0===f&&(f=c[d]={}),e===a.length-1?(f.data=b,b):f},this)};var bb=new f;a.mulSafe=t,a.divSafe=u;var cb=Number.isFinite||window.isFinite,db={},eb={},fb={},gb={},hb={};for(var ib in E)if(E.hasOwnProperty(ib)){var jb=E[ib];if("prefix"===jb[2]){db[ib]=jb[1];for(var kb=0;kb<jb[0].length;kb++)eb[jb[0][kb]]=ib}else{fb[ib]={scalar:jb[1],numerator:jb[3],denominator:jb[4]};for(var lb=0;lb<jb[0].length;lb++)gb[jb[0][lb]]=ib}hb[ib]=jb[0][0]}var mb=Object.keys(eb).sort(function(a,b){return b.length-a.length}).join("|"),nb=Object.keys(gb).sort(function(a,b){return b.length-a.length}).join("|"),ob="\\b|$",pb="("+mb+")??("+nb+")(?:"+ob+")",qb=new RegExp(pb,"g"),rb=new RegExp("^\\s*("+pb+"\\s*\\*?\\s*)+$");return D.prototype=Object.create(Error.prototype,{constructor:{value:D}}),a.Error=D,a})},function(a,b,c){function d(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function e(a){return Array.prototype.slice.call(a)}function f(a){this._context=Array.isArray(a)?a.slice(0):a instanceof g?a.clone():a}var g=c(4);f.prototype={match:function(a){var b=new f(this._context),c=this._contextToString(b._context),d=c.match(a);return b._context=d?new g(d,a):"",b},item:function(a){var b=new f(this._context);return b._context instanceof g?b._context=b._context.item(a):Array.isArray(b._context)&&(b._context=b._context[a]||""),b},itemFromRight:function(a){var b=new f(this._context);if(b._context instanceof g||Array.isArray(b._context)){var c=b._context.length;a=c-1-a,a>=0&&(b=b.item(a))}return b},first:function(){var a=new f(this._context);return a.item(0)},last:function(){var a=new f(this._context);return a.itemFromRight(0)},replace:function(a,b){var c=new f(this._context);return c._context=Array.isArray(c._context)?c._context.map(function(c){return c.replace(a,b)}):this._contextToString(this._context).replace(a,b),c},join:function(a){var b=new f(this._context);return Array.isArray(b._context)&&(b._context=b._context.join(a||"")),b},map:function(a){var b=new f(this._context);return b._context=b.toArray().map(a),b},filter:function(a){var b=new f(this._context);return b._context=b.toArray().filter(a),b},remove:function(){var a=new f(this._context),b=a.toArray(),c=e(arguments);return b=b.map(function(a){return c.forEach(function(b){b="string"==typeof b?new RegExp(d(b),"g"):b,a=a.replace(b,"")}),a}),a._context=b,a},trim:function(){var a=new f(this._context),b=Array.isArray(a._context)?a._context:a.toArray(a._context);return a._context=b.map(function(a){return a.trim()}),a},split:function(a){var b=new f(this._context);return b._context=b._contextToString(b._context).split(a),b},slice:function(a,b){var c=new f(this._context);return(c._context instanceof g||Array.isArray(c._context))&&(c._context=c._context.slice(a,b)),c},toString:function(){return this._contextToString(this._context)},toArray:function(){return Array.isArray(this._context)?e(this._context):this._context instanceof g?this._context.toArray():this.toBoolean()?[this._context]:[]},toNumber:function(){return parseInt(this.toString(),10)},toBoolean:function(){return!!this.toString()},toObject:function(){var a=1===arguments.length&&Array.isArray(arguments[0])?arguments[0]:Array.prototype.slice.call(arguments,0),b=this.toArray(),c={};return a.length===b.length&&b.forEach(function(b,d){c[a[d]]=b}),c
},_contextToString:function(a){return"string"==typeof a?a:a instanceof g?a.toString():Array.isArray(a)?a.join(""):""}},a.exports=f},function(a){function b(a,b){return a?(this.match=b,this.matches=b instanceof RegExp&&!b.global&&b.length>1?a.slice(1):a,void(this.length=this.matches.length)):null}b.prototype={item:function(a){var b;return 1===this.matches.length?b=this.matches[0]:this.matches.length>1&&(b=this.matches[this.match.global?a:a+1]),b||""},slice:function(a,b){var c=[];return 1===this.matches.length||this.match.global?c=this.matches.slice(a,b):this.matches.length>1&&(c=this.matches.slice(a+1,b)),c},toArray:function(){var a=[];return 1===this.matches.length||this.match.global?a=this.matches.slice(0):this.matches.length>1&&(a=this.matches.slice(1)),a},toString:function(){var a="";return 1===this.matches.length?a=this.matches[0]:this.matches.forEach(function(b){b&&(a+=b)}),a},clone:function(){var a=new b(null);return a.match=this.match,a.matches=Array.prototype.slice.call(this.matches),a.length=this.length,a}},a.exports=b}]);