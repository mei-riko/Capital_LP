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
	  } else {
		phone = false;

		if (val == 'click') {
			$inputPhone.addClass('input--error');
		}
	  }
	}
	if (typeof $inputName != 'undefined' && $inputName.length != 0) {
	  if ($inputName[0].inputmask.isComplete()) {
		name = true;
	  } else {
		name = false;

		if (val == 'click') {
			$inputName.addClass('input--error');
		}
	  }
	}
	if (typeof $inputEmail != 'undefined' && $inputEmail.length != 0) {
	  if ($inputEmail[0].inputmask.isComplete()) {
		email = true;
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
	$('[btn-form]').on('click', function (event) {
		let type = '';
		
		if ( $(this).closest('form').hasClass('form_inline') ){
			type = 'phone';
		}
		if ( $(this).closest('form').hasClass('form_callback') ){
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
					$intro.hide();
					$thanks.show();
				});
			});
		}
		
	});
	$('[btn-subscribe]').on('click', function (event) {
		let type = 'email',
			thanks = '';
		
		if ( $(this).closest('form').hasClass('form_get-info') ){
			type = 'email';
			thanks = 'Спасибо за подписку! Пришлем вам email как только появятся новости.';
		}
		if ( $(this).closest('form').hasClass('form_get-pdf') ){
			type = 'email';
			thanks = 'Спасибо за заявку! Пришлем pdf на указанный вами email.';
		}
		if ( $(this).closest('form').hasClass('form_subscribe') ){
			type = 'subscribe';
			thanks = '<svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M86.1253 24.3749C86.1253 16.2499 78.0978 10.8333 71.8253 10.8333C67.4595 10.8333 67.1182 14.1483 66.4466 20.6916C66.1487 23.5624 65.7912 27.0508 65.0003 31.1458C62.9095 41.9899 55.6837 55.8457 48.772 59.9895V92.0832C48.7503 104.271 52.8128 108.333 70.417 108.333H90.8541C102.641 108.333 105.495 100.571 106.557 97.6949L106.627 97.4999C107.245 95.8424 108.567 94.537 110.083 93.0582C111.762 91.4007 113.68 89.5212 115.104 86.6666C116.789 83.292 116.567 80.2912 116.367 77.6207C116.242 76.0012 116.128 74.5062 116.459 73.1249C116.805 71.6624 117.249 70.552 117.677 69.4903C118.452 67.562 119.167 65.7745 119.167 62.2916C119.167 54.1666 115.115 48.7607 106.627 48.7607H83.9587C83.9587 48.7607 86.1253 32.4999 86.1253 24.3749ZM29.792 54.1666C27.6371 54.1666 25.5705 55.0226 24.0467 56.5463C22.523 58.0701 21.667 60.1367 21.667 62.2916V100.208C21.667 102.363 22.523 104.43 24.0467 105.953C25.5705 107.477 27.6371 108.333 29.792 108.333C31.9469 108.333 34.0135 107.477 35.5372 105.953C37.061 104.43 37.917 102.363 37.917 100.208V62.2916C37.917 60.1367 37.061 58.0701 35.5372 56.5463C34.0135 55.0226 31.9469 54.1666 29.792 54.1666Z" fill="#597CFB"></path></svg><span class="d-block">Спасибо за подписку! Пришлем вам email как только появятся новости.</span>';
		}
		
		console.log(valid( 'click', $(this), type ));
		
		if (valid( 'click', $(this), type ) === true) {
			var form = $(this).closest('form')[0],
				formData = new FormData(form),
				action = $(form).attr('action'),
				$intro = $(this).closest('.form-container').find('.form-intro');
			
			fetch(action, {
				method: "post",
				body: formData
			}).then(function (response) {
				response.json().then(function (result) {
					form.remove();
					$intro.html(thanks);
				});
			});
		}
		
	});	
});
