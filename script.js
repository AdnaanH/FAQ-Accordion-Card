const selectedSummary = document.querySelectorAll('.summary');

selectedSummary.forEach(summary => {
    summary.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        summary.classList.add('active');
    });
});

 


