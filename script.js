$(document).ready(function () {
  const $modal = $('#modal');
  const $closeButton = $('.close');
  const $contactSalesHeaderBtn = $('.menu-right .contact-btn');
  const $plerdyBtn = $('.Plerdy-btn');
  const $contactForm = $('#contactForm');
  const $modalName = $('#modalName');
  const $modalPhone = $('#modalPhone');
  const $phoneInputGroup = $('#phoneInputGroup');
  const $countrySelect = $('#countrySelect');
  const $countryDropdown = $('#countryDropdown');
  const $selectedCountryFlag = $('#selectedCountryFlag');
  const $selectedCountryCode = $('#selectedCountryCode');

  $('.modal-left').each(function () {
    const imgPath = $(this).attr('img');
    if (imgPath) {
      $(this).css({
        'background-image': `url(${imgPath})`,
        'background-size': 'cover',
        'background-position': 'center',
      });
    }
  });

  function openModal() {
    $modal.css('display', 'flex');
    $('body').css('overflow', 'hidden');
    $('.input-field, .phone-input-group').removeClass('error');
    $('.error-message').hide();
  }

  function closeModal() {
    $modal.css('display', 'none');
    $('body').css('overflow', '');
    $contactForm[0].reset();
    $('.input-field, .phone-input-group').removeClass('error');
    $('.error-message').hide();
  }

  $contactSalesHeaderBtn.on('click', function (e) {
    e.preventDefault();
    openModal();
  });

  $plerdyBtn.on('click', function (e) {
    if ($(this).hasClass('no-modal')) return;
    e.preventDefault();
    openModal();
  });

  $closeButton.on('click', function () {
    closeModal();
  });

  $(window).on('click', function (event) {
    if ($(event.target).is($modal)) {
      closeModal();
    }
  });

  $(document).on('keydown', function (event) {
    if (event.key === 'Escape' && $modal.css('display') === 'flex') {
      closeModal();
    }
  });

  $contactForm.on('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    if ($modalName.val().trim() === '') {
      $modalName.addClass('error');
      $('#nameError').show();
      isValid = false;
    } else {
      $modalName.removeClass('error');
      $('#nameError').hide();
    }

    if ($modalPhone.val().trim() === '') {
      $phoneInputGroup.addClass('error');
      $('#phoneError').text('Номер телефона не может быть пустым').show();
      isValid = false;
    } else {
      $phoneInputGroup.removeClass('error');
      $('#phoneError').hide();
    }

    if (isValid) {
      alert('Форма успешно отправлена!');
      closeModal();
    }
  });

  $modalName.on('input', function () {
    $(this).removeClass('error');
    $('#nameError').hide();
  });

  $modalPhone.on('input', function () {
    $phoneInputGroup.removeClass('error');
    $('#phoneError').hide();
  });

  $countrySelect.on('click', function (e) {
    e.stopPropagation();
    $countryDropdown.toggle();
  });

  $countryDropdown.on('click', '.country-dropdown-item', function () {
    const code = $(this).data('code');
    const flag = $(this).data('flag');
    $selectedCountryCode.text(code);
    $selectedCountryFlag.attr('src', `images/${flag}`);
    $countryDropdown.hide();
  });

  $(document).on('click', function (e) {
    if (
      !$countrySelect.is(e.target) &&
      $countrySelect.has(e.target).length === 0
    ) {
      $countryDropdown.hide();
    }
  });

  let swiper = new Swiper('.reasons-swiper', {
    slidesPerView: 'auto',
    spaceBetween: -250,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1200: { slidesPerView: 4 },
      992: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      576: { slidesPerView: 1 },
    },
  });

  setTimeout(function () {
    $('.Website-Audit-Section').addClass('loaded');
  }, 100);
});