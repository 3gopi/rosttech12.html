AOS.init();




function scrollToSlide(index) {


    const slides = document.querySelectorAll('.slide');
    slides[index].scrollIntoView({ behavior: 'smooth' });
}

function updatePoints() {
    const slides = document.querySelectorAll('.slide');
    const points = document.querySelectorAll('.point');

    let activeIndex = 0;
    slides.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        if (rect.left >= 0 && rect.right <= window.innerWidth) {
            activeIndex = index;
        }
    });


    points.forEach(point => {
        point.classList.remove('active');
    });

    points[activeIndex].classList.add('active');
}

// Real-time validation for Name field
document.querySelector('.Name').addEventListener('input', function() {
    var name = this.value.trim();
    var nameError = document.getElementById('nameError');
    
    if (!name) {
        nameError.innerHTML = 'Please enter your name.';
        nameError.style.display = 'block';
        nameError.style.color = 'red'; // Adding color to the error message
    } else {
        nameError.innerHTML = ''; 
        nameError.style.display = 'none';
    }
});

document.querySelector('.phone').addEventListener('input', function() {
    var phone = this.value.trim();
    var phoneError = document.getElementById('phoneError');
    
    if (!phone) {
        phoneError.innerHTML = 'Please enter your phone number.';
        phoneError.style.display = 'block';
        phoneError.style.color = 'red'; // Adding color to the error message
    } else if (!/^\d*$/.test(phone)) { 
        phoneError.innerHTML = 'Please enter only digits for the phone number.';
        phoneError.style.display = 'block';
        phoneError.style.color = 'red'; // Adding color to the error message
    } else {
        phoneError.innerHTML = '';
        phoneError.style.color = 'red';
        phoneError.style.color = 'white'; // Adding color to the success message
    } 
});


document.querySelector('.Email').addEventListener('input', function() {
    var email = this.value.trim();
    var emailError = document.getElementById('emailError');
    
    if (!email) {
        emailError.innerHTML = 'Please enter your email address.';
        emailError.style.display = 'block';
        emailError.style.color = 'red'; // Adding color to the error message
    } else if (!validateEmail(email)) {
        emailError.innerHTML = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        emailError.style.color = 'red'; // Adding color to the error message
    } else {
        emailError.innerHTML = ''; // Clear error message if email is valid
        emailError.style.display = 'none';
    }
});

$(".carousel").owlCarousel({
    margin: 80,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 1, nav: false },
        600: { items: 2, nav: false },
        1000: { items: 3, nav: false },
    },
});
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.aboutus');
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var positionFromTop = section.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      if (positionFromTop - windowHeight <= 0) {
        section.querySelector('.content').classList.add('active');
      }
    }
  });

   document.addEventListener('DOMContentLoaded', function() {
  const pointers = document.querySelectorAll('.pointer');
  const contents = document.querySelectorAll('.content');

  pointers.forEach(function(pointer, index) {
    pointer.addEventListener('click', function() {
      pointers.forEach(function(pointer) {
        pointer.classList.remove('active');
      });
      contents.forEach(function(content) {
        content.classList.remove('active');
      });
      pointer.classList.add('active');
      contents[index].classList.add('active');
    });
  });
});



