// ProPhoto3 build #817
// do not edit this file, it is created by the theme, any edits will be lost

/* SWFObject v2.2 */ var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

var is_ipad = ( navigator.platform == "iPad" );
var is_iphone = ( navigator.platform == "iPhone" );
var isTouchDevice = ( "ontouchstart" in document.documentElement );

jQuery(document).ready(function(){

	// general functions
	p3_image_protection();
	p3_embed_flash_galleries();
	p3_lightbox_gallery();
	
	p3_handle_contact_form();
	
	p3_click_hidden_bio();

	// menu functions
	p3_format_nav_menu();
	
	p3_align_menu_center();

	// comment functions
	
	
	
	

	// widgets
	p3_widgets();
	

	// misc
	jQuery('.post:last').addClass('last-post');
	jQuery('a.no-link').click(function(){return false;});
	
	
	
});



function p3_embed_flash_galleries() {
	var debug_gal = ( /debug_gallery=1/.test( window.location.href ) ) ? true : false;
	jQuery('.p3-flash-gallery').each(function(){
		var id = jQuery(this).attr('id').replace('p3-flash-gallery-', '');
		var modtime    = jQuery('span.modtime', this).text();
		var gal_height = jQuery('span.gal_height', this).text();
		var gal_width  = jQuery('span.gal_width', this).text();
		var img_height = jQuery('span.img_height', this).text();
		var img_width  = jQuery('span.img_width', this).text();
		var is_popup   = ( jQuery('body').hasClass('gallery-popup') ) ? 'true' : 'false';
		var flashvars  = {
			globalSettings: 'http://daybreakasia.org/isec/wp-content/uploads/p3/static/gallery.txt?32006',
			localSettings: 'http://daybreakasia.org/isec/wp-content/uploads/p3/gallery/'+id+'_settings.txt?'+modtime,
			galleryHeight: gal_height,
			galleryWidth: gal_width,
			mainImageHeight: img_height,
			mainImageWidth: img_width,
			isPopup: is_popup,
			debug: debug_gal
		};
		swfobject.embedSWF(
			'http://daybreakasia.org/isec/wp-content/themes/prophoto3/flash/gallery.swf?build=817', 
			'p3-flash-gallery-'+id, 
			parseInt(gal_width), 
			parseInt(gal_height), 
			'9', 
			'http://daybreakasia.org/isec/wp-content/themes/prophoto3/flash/expressinstall.swf', 
			flashvars,
			{ allowfullscreen: true, wmode: 'transparent' }
		);
	});
}

function p3_widgets() {
	
	
}

	function p3_click_hidden_bio() {
		jQuery('a#hidden-bio').click(function(){
			 
			jQuery('#bio').slideToggle(350,function(){
				jQuery('#bio-inner-wrapper').css('display', 'block' );
				jQuery('#bio-content').css('display', 'block' );
				jQuery('#bio-widget-spanning-col, #bio-widget-col-wrap, .bio-col').css('display', 'block' );
				
			});
		});	
	}

	function p3_nav_menu_opacity() {	
		if (!jQuery.browser.msie) {	
			jQuery('#topnav li ul').css('opacity', 0.100);
		}
	}

function p3_format_nav_menu() {

	// remove tooltips
	jQuery('#topnav li ul a').attr('title','');
	
	// add arrow to dropdown with nested menu
	jQuery('#topnav li ul li:has(ul)').each(function(){
		var link = jQuery(this).children('a');
		var linktext = link.html();
		link.html(linktext+' &raquo;');
	});
	// add underline to parent while child is being viewed
	jQuery('#topnav li ul li ul').hover(function(){
		jQuery(this).parent().children('a').css('text-decoration','underline');
	},function(){
		jQuery(this).parent().children('a').css('text-decoration','none');
	});

	// handle iPad and iPhone
	if ( isTouchDevice ) {
		var touchstart_timeout = false;
		jQuery('#topnav li:has(ul)').bind('touchstart',function(event){
			clearTimeout(touchstart_timeout);
			var touched_link = jQuery(this);
			if (touched_link.hasClass('sfhover')) {
				event.stopPropagation();
				return true;
			}
			jQuery('#topnav li').removeClass('sfhover');
			touched_link.addClass('sfhover');
			touchstart_timeout = setTimeout(function(){
				touched_link.removeClass('sfhover');
			},6000);
			return false;
		});
		jQuery(document).bind('touchstart', function(){
			if ( jQuery('#topnav li.sfhover').length ) {
				jQuery('#topnav li').removeClass('sfhover');
			}
		});
	}
}

function p3_lightbox_gallery() {
	jQuery('.p3-lightbox-gallery').each(function(){
		jQuery('a', this).p3LightBox();
	});
	jQuery('.p3-lightbox-gallery-thumbs img').css('opacity', 0.65).hover(function(){
		jQuery(this).stop().animate({opacity:1},200);
	}, function(){
		jQuery(this).stop().animate({opacity:0.65},200);
	});
}

	var p3_form_error = false;
	function p3_validate_contact_form() {
		jQuery('#contactform input[type=text], #contactform textarea').blur(function(){
			if (!jQuery('#contactform').hasClass('submitted')) return false;
			this_field_error = false;
			var field = jQuery(this);
			if ( !field.parents('div.p3-field').hasClass('p3-required-field') ) return;
			if ( field.val() == '' || ( field.attr('id') == 'email' && !field.val().match(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) ) ) {
				this_field_error = p3_form_error = true;
			}
			if ( this_field_error ) field.parents('div.p3-field').addClass('p3-has-error');
			else field.parents('div.p3-field').removeClass('p3-has-error');
		});
		jQuery('#contactform').submit(function(){
			jQuery(this).addClass('submitted');
			p3_form_error = false;
			jQuery('#contactform input[type=text], #contactform textarea').blur();
			if ( p3_form_error ) return false;
		});
	}

	function p3_handle_contact_form() {
		p3_validate_contact_form();
		jQuery('#p3-nav-contact').click(function(){
			p3_toggle_contactform(500);
		});	
		var hash = window.location.hash.substr(1);
		if ( hash === 'contact-form' ) {
			p3_toggle_contactform(0);
		}
		if ( hash === 'error' ) {
			jQuery("#p3-contact-error")
				.css('display', 'block')
				.animate({opacity: 1.0}, 3500, function(){p3_toggle_contactform(300)})
				.fadeTo(500, 0)
				.slideUp(300)
				.html('<p>Error submitting form, please try again.</p>');
		}
		if ( hash === 'success' ) {
			jQuery("#p3-contact-success")
				.css('display', 'block')
				.animate({opacity: 1.0}, 3500)
				.fadeTo(500, 0)
				.slideUp(300)
				.html('<p>Form submitted successfully, thank you.</p>');
		}
		jQuery('a[href*=#contact-form]').click(function(){
			if (jQuery("#contact-form form").size() == 0 ) {
				p3_toggle_contactform();
			} else {
				jQuery('#contact-form').slideDown(500);
			}
		});
	}

		function p3_toggle_contactform(delay) {
			if (delay == undefined) delay = 500;
			p3_start_throb(jQuery('#p3-nav-contact'));
			jQuery('#contact-form').load('http://daybreakasia.org/isec/wp-content/themes/prophoto3/includes/contact-form.php?ajax=1', function(){
				if ( jQuery('#contact-form .p3-html-twitter-widget').length ) {
					p3_twitter_widgets_get_tweets( '#contact-form ' );
					
				}
				p3_stop_throb();
				jQuery('#contact-form').slideToggle(delay);
				p3_contactform_loaded = true;
				jQuery('#referpage').val(window.location); // update hidden field location with page URL
				jQuery('#p3-nav-contact').unbind('click').click(function(){
					jQuery('#contact-form').slideToggle(500);
				});
				p3_validate_contact_form();
				jQuery('html,body').animate({scrollTop:jQuery('#header').height() + 26},1000);
			});
		}

function p3_start_throb( throb ) {
	if (window.p3_throbbing) window.clearInterval(p3_throbbing);
	window.p3_throbbing = setInterval(function(){
		throb.fadeTo(200, .5,  function(){
			throb.fadeTo(200, 1)
		});
	}, 400);
}

function p3_stop_throb() {
	window.clearInterval(p3_throbbing);
}

function p3_align_menu_center() {
	nav = jQuery('#topnav');
	var nav_li_margin_right = parseFloat(jQuery('#topnav li').css('margin-right'));
	var nav_centering_amount = ( nav.parent().width() - ( nav.width() - nav_li_margin_right ) ) / 2;
	nav.css('margin-left', nav_centering_amount+'px').css('padding-left', 0);
}

	function p3_image_protection() {
		jQuery('.entry-content img')
			.not('.exclude, .thumbnail, .attachment-thumbnail')
			.add('.p3-lightbox-gallery-thumbs img').each( function(){
				jQuery(this).bind('contextmenu', function(){return false;});
			});
	}
var p3_lightbox_info = {
	img_loading      : 'http://daybreakasia.org/isec/wp-content/themes/prophoto3/images/lightbox-ico-loading.gif',
	img_btn_prev     : 'http://daybreakasia.org/isec/wp-content/themes/prophoto3/images/lightbox-btn-prev.gif',
	img_btn_next     : 'http://daybreakasia.org/isec/wp-content/themes/prophoto3/images/lightbox-btn-next.gif',
	img_btn_close    : 'http://daybreakasia.org/isec/wp-content/themes/prophoto3/images/lightbox-btn-close.gif',
	img_blank        : 'http://daybreakasia.org/isec/wp-content/themes/prophoto3/images/lightbox-blank.gif',
	img_fadespeed    : 400,
	border_width     : '10',
	resize_speed     : 400,
	fixed_navigation : false,
	btns_opacity     : 0.65,
	btn_fadespeed    : 200,
	overlay_color    : '#000000',
	overlay_opacity  : 0.8,
	translate_image  : 'Image',
	translate_of     : 'of'
};
(function($) {
	var p3 = p3_lightbox_info;
    $.fn.p3LightBox = function(settings) {
        settings = jQuery.extend({
            overlayBgColor: p3.overlay_color,
            overlayOpacity: p3.overlay_opacity,
            fixedNavigation: p3.fixed_navigation,
            imageLoading: p3.img_loading,
            imageBtnPrev: p3.img_btn_prev,
            imageBtnNext: p3.img_btn_next,
            imageBtnClose: p3.img_btn_close,
            imageBlank: p3.img_blank,
            containerBorderSize: p3.border_width,
            containerResizeSpeed: p3.resize_speed,
            txtImage: p3.translate_image,
            txtOf: p3.translate_of,
            keyToClose: 'c',
            keyToPrev: 'p',
            keyToNext: 'n',
            imageArray: [],
            activeImage: 0
        },
        settings);
        var jQueryMatchedObj = this;

        function _initialize() {
            _start(this, jQueryMatchedObj);
            return false;
        }

        function _start(objClicked, jQueryMatchedObj) {
            $('embed, object, select').css({
                'visibility': 'hidden'
            });
            _set_interface();
            settings.imageArray.length = 0;
            settings.activeImage = 0;
			var href, actual_title, use_title;
            if (jQueryMatchedObj.length == 1) {
				href = objClicked.getAttribute('href');
				actual_title = objClicked.getAttribute('title');
				use_title = ( href.indexOf(actual_title) != -1 ) ? '' : actual_title;
                settings.imageArray.push(new Array(href, use_title));
            } else {
                for (var i = 0; i < jQueryMatchedObj.length; i++) {
					href = jQueryMatchedObj[i].getAttribute('href');
					actual_title = jQueryMatchedObj[i].getAttribute('title');
					use_title = ( href.indexOf(actual_title) != -1 ) ? '' : actual_title;
                    settings.imageArray.push(new Array(href, use_title));
                }
            }
            while (settings.imageArray[settings.activeImage][0] != objClicked.getAttribute('href')) {
                settings.activeImage++;
            }
            _set_image_to_view();
        }

        function _set_interface() {
            $('body').append('<div id="jquery-overlay"></div><div id="jquery-lightbox"><div id="lightbox-container-image-box"><div id="lightbox-container-image"><div id="lb-img-wrap"><img id="lightbox-image"></div><div style="" id="lightbox-nav"><a href="#" id="lightbox-nav-btnPrev"></a><a href="#" id="lightbox-nav-btnNext"></a></div><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="' + settings.imageLoading + '"></a></div></div></div><div id="lightbox-container-image-data-box" style="display:none"><div id="lightbox-container-image-data"><div id="lightbox-image-details"><span id="lightbox-image-details-caption"></span><span id="lightbox-image-details-currentNumber"></span></div><div id="lightbox-secNav"><a href="#" id="lightbox-secNav-btnClose"><img src="' + settings.imageBtnClose + '"></a></div></div></div></div>');
            var arrPageSizes = ___getPageSize();
            $('#jquery-overlay').css({
                backgroundColor: settings.overlayBgColor,
                opacity: settings.overlayOpacity,
                width: arrPageSizes[0],
                height: arrPageSizes[1]
            }).fadeIn();
            var arrPageScroll = ___getPageScroll();
            $('#jquery-lightbox').css({
                top: arrPageScroll[1] + 20,
                left: arrPageScroll[0]
            }).show();
            $('#jquery-overlay,#jquery-lightbox').click(function() {
                _finish();
            });
            $('#lightbox-loading-link,#lightbox-secNav-btnClose').click(function() {
                _finish();
                return false;
            });
            $(window).resize(function() {
                var arrPageSizes = ___getPageSize();
                $('#jquery-overlay').css({
                    width: arrPageSizes[0],
                    height: arrPageSizes[1]
                });
                var arrPageScroll = ___getPageScroll();
                $('#jquery-lightbox').css({
                    top: arrPageScroll[1] + (arrPageSizes[3] / 10),
                    left: arrPageScroll[0]
                });
            });
        }
        function _set_image_to_view() {
	
            if (settings.fixedNavigation || isTouchDevice ) {
                $('#lightbox-image').fadeTo(p3.img_fadespeed, 0,
                function() {
					if (window.attachEvent) $('#lb-img-wrap').removeClass('loaded');
                    $('#lightbox-container-image-data-box,#lightbox-image-details-currentNumber').hide();
					$('#lightbox-nav-btnPrev, #lightbox-nav-btnNext').show();
					if ( settings.activeImage == 0 ) $('#lightbox-nav-btnPrev').hide();
					if (settings.activeImage == (settings.imageArray.length - 1)) $('#lightbox-nav-btnNext').hide();
                    $('#lightbox-loading').show();
                    var objImagePreloader = new Image();
                    objImagePreloader.onload = function() {
                        $('#lightbox-image').attr('src', settings.imageArray[settings.activeImage][0]);
                        _resize_container_image_box(objImagePreloader.width, objImagePreloader.height);
                        objImagePreloader.onload = function() {};
                    };
                    objImagePreloader.src = settings.imageArray[settings.activeImage][0];
                });
            } else {
                $('#lightbox-image').fadeTo(p3.img_fadespeed, 0,
                function() {
                    $('#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber').hide();
					if (window.attachEvent) $('#lb-img-wrap').removeClass('loaded');
					$('#lightbox-loading').show();
                    var objImagePreloader = new Image();
                    objImagePreloader.onload = function() {
                        $('#lightbox-image').attr('src', settings.imageArray[settings.activeImage][0]);
                        _resize_container_image_box(objImagePreloader.width, objImagePreloader.height);
                        objImagePreloader.onload = function() {};
                    };
                    objImagePreloader.src = settings.imageArray[settings.activeImage][0];
                });
            }

        };

        function _resize_container_image_box(intImageWidth, intImageHeight) {
            var intCurrentWidth = $('#lightbox-container-image-box').width();
            var intCurrentHeight = $('#lightbox-container-image-box').height();
            var intWidth = (intImageWidth + (settings.containerBorderSize * 2));
            var intHeight = (intImageHeight + (settings.containerBorderSize * 2));
            var intDiffW = intCurrentWidth - intWidth;
            var intDiffH = intCurrentHeight - intHeight;
            $('#lightbox-container-image-box').animate({
                width: intWidth,
                height: intHeight
            },
            settings.containerResizeSpeed,
            function() {
                _show_image();
            });
            if ((intDiffW == 0) && (intDiffH == 0)) {
                if ($.browser.msie) {
                    ___pause(250);
                } else {
                    ___pause(100);
                }
            }
            $('#lightbox-container-image-data-box').css({
                width: intImageWidth
            });
            $('#lightbox-nav-btnPrev,#lightbox-nav-btnNext').css({
                height: intImageHeight + (settings.containerBorderSize * 2)
            });
        };
        function _show_image() {
            $('#lightbox-loading').hide();
			if (window.attachEvent) $('#lb-img-wrap').addClass('loaded');
            $('#lightbox-image').fadeTo(p3.img_fadespeed, 1,
            function() {
                _show_image_data();
                _set_navigation();
            });
            _preload_neighbor_images();
        };
        function _show_image_data() {
            $('#lightbox-container-image-data-box').fadeIn(500);
            $('#lightbox-image-details-caption').hide();
            if (settings.imageArray[settings.activeImage][1]) {
                $('#lightbox-image-details-caption').html(settings.imageArray[settings.activeImage][1]).show();
            }
            if (settings.imageArray.length > 1) {
                $('#lightbox-image-details-currentNumber').html(settings.txtImage + ' ' + (settings.activeImage + 1) + ' ' + settings.txtOf + ' ' + settings.imageArray.length).show();
            }
        }
        function _set_navigation() {
			$('#lightbox-nav').show();
            $('#lightbox-nav-btnPrev,#lightbox-nav-btnNext').css({
                'background': 'transparent url(' + settings.imageBlank + ') no-repeat'
            });
            if (settings.activeImage != 0) {
                if (settings.fixedNavigation || isTouchDevice ) {
                    $('#lightbox-nav-btnPrev').css({
                        'background': 'url(' + settings.imageBtnPrev + ') left 15% no-repeat',
                        'opacity': p3.btns_opacity
                    })
                    .unbind()
                    .bind('click',
                    function() {
                        settings.activeImage = settings.activeImage - 1;
                        _set_image_to_view();
                        return false;
                    });
                } else {
                    $('#lightbox-nav-btnPrev').unbind().hover(function() {
                        $(this).css({
                            'background': 'url(' + settings.imageBtnPrev + ') left 15% no-repeat',
                            'opacity': 0
                        }).fadeTo(p3.btn_fadespeed, p3.btns_opacity);
                    },
                    function() {
                        $(this).fadeTo(p3.btn_fadespeed, 0,
                        function() {
                            $(this).css({
                                'background': 'transparent url(' + settings.imageBlank + ') no-repeat'
                            });
                        });
                    }).show().bind('click',
                    function() {
                        settings.activeImage = settings.activeImage - 1;
                        _set_image_to_view();
                        return false;
                    });
                }
            } else {
				jQuery('#lightbox-nav-btnPrev').unbind().hide();
			}

            if (settings.activeImage != (settings.imageArray.length - 1)) {
                if (settings.fixedNavigation || isTouchDevice ) {
                    $('#lightbox-nav-btnNext').css({
                        'background': 'url(' + settings.imageBtnNext + ') right 15% no-repeat',
                        'opacity': p3.btns_opacity
                    })
                    .unbind()
                    .bind('click',
                    function() {
                        settings.activeImage = settings.activeImage + 1;
                        _set_image_to_view();
                        return false;
                    });
                } else {
                    $('#lightbox-nav-btnNext').unbind().hover(function() {
                        $(this).css({
                            'background': 'url(' + settings.imageBtnNext + ') right 15% no-repeat',
                            'opacity': 0
                        }).fadeTo(p3.btn_fadespeed, p3.btns_opacity);
                    },
                    function() {
                        $(this).fadeTo(p3.btn_fadespeed, 0,
                        function() {
                            $(this).css({
                                'background': 'transparent url(' + settings.imageBlank + ') no-repeat'
                            });
                        });
                    }).show().bind('click',
                    function() {
                        settings.activeImage = settings.activeImage + 1;
                        _set_image_to_view();
                        return false;
                    });
                }
            } else {
				jQuery('#lightbox-nav-btnNext').unbind().hide();
			}
            _enable_keyboard_navigation();
        }
        function _enable_keyboard_navigation() {
            $(document).keydown(function(objEvent) {
                _keyboard_action(objEvent);
            });
        }
        function _disable_keyboard_navigation() {
            $(document).unbind();
        }
        function _keyboard_action(objEvent) {
            if (objEvent == null) {
                keycode = event.keyCode;
                escapeKey = 27;
            } else {
                keycode = objEvent.keyCode;
                escapeKey = objEvent.DOM_VK_ESCAPE;
            }
            key = String.fromCharCode(keycode).toLowerCase();
            if ((key == settings.keyToClose) || (key == 'x') || (keycode == escapeKey)) {
                _finish();
            }
            if ((key == settings.keyToPrev) || (keycode == 37)) {
                if (settings.activeImage != 0) {
                    settings.activeImage = settings.activeImage - 1;
                    _set_image_to_view();
                    _disable_keyboard_navigation();
                }
            }
            if ((key == settings.keyToNext) || (keycode == 39)) {
                if (settings.activeImage != (settings.imageArray.length - 1)) {
                    settings.activeImage = settings.activeImage + 1;
                    _set_image_to_view();
                    _disable_keyboard_navigation();
                }
            }
        }

        function _preload_neighbor_images() {
            if ((settings.imageArray.length - 1) > settings.activeImage) {
                objNext = new Image();
                objNext.src = settings.imageArray[settings.activeImage + 1][0];
            }
            if (settings.activeImage > 0) {
                objPrev = new Image();
                objPrev.src = settings.imageArray[settings.activeImage - 1][0];
            }
        }

        function _finish() {
			_disable_keyboard_navigation();
            $('#jquery-lightbox').remove();
            $('#jquery-overlay').fadeOut(function() {
                $('#jquery-overlay').remove();
            });
            $('embed, object, select').css({
                'visibility': 'visible'
            });
        }

        function ___getPageSize() {
            var xScroll,
            yScroll;
            if (window.innerHeight && window.scrollMaxY) {
                xScroll = window.innerWidth + window.scrollMaxX;
                yScroll = window.innerHeight + window.scrollMaxY;
            } else if (document.body.scrollHeight > document.body.offsetHeight) {
                xScroll = document.body.scrollWidth;
                yScroll = document.body.scrollHeight;
            } else {
                xScroll = document.body.offsetWidth;
                yScroll = document.body.offsetHeight;
            }
            var windowWidth,
            windowHeight;
            if (self.innerHeight) {
                if (document.documentElement.clientWidth) {
                    windowWidth = document.documentElement.clientWidth;
                } else {
                    windowWidth = self.innerWidth;
                }
                windowHeight = self.innerHeight;
            } else if (document.documentElement && document.documentElement.clientHeight) {
                windowWidth = document.documentElement.clientWidth;
                windowHeight = document.documentElement.clientHeight;
            } else if (document.body) {
                windowWidth = document.body.clientWidth;
                windowHeight = document.body.clientHeight;
            }
            if (yScroll < windowHeight) {
                pageHeight = windowHeight;
            } else {
                pageHeight = yScroll;
            }
            if (xScroll < windowWidth) {
                pageWidth = xScroll;
            } else {
                pageWidth = windowWidth;
            }
            arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight);
            return arrayPageSize;
        };

        function ___getPageScroll() {
            var xScroll,
            yScroll;
            if (self.pageYOffset) {
                yScroll = self.pageYOffset;
                xScroll = self.pageXOffset;
            } else if (document.documentElement && document.documentElement.scrollTop) {
                yScroll = document.documentElement.scrollTop;
                xScroll = document.documentElement.scrollLeft;
            } else if (document.body) {
                yScroll = document.body.scrollTop;
                xScroll = document.body.scrollLeft;
            }
            arrayPageScroll = new Array(xScroll, yScroll);
            return arrayPageScroll;
        };

        function ___pause(ms) {
            var date = new Date();
            curDate = null;
            do {
                var curDate = new Date();
            }
            while (curDate - date < ms);
        };
        return this.unbind('click').click(_initialize);
    };
})(jQuery);

/* user-js */
