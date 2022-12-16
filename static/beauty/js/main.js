$(document).ready(function() {
	$('.salonsSlider').slick({
		arrows: true,
	  slidesToShow: 4,
	  infinite: true,
	  prevArrow: $('.salons .leftArrow'),
	  nextArrow: $('.salons .rightArrow'),
	  responsive: [
	    {
	      breakpoint: 991,
	      settings: {
	        
	      	centerMode: true,
  			//centerPadding: '60px',
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	$('.servicesSlider').slick({
		arrows: true,
	  slidesToShow: 4,
	  prevArrow: $('.services .leftArrow'),
	  nextArrow: $('.services .rightArrow'),
	  responsive: [
	  	{
	      breakpoint: 1199,
	      settings: {
	        

	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 991,
	      settings: {
	        
	      	centerMode: true,
  			//centerPadding: '60px',
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.mastersSlider').slick({
		arrows: true,
	  slidesToShow: 4,
	  prevArrow: $('.masters .leftArrow'),
	  nextArrow: $('.masters .rightArrow'),
	  responsive: [
	  	{
	      breakpoint: 1199,
	      settings: {
	        

	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 991,
	      settings: {
	        

	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.reviewsSlider').slick({
		arrows: true,
	  slidesToShow: 4,
	  prevArrow: $('.reviews .leftArrow'),
	  nextArrow: $('.reviews .rightArrow'),
	  responsive: [
	  	{
	      breakpoint: 1199,
	      settings: {
	        

	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 991,
	      settings: {
	        

	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	// menu
	$('.header__mobMenu').click(function() {
		$('#mobMenu').show()
	})
	$('.mobMenuClose').click(function() {
		$('#mobMenu').hide()
	})

	new AirDatepicker('#datepickerHere')

	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function(e) {
	  	e.preventDefault()
	    this.classList.toggle("active");
	    var panel = $(this).next()
	    panel.hasClass('active') ?  
	    	 panel.removeClass('active')
	    	: 
	    	 panel.addClass('active')
	  });
	}


	$(document).on('click', '.accordion__block', function(e) {
		let thisName,thisAddress;

		thisName = $(this).find('> .accordion__block_intro').text()
		thisAddress = $(this).find('> .accordion__block_address').text()
		
		
		if(thisName === 'BeautyCity Пушкинская') {
			$('.service__masters > .panel').html(`
				<div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/all.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Любой мастер</div>
						  	</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/pushkinskaya/1.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Елизавета Лапина</div>
						  	</div>
						  	<div class="accordion__block_prof">Мастер маникюра</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/pushkinskaya/2.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Анна Сергеева</div>
						  	</div>
						  	<div class="accordion__block_prof">Парикмахер</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/pushkinskaya/3.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Ева Колесова</div>
						  	</div>
						  	<div class="accordion__block_prof">Визажист</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/pushkinskaya/4.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Мария Суворова</div>
						  	</div>
						  	<div class="accordion__block_prof">Стилист</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/pushkinskaya/5.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Мария Максимова</div>
						  	</div>
						  	<div class="accordion__block_prof">Визажист</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/pushkinskaya/6.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Анастасия Сергеева</div>
						  	</div>
						  	<div class="accordion__block_prof">Визажист</div>
						  </div>	
			`)
			// $('.service__masters div[data-masters="Pushkinskaya"]').addClass('vib')
		}
		console.log(thisName)
		if(thisName === 'BeautyCity Ленина') {
			
			$('.service__masters > .panel').html(`
				<div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/all.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Любой мастер</div>
						  	</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/lenina/1.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Дарья Мартынова</div>
						  	</div>
						  	<div class="accordion__block_prof">Мастер маникюра</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/lenina/2.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Амина Абрамова</div>
						  	</div>
						  	<div class="accordion__block_prof">Парикмахер</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/lenina/3.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Милана Романова</div>
						  	</div>
						  	<div class="accordion__block_prof">Визажист</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/lenina/4.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Диана Чернова</div>
						  	</div>
						  	<div class="accordion__block_prof">Стилист</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/lenina/5.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Полина Лукьянова</div>
						  	</div>
						  	<div class="accordion__block_prof">Визажист</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/lenina/6.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Вера Дмитриева</div>
						  	</div>
						  	<div class="accordion__block_prof">Визажист</div>
						  </div>
			`)
		}

		if(thisName === 'BeautyCity Красная') {
			$('.service__masters > .panel').html(`
				<div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/all.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Любой мастер</div>
						  	</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/krasnaya/1.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Зоя Матвеева</div>
						  	</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/krasnaya/2.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Мария Родина</div>
						  	</div>
						  	<div class="accordion__block_prof">Мастер маникюра</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/krasnaya/3.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Дарья Попова</div>
						  	</div>
						  	<div class="accordion__block_prof">Парикмахер</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/krasnaya/4.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Ева Семенова</div>
						  	</div>
						  	<div class="accordion__block_prof">Визажист</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/krasnaya/5.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Вера Романова</div>
						  	</div>
						  	<div class="accordion__block_prof">Стилист</div>
						  </div>
						  <div class="accordion__block fic">
						  	<div class="accordion__block_elems fic">
							  	<img src="img/masters/avatar/krasnaya/6.svg" alt="avatar" class="accordion__block_img">
							  	<div class="accordion__block_master">Валерия Зуева</div>
						  	</div>
						  	<div class="accordion__block_prof">Визажист</div>
						  </div>
			`)
			
		}

		$(this).parent().parent().find('> button.active').addClass('selected').text(thisName + '  ' +thisAddress)
		setTimeout(() => {
			$(this).parent().parent().find('> button.active').click()
		}, 200)
		
		// $(this).parent().addClass('hide')

		// console.log($(this).parent().parent().find('.panel').hasClass('selected'))
		
		// $(this).parent().parent().find('.panel').addClass('selected')
	})


	$('.accordion__block_item').click(function(e) {
		let thisName,thisAddress;
		thisName = $(this).find('> .accordion__block_item_intro').text()
		thisAddress = $(this).find('> .accordion__block_item_address').text()
		$(this).parent().parent().parent().parent().find('> button.active').addClass('selected').text(thisName + '  ' +thisAddress)
		// $(this).parent().parent().parent().parent().find('> button.active').click()
		// $(this).parent().parent().parent().addClass('hide')
		setTimeout(() => {
			$(this).parent().parent().parent().parent().find('> button.active').click()
		}, 200)
	})



	// 	console.log($('.service__masters > .panel').attr('data-masters'))
	// if($('.service__salons .accordion.selected').text() === "BeautyCity Пушкинская  ул. Пушкинская, д. 78А") {
	// }


	$(document).on('click', '.service__masters .accordion__block', function(e) {
		let clone = $(this).clone()
		console.log(clone)
		$(this).parent().parent().find('> button.active').html(clone)
	})

	// $('.accordion__block_item').click(function(e) {
	// 	const thisName = $(this).find('.accordion__block_item_intro').text()
	// 	const thisAddress = $(this).find('.accordion__block_item_address').text()
	// 	console.log($(this).parent().parent().parent().parent())
	// 	$(this).parent().parent().parent().parent().find('button.active').addClass('selected').text(thisName + '  ' +thisAddress)
	// })



	// $('.accordion__block_item').click(function(e) {
	// 	const thisChildName = $(this).text()
	// 	console.log(thisChildName)
	// 	console.log($(this).parent().parent().parent())
	// 	$(this).parent().parent().parent().parent().parent().find('button.active').addClass('selected').text(thisChildName)

	// })
	// $('.accordion.selected').click(function() {
	// 	$(this).parent().find('.panel').hasClass('selected') ? 
	// 	 $(this).parent().find('.panel').removeClass('selected')
	// 		:
	// 	$(this).parent().find('.panel').addClass('selected')
	// })


	//popup
	$('.header__block_auth').click(function(e) {
		e.preventDefault()
		$('#authModal').arcticmodal();

		// $('#confirmModal').arcticmodal();

	})

	$('.rewiewPopupOpen').click(function(e) {
		e.preventDefault()
		$('#reviewModal').arcticmodal();
	})
	$('.payPopupOpen').click(function(e) {
		e.preventDefault()
		$('#paymentModal').arcticmodal();
	})
	$('.tipsPopupOpen').click(function(e) {
		e.preventDefault()
		$('#tipsModal').arcticmodal();
	})

	function getCookie(name) {
    	let cookieValue = null;
    	if (document.cookie && document.cookie !== '') {
    	    const cookies = document.cookie.split(';');
    	    for (let i = 0; i < cookies.length; i++) {
    	        const cookie = cookies[i].trim();
    	        // Does this cookie string begin with the name we want?
    	        if (cookie.substring(0, name.length + 1) === (name + '=')) {
    	            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    	            break;
    	        }
    	    }
    	}
    	return cookieValue;
	}

	$('.tipsPopup__form_inputNum').keyup(function(e) {
		if (this.value.length !== this.maxLength) { return }

		const next = $(this).data('next')
		$(`input[name=num${next}]`).focus()
	})

	function post_request(url, data, success_handler, fail_handler) {
		$.ajax({
			type: 'POST',
			url: url,
			headers: { 'X-CSRFToken': getCookie('csrftoken') },
			data,
			dataType: 'json',
			success: success_handler,
			error: fail_handler
		})

	}

	function clearConfirmationForm() {
		$('.tipsPopup__form_inputNum').each(function(_, inputEl) {
			$(inputEl).val('');
		});
	}

	function clearFormErrors(form) {
		form.find('.field_errors').each(function(_, errorDiv) {
			$(errorDiv).text('')
		})
	}

	$('.authPopup__form').submit(function(e) {
		e.preventDefault();

		const form = $(this);
		const phonenumber = form.find('input[name=tel]').val();
		const confirm_rules = form.find('input[name=confirm_rules]').is(':checked');
		const url = form.attr('action')

		localStorage.setItem('phonenumber', phonenumber);

		const payload = JSON.stringify({ phonenumber, confirm_rules });

		const success_handler = () => {
			clearFormErrors(form)
			$('#authModal').arcticmodal('close');
			$('#confirmModal').arcticmodal();
		}

		const error_handler = (data) => {
			const response = data.responseJSON
			Object.entries(response).forEach(([field, errors]) => {
				const error_list = errors.map((error) => `<li>${error}</li>`).join('');
				const error_block = `<ul>${error_list}</ul>`;
				$(`#${field}__error`).html(error_block);
			})
		}

		post_request(url, payload, success_handler, error_handler)

		return false
	})

	$('.confirmPopup__changeNumber').click(function(e) {
		e.preventDefault();

		clearConfirmationForm();
		clearFormErrors($('.confirmPopup__form'))
		$('#confirmModal').arcticmodal('close');
		$('#authModal').arcticmodal()
	})

	$('#request_code_again').click(function(e) {
		e.preventDefault();

		const confirmForm = $('.confirmPopup__form')
		const url = $('.authPopup__form').attr('action')
		const data = JSON.stringify({
			phonenumber: localStorage.getItem('phonenumber'),
			confirm_rules: true,
		});

		const success_handler = () => {
			clearConfirmationForm();
			clearFormErrors(confirmForm)
			$('.code_sent_notify').show().delay(1000).fadeOut();
		}

		const error_handler = (data) => {
			clearFormErrors(confirmForm)
			const response = data.responseJSON
			Object.entries(response).forEach(([field, errors]) => {
				const error_list = errors.map((error) => `<li>${error}</li>`).join('');
				const error_block = `<ul>${error_list}</ul>`;
				$(`#confirm_registration__error`).html(error_block);
			})
		};

		post_request(url, data, success_handler, error_handler);
	})

	$('.confirmPopup__form').submit(function(e) {
		e.preventDefault();

		const form = $(this)
		const url =form.attr('action')
		const digits = []
		form.find('.tipsPopup__form_inputNum').each(function() {
			digits.push($(this).val())
		})
		const code = parseInt(digits.join(''))
		const data = JSON.stringify({ phonenumber: localStorage.getItem('phonenumber'), code })

		const success_handler = () => {
			$('#confirmModal').arcticmodal('close');
			window.location.replace(window.location.href);
		}
		const error_handler = (data) => {
			const response = data.responseJSON
			Object.entries(response).forEach(([field, errors]) => {
				const error_list = errors.map((error) => `<li>${error}</li>`).join('');
				const error_block = `<ul>${error_list}</ul>`;
				$('#confirm_registration__error').html(error_block);
			})
		}

		post_request(url, data, success_handler, error_handler);
		return false
	})

	//service
	$('.time__items .time__elems_elem .time__elems_btn').click(function(e) {
		e.preventDefault()
		$('.time__elems_btn').removeClass('active')
		$(this).addClass('active')
		// $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active')
	})

	$(document).on('click', '.servicePage', function() {
		if($('.time__items .time__elems_elem .time__elems_btn').hasClass('active') && $('.service__form_block > button').hasClass('selected')) {
			$('.time__btns_next').addClass('active')
		}
	})
	


})