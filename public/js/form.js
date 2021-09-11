function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
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
			$inputPhone.addClass('input--success');
		}
	  } else {
		phone = false;

		if (val == 'click') {
			$inputPhone.addClass('input--error');
		}
	  }
	}
	if (typeof $inputName != 'undefined' && $inputName.length != 0) {
	  if ( $inputName.val().length > 0 ) {
		name = true;
		
		if (val == 'click') {
			$inputName.addClass('input--success');
		}
	  } else {
		name = false;

		if (val == 'click') {
			$inputName.addClass('input--error');
		}
	  }
	}
	if (typeof $inputEmail != 'undefined' && $inputEmail.length != 0) {
	  if ( $inputEmail.val().length > 0 && validateEmail( $inputEmail.val() ) ) {
		email = true;
		
		if (val == 'click') {
			$inputEmail.addClass('input--success');
		}
	  } else {
		email = false;

		if (val == 'click') {
			$inputEmail.addClass('input--error');
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
		let type = '';
		
		if ( $(this).closest('form').hasClass('form-callback-small') ){
			type = 'phone';
		}
		if ( $(this).closest('form').hasClass('form-callback') ){
			type = 'participate';
		}
		
		if (valid( 'click', $(this), type ) === true) {
			var form = $(this).closest('form')[0],
				formData = new FormData(form),
				action = $(form).attr('action'),
				$thanks = $(this).closest('.form-container').find('.form-thanks'),
				$intro = $(this).closest('.form-container').find('.form-intro');
				
			fetch(action, {
				method: "post",
				body: formData
			}).then(function (response) {
				response.json().then(function (result) {
					form.remove();
					// $intro.hide();
					$thanks.show();
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
	$(document).on('change', '.input', function(event){
		let type = '';
		
		if ( $(this).closest('form').hasClass('form-subscribe-small') ){
			type = 'email';
		}
		valid( 'click', $(this), type );
	});
});
