document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content') as HTMLElement;
    const button = document.getElementById('mybtn') as HTMLButtonElement;

    if (content && button) {
        button.addEventListener('click', () => {
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                button.innerHTML = '<i class="fas fa-chevron-up"></i>';
            } else {
                content.classList.add('hidden');
                button.innerHTML = '<i class="fas fa-chevron-down"></i>';
            }
        });
    } else {
        console.error('Content or button element not found');
    }
});
