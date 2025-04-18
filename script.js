<script>
  // AOS Animation Initialization
  AOS.init();

  // Smooth scroll for navbar links
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Email sending logic using mailto:
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    const subject = `New Inquiry from ${name}`;
    const body = `Full Name: ${name}%0D%0DEmail: ${email}%0D%0DMessage:%0D${message}`;

    // Opens the user's email app with the form prefilled
    window.location.href = `mailto:tasogaresaya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
</script>
