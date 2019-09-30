$('.hide').hide();
$('.disabled select').attr('disabled',true);

if($('#recurring-select option:selected').val() == 'custom'){
	period = $('#period-frequency option:selected').val();
	$('#recurring-period-description span').html('Every ' + $('input[name=rpc-frequency-' + period + ']').val() + ' ' + period + '(s). <a href="#" onclick="$(\'#recurring-period-custom\').fadeIn();return false;" class="give-small">Edit</a>');
	$('#recurring-period-description').show();
}

$('.frequency-option').hide();
$('#frequency-' + $('#period-frequency option:selected').val() + '-options').show();

if($('#frequency-month-on').is(':checked')){ $('#frequency-month-on-options select').removeAttr('disabled'); }
if($('#frequency-year-on').is(':checked')){ $('#frequency-year-on-options select').removeAttr('disabled'); }

if(!$('#frequency-month-on').is(':checked') && !$('#frequency-month-each').is(':checked')){ $('#frequency-month-each').attr('checked','checked'); }

if($('#recurring-select option:selected').val() != 'none'){ $('#recurring-type').show(); }

if($('#end-type option:selected').val() == 'date'){ $('#recurring-type-date').show(); }
else if($('#end-type option:selected').val() == 'count'){ $('#recurring-type-after').show(); }

$('#recurring-period-description label').html('Repeating:');
$('#recurring-period-description span').html('&hellip;');

$('#period-cancel').on('click',function(e){
	e.preventDefault();
	$('#recurring-period-custom').fadeOut();
	period = $('#period-frequency option:selected').val();
	$('#recurring-period-description span').html('Every ' + $('input[name=rpc-frequency-' + period + ']').val() + ' ' + period + '(s). <a href="#" onclick="$(\'#recurring-period-custom\').fadeIn();return false;" class="give-small">Edit</a>');
	$('#recurring-period-description').show();
});

var period = '';
$('#period-ok').on('click',function(e){
	e.preventDefault();
	$('#recurring-period-custom').fadeOut();
	period = $('#period-frequency option:selected').val();
	$('#recurring-period-description span').html('Every ' + $('input[name=rpc-frequency-' + period + ']').val() + ' ' + period + '(s). <a href="#" onclick="$(\'#recurring-period-custom\').fadeIn();return false;" class="give-small">Edit</a>');
	$('#recurring-period-description').show();
});

$('#recurring-select').on('change',function(){
	if($(this).val() != 'none'){ $('#recurring-type').show(); } else { $('#recurring-type').hide(); }
	if($(this).val() == 'custom'){
		$('#recurring-period-custom').fadeIn();
		if($('#recurring-period-description span').html() != ''){
			$('#recurring-period-description').show();
		}
	} else {
		$('#recurring-period-custom').hide();
		$('#recurring-period-description').hide();
	}
});

$('#recurring-type > select').on('change',function(){
	if($(this).val() == 'never'){
		$('#recurring-type-after').hide();
		$('#recurring-type-date').hide();
	} else if($(this).val() == 'date'){
		$('#recurring-type-after').hide();
		$('#recurring-type-date').show();
	} else {
		$('#recurring-type-date').hide();
		$('#recurring-type-after').show();
	}
});

$('#period-frequency').on('change',function(){
	$('.frequency-option').hide();
	$('#frequency-' + $(this).val() + '-options').show();
});

$('#frequency-month-options input[type=radio]').on('change',function(){
	if($('#frequency-month-on').is(':checked')){
		$('#frequency-month-on-options select').removeAttr('disabled');
		$('#f-m').addClass('inactive');
	} else {
		$('#frequency-month-on-options select').attr('disabled',true);
		$('#f-m').removeClass('inactive');
	}
});

$('#frequency-year-on').on('change',function(){
	if($(this).is(':checked')){
		$('#frequency-year-on-options select').removeAttr('disabled');
	} else {
		$('#frequency-year-on-options select').attr('disabled',true);
	}
});

$('#f-w td').each(function(idx){
	$(this).on('click',function(){
		if($('.rpc-f-w').eq(idx).is(':checked')){
			$(this).removeClass('selected');
			$('.rpc-f-w').eq(idx).attr('checked','');
		} else {
			$(this).addClass('selected');
			$('.rpc-f-w').eq(idx).attr('checked','checked');
		}
	});
});

$('#f-m td').each(function(idx){
	$(this).on('click',function(){
		if($('#frequency-month-each').is(':checked')){
			if($('.rpc-f-m').eq(idx).is(':checked')){
				$(this).removeClass('selected');
				$('.rpc-f-m').eq(idx).attr('checked','');
			} else {
				$(this).addClass('selected');
				$('.rpc-f-m').eq(idx).attr('checked','checked');
			}
		}
	});
});

$('#f-y td').each(function(idx){
	$(this).on('click',function(){
		if($('.rpc-f-y').eq(idx).is(':checked')){
			$(this).removeClass('selected');
			$('.rpc-f-y').eq(idx).attr('checked','');
		} else {
			$(this).addClass('selected');
			$('.rpc-f-y').eq(idx).attr('checked','checked');
		}
	});
});