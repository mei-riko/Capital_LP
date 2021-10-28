function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
}
function checkInputValue( $input ){
	let name = $input.attr('name');
		
	switch (name) {
		case 'message':
			if( $input.val().length > 2 ){
				$input.removeClass('input--error').addClass('input--success');
			}else{
				$input.removeClass('input--success').addClass('input--error');
			}
			break;
		case 'mail':
			if( validateEmail($input.val()) &&  $input.val().length > 0 ){
				$input.removeClass('input--error').addClass('input--success');
			}else{
				$input.removeClass('input--success').addClass('input--error');
			}
			break;
		case 'name':
			if( $input.val().length > 2 ){
				$input.removeClass('input--error').addClass('input--success');
			}else{
				$input.removeClass('input--success').addClass('input--error');
			}
			break;
		default:
			break;
	};
}
function valid(val, elem, type) {
	var phone = false,
		name = false,
		email = false,
		$inputPhone = elem.closest('form').find('.input[type="tel"]'),
		$inputName = elem.closest('form').find('.input[name="name"]'),
		$inputEmail = elem.closest('form').find('.input[name="mail"]');
	
	if (typeof $inputPhone != 'undefined' && $inputPhone.length != 0) {
	  if ($inputPhone[0].inputmask.isComplete()) {
		phone = true;
		
		if (val == 'click') {
			$inputPhone.removeClass('input--error').addClass('input--success');
		}
	  } else {
		phone = false;

		if (val == 'click') {
			$inputPhone.removeClass('input--success').addClass('input--error');
		}
	  }
	}
	if (typeof $inputName != 'undefined' && $inputName.length != 0) {
	  if ( $inputName.val().length > 0 ) {
		name = true;
		
		if (val == 'click') {
			$inputName.removeClass('input--error').addClass('input--success');
		}
	  } else {
		name = false;

		if (val == 'click') {
			$inputName.removeClass('input--success').addClass('input--error');
		}
	  }
	}
	if (typeof $inputEmail != 'undefined' && $inputEmail.length != 0) {
	  if ( $inputEmail.val().length > 0 && validateEmail( $inputEmail.val() ) ) {
		email = true;
		
		if (val == 'click') {
			$inputEmail.removeClass('input--error').addClass('input--success');
		}
	  } else {
		email = false;

		if (val == 'click') {
			$inputEmail.removeClass('input--success').addClass('input--error');
		}
	  }
	}
	// Callback
	if (typeof $inputPhone != 'undefined' && $inputPhone.length != 0) {
		if ( phone ) {
			$('[btn-form]').addClass('btn--active');
		} else {
			$('[btn-form]').removeClass('btn--active');
		}

		if( type == 'phone' ){
			return phone;
		}else if (type == 'participate' ){
			return name && phone;
		}
	}
	// Subscribe
	if (typeof $inputEmail != 'undefined' && $inputEmail.length != 0) {
		if ( email ) {
			$('[btn-subscribe]').addClass('btn--active');
		} else {
			$('[btn-subscribe]').removeClass('btn--active');
		}

		if( type == 'email' ){
			return email;
		}else if (type == 'subscribe' ){
			return name && email;
		}
	}
}

$(document).ready(function(){
	$(document).on('click', '[btn-form]', function(event){
		let type = '',
			url = '';
		
		if ( $(this).closest('form').hasClass('form-callback-small') ){
			type = 'phone';
		}
		if ( $(this).closest('form').hasClass('form-callback') ){
			type = 'participate';
			url = $(this).data('href');
		}
		
		if (valid( 'click', $(this), type ) === true) {
			var form = $(this).closest('form')[0],
				formData = new FormData(form),
				action = $(form).attr('action'),
				$thanks = $(this).closest('.form-container').find('.form-thanks'),
				$intro = $(this).closest('.form-container').find('.form-intro');
				
				if(type == 'participate'){
					var name = $(form).find('.input[name="name"]').val();
					console.log(name);
				}
				
			fetch(action, {
				method: "post",
				body: formData
			}).then(function (response) {
				response.json().then(function (result) {
					if(type == 'phone'){ form.remove(); $thanks.show(); }
					if(type == 'participate'){
						document.cookie = 'callbackName=;expires=Thu, 01 Jan 1970 00:00:01 GMT';
						document.cookie = 'callbackName=' + name + ';expires=1;path=/';
						$('#heading-screen').load(url); 
					}
				});
			});
		}
		
	});
	$(document).on('click', '[btn-subscribe]', function(event){
		let type = 'email',
			thanks = '';
		
		if ( $(this).closest('form').hasClass('form-subscribe-small') ){
			type = 'email';
		}
		if ( $(this).closest('form').hasClass('form-callback-small') ){
			type = 'phone';
		}
				
		if (valid( 'click', $(this), type ) === true) {
			var form = $(this).closest('form')[0],
				formData = new FormData(form),
				action = $(form).attr('action'),
				$thanks = $(this).closest('.form-container').find('.form-thanks');
			
			fetch(action, {
				method: "post",
				body: formData
			}).then(function (response) {
				response.json().then(function (result) {
					form.remove();
					$thanks.show();
				});
			});
		}
	});	
	
	// Проверка для смены классов при введении
	$(document).on('input', '.input', function(event){
		let $input = $(this);
		checkInputValue( $input );
	});
	// Проверка для смены классов при автозаполнении
	$(document).on('change', '.input', function(event){
		let $input = $(this);
		checkInputValue( $input );
	});
	
});
