function resendValidation(uid, utype, email) {
	$.ajax({
		url: '/ajax/resend-validation.php',
		type: 'POST',
		data: { id: uid, type: utype }
	}).done(function(){
		$('#give--identification--error').html('An activation email has been sent to you at <strong>'+email+'</strong> from <a href="mailto:support@mogiv.com">support@mogiv.com</a>.<br><br>To activate your Mogiv account, please click on the link found in the  email. If you don&#8217;t see the email in your inbox, please check your spam folder.</span>');
	});

	session.renew();
}

var callbacks = {
	gift: function () {
		$('.give--gift').on('validated', function() {
			if(! giverLogged) {
				give.stepTo('identification', callbacks.identification);
			} else {
				give.stepTo('funding', callbacks.funding);
			}
		});
	},

	identification: function() {
		$('.give--identification').on('validated', function() {
			give.stepTo('funding', callbacks.funding);
		});
	},

	funding: function() {
		var stepToComplete = function () {
			give.stepTo('complete', null);
		}
		$('.give--funding_new').on('validated', stepToComplete);
		$('.give--funding_select').on('validated', stepToComplete);
	}
};

function Give() {
	this.dialogHelper = {};

	var _this = this;
	var _first = true;
	var divider = '<div class="give--divider form--clear"><hr></div>';
	var backHandler;

	var createLogout = function (_wrap) {
		var wrap = _wrap || false;
		var a = $(document.createElement('a'));
		a.text('Logout');
		a.attr('href', window.location.href+'&redirect=false&clear');
		a.addClass('gift--confirm--edit');
		var b = $(document.createElement('div'));
		b.addClass('gift--confirm--block clearfix');
		b.append(a);

		if(wrap) {
			return b;
		} else {
			return a;
		}
	}

	this.init = function() {
		$('#give').html('<div class=\"gift--confirm\" id=\"gift--confirm\" style=\"display:none;\"></div>');

		if (giverLogged && window.location.search.indexOf('frameless=1') > -1 && window.location.search.indexOf('giverDashboard=1') === -1) {
			var logout = createLogout(true);
			$('#gift--confirm').append(logout).addClass('gift--confirm-frameless').show();
		}

		if(Modernizr.history) {
			window.history.replaceState(null, null, window.location.href.replace('&redirect=false&clear','')); // clears logout GET variables

			window.addEventListener('popstate', function(e) {
				if(e.state !== null) {
					if(e.state.action === 'back') {
						_this.back();
						window.history.pushState(null, null, null);
					}
				}
			});
		}


        _this.stepTo('gift', callbacks.gift);
	}

	this.stepTo = function(_url, _callback) {
		var _this = this;

		$.ajax({
			url: '/give/'+_url+'.php',
			data: window.location.search.replace('?','') + '&process=1'
		}).done(function(data) {
			if($('.give--divider').length < 1 && window.location.search.indexOf('frameless=1') === -1) {
				$('#give').prepend(divider);
			}
			$('#give').append(data);
			if(! _first) {
				session.resetTimer();
			}
			_this.reFocus();
			if(_callback !== null) {
				_callback();
			}
		});
	};
	
	this.reloadComplete = function() {
		var _this = this;
		// reloads complete.php to start over the 'pick up the tab' process
		var complete = $('#give--complete');
		var amount = _this.getConfirmationAmount();
		if(amount.data('amount') != undefined) {
			amount.html(amount.data('amount'));
		}
		if(complete.length > 0) {
			$.ajax({
				url: '/give/complete.php',
				data: window.location.search.replace('?','') + '&process=1',
				beforeSend: function() {
					complete.html(''); //already hidden, but will flash back while AJAX request is completing
				}
			}).done(function(data) {
				complete.before(data).remove();
			});
		}
	};
	
	this.reloadFunding = function() {
		var _this = this;
		// reloads complete.php to start over the 'pick up the tab' process
		var funding = $('.give--funding_new,.give--funding_select');
		var confirm = $('.gift--confirm--block-funding_select,.gift--confirm--block-funding_new');
		var complete = $('#give--complete');
		if(funding.length > 0) {
			$.ajax({
				url: '/give/funding.php',
				data: window.location.search.replace('?','') + '&process=1',
				beforeSend: function() {
					complete.html(''); // complete will be reloaded evntually, remove its current HTML for now
					funding.html(''); //already hidden, but will flash back while AJAX request is completing
				}
			}).done(function(data) {
				funding.before(data).remove();
				confirm.remove();
				complete.remove();
				callbacks.funding();
			});
		}
	};

	this.addConfirmation = function(_pairs, _edit) {
		var _this = this;
		var block = $(document.createElement('div'));
		block.addClass('gift--confirm--block');

		for (var i=0; i < _pairs.length; i++) {
			block.append('<div class="gift--confirm--pair"><strong>'+_pairs[i].label+':&nbsp;&nbsp;</strong><span>'+_pairs[i].value+'</span></div>');
		}

		$('#gift--confirm').show().append(block);

		if ((typeof _edit === 'object') && (pledgeCode == null)) {
			var edit = _edit;
			var target = $(document.createElement('a'));
			target.text('Edit');
			target.attr('href', '');
			target.addClass('gift--confirm--edit');

			var editHandler = function() {
				$('.give--complete--error').hide(); // breaks the illusion that a gift has been retried when editing a module
				$(edit).removeClass('is-confirmed');
				$(edit).addClass('is-editing');
				$('#give').addClass('is-editing');
				//block.next().remove(); // replaces $(this), a little hacky (relies heavily on DOM structure), but it works
				block.remove();
				_this.reFocus();
				return false;
			};

			target.on('click', editHandler);
			backHandler = editHandler;

			if(Modernizr.history) {
				window.history.replaceState({action: 'back'}, null, null);
				window.history.pushState(null, null, null);
			}

			if($(edit).hasClass('give--gift')) {
				block.addClass('gift--confirm--block-gift');
				_this.reloadFunding();
			}
			
			if($(edit).hasClass('give--funding_new')) {
				block.addClass('gift--confirm--block-funding_new');
			}

			if($(edit).hasClass('give--funding_select')) {
				block.addClass('gift--confirm--block-funding_select');
				_this.reloadComplete();
			}

			if($(edit).hasClass('give--identification')) {
				block.addClass('gift--confirm--block-identification');
			}

			target.prependTo(block);

		} else if (_edit === 'logout') {

			var target = createLogout();
			target.prependTo(block);
			$('.site_quicknav a[href="/login.php"]').parent().remove();

		}

	};

	this.ajaxHelper = function(_this, _done) {
		
		var btn = $(_this).find('input[type="submit"]');
		btn.prop('disabled', true);
		
		var fail = function() {
			$('p.is-error').remove();
			var buttons = $(_this)[0].lastElementChild;
			$(buttons).before('<p class="is-error">The Mogiv web server has encountered a fatal error.<br>Please <a href="#reload" style="color:inherit" onclick="location.reload()">refresh the page</a> to try your gift again or email us at <a style="color:inherit" href="mailto:support@mogiv.com">support@mogiv.com</a>.</p>');
		};
		
		$.ajax({
			url: $(_this).attr('action'),
			type: $(_this).attr('method'),
			data: $(_this).serialize(),
			beforeSend: processing.begin
		}).done(_done).fail(fail).always(function() {
			btn.prop('disabled', false);
			processing.end();
		});

	};
	
	this.getConfirmationAmount = function() {
		// this works, but is too heavy on DOM tree, should update confirmation loop to support IDs
		return $('.gift--confirm--block-gift .gift--confirm--pair').find('strong:contains("Amount")').siblings('span');
		
	};

	this.reFocus = function () {
		// find out where the top of the confirmation box is, if we're scrolled below it and this isn't the initial page load, move back up
		if(! _first) {
			var confTop = $("#gift--confirm").offset().top - 16;
			if($(document).scrollTop() - confTop > 0) {
				$('html, body').animate({
					scrollTop: confTop
				}, 500);
			}
			if(iframeHost && Modernizr.postmessage) {
				parent.postMessage('Mogiv.ModuleChange', iframeHost);
			}
		} else {
			_first = false;
		}
		var toFocus = $('#give').find('form').last();
		if(toFocus.is(':visible')) {
			toFocus.focus();
		}
	};

	this.back = function() {
		if(typeof backHandler !== 'undefined') {
			backHandler();
		} else {
			history.go(-2);
		}
	};

	this.setupToggle = function() {

		$('.radio_toggle').find('input[type="radio"]').on('change', function() {
			$(this).parents('.radio_toggle').siblings('.radio_toggle--child').hide().find('input').prop('novalidate', true);
			$(this).parents('.radio_toggle').siblings('.'+$(this).data('reveal')).show().find('input').prop('novalidate', false);
		});

	};
}

