const faqs = document.querySelectorAll('.faq');
const subButtons = document.querySelectorAll('.subtitle');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})

subButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    })
})




