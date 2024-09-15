document.addEventListener('DOMContentLoaded', function () {
    var content = document.getElementById('content');
    var button = document.getElementById('mybtn');
    if (content && button) {
        button.addEventListener('click', function () {
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                button.innerHTML = '<i class="fas fa-chevron-up"></i>';
            }
            else {
                content.classList.add('hidden');
                button.innerHTML = '<i class="fas fa-chevron-down"></i>';
            }
        });
    }
    else {
        console.error('Content or button element not found');
    }
});
