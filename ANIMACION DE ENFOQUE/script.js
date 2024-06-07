document.addEventListener('DOMContentLoaded', () => {
    const btnsContainer = document.querySelector('.btns');
    const buttons = document.querySelectorAll('.btn');

    const setDefocus = (button) => {
        if (button.getAttribute('data-focus') === 'true') {
            btnsContainer.classList.add('defocus');
            button.classList.add('focused');
        } else {
            btnsContainer.classList.remove('defocus');
        }
    };

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            buttons.forEach(btn => btn.classList.remove('focused'));
            setDefocus(button);
        });

        button.addEventListener('focus', () => {
            buttons.forEach(btn => btn.classList.remove('focused'));
            setDefocus(button);
        });

        button.addEventListener('mouseleave', () => {
            if (!button.classList.contains('focused')) {
                btnsContainer.classList.remove('defocus');
                buttons.forEach(btn => btn.classList.remove('focused'));
            }
        });

        button.addEventListener('blur', () => {
            if (button.getAttribute('data-focus') === 'true') {
                button.classList.add('focused');
            } else {
                btnsContainer.classList.remove('defocus');
                button.classList.remove('focused');
            }
        });
    });

    btnsContainer.addEventListener('mouseleave', () => {
        btnsContainer.classList.remove('defocus');
        buttons.forEach(btn => btn.classList.remove('focused'));
    });
});