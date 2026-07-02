window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faqbox').forEach(box => {
        box.addEventListener('click', function(e) {
            // Only toggle if clicking on the question or svg, not the answer
            if (e.target.closest('.faq-answer')) return;
            // Close others (optional, like Netflix)
            document.querySelectorAll('.faqbox').forEach(other => {
                if (other !== box) other.classList.remove('open');
            });
            box.classList.toggle('open');
        });
    });
});

 function setVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
setVh();
  window.addEventListener('resize', setVh);
  window.addEventListener('load', setVh);