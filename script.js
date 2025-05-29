document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideIndicator = document.getElementById('slideIndicator');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const ctaDemoBtn = document.getElementById('cta-demo');
    const ctaProposalBtn = document.getElementById('cta-proposal');

    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        currentSlide = index;
        updateNavigation();
    }

    function updateNavigation() {
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
        slideIndicator.textContent = `${currentSlide + 1} / ${totalSlides}`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            showSlide(currentSlide + 1);
        }
    });

    // Tab functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Deactivate all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Placeholder for CTA button actions
    ctaDemoBtn.addEventListener('click', () => {
        alert('Ação: Agendar Demonstração Personalizada. (Substitua este alerta pela lógica desejada, como abrir um link de calendário ou formulário)');
        // Exemplo: window.location.href = 'SEU_LINK_DE_AGENDAMENTO';
    });

    ctaProposalBtn.addEventListener('click', () => {
        alert('Ação: Receber Proposta de Implementação. (Substitua este alerta pela lógica desejada, como abrir um formulário de contato)');
        // Exemplo: window.location.href = 'SEU_LINK_DE_FORMULARIO';
    });


    // Initialize first slide
    showSlide(0);
});