function RegisterGuest() {
	var element;
	var _this = this;

	this.init = function() {
		element = $('.give--register').first();
	};

	this.submission = function() {

		if(element[0].tagName === 'DIV') {
			var submission = element.parents('form').serialize();
		} else {
			var submission = element.serialize();
		}

		$.ajax({
			url: element.attr('action'),
			type: element.attr('method'),
			data: submission,
			beforeSend: processing.begin
		}).done(function(data) {
			processing.end();
			if(data.result === 'ok') {
				$(_this).trigger('success');
				element.html('<p class="is-confirmation">'+data.message+'</p>');
			} else {
				element.find('.is-error').remove();
				element.append('<p class="is-error">'+data.message+'</p>');
			}
		});
	};
}

function Session() {
	var _this = this;
	var warning = 540000;
	var warning_timer;

	var warn = function() {
		var result = confirm('Your session is about to expire. Would you like to continue?');

		if(result) {
			$.ajax('/give/session.php', {dataType: 'json'}).done(function(data) {
				if(data.count > 0) {
					_this.resetTimer();
				} else {
					alert('Your session has expired.');
					window.location.reload();
				}
			});
		} else {
			window.location.assign(window.location.href + '&clear&redirect=false');
		}

	}

	this.resetTimer = function () {
		clearTimeout(warning_timer);
		warning_timer = setTimeout(warn, warning);
	}

	this.renew = function() {
		$.ajax('session.php');
		_this.resetTimer();
	}
}

var give = new Give();
if (giveProcess) give.init();
var registerGuest = new RegisterGuest();
var session = new Session();