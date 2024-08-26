document.querySelector('.toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

document.addEventListener('DOMContentLoaded', function() {
    if (!document.body.classList.contains('dark-mode') && !document.body.classList.contains('light-mode')) {
        document.body.classList.add('light-mode');
    }
});