document.addEventListener('DOMContentLoaded', () => {
    const btnsContainer = document.querySelector('.btns');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Remove focused class from all buttons
            buttons.forEach(btn => btn.classList.remove('focused'));
            
            // Check if the hovered button has the data-focus attribute
            if (button.getAttribute('data-focus') === 'true') {
                // Add defocus class to container
                btnsContainer.classList.add('defocus');
                // Add focused class to the hovered button
                button.classList.add('focused');
            } else {
                // Remove defocus class if another button is hovered
                btnsContainer.classList.remove('defocus');
            }
        });

        button.addEventListener('mouseleave', () => {
            // Remove defocus and focused classes when mouse leaves a button
            btnsContainer.classList.remove('defocus');
            buttons.forEach(btn => btn.classList.remove('focused'));
        });
    });

    // Remove defocus when mouse leaves the container
    btnsContainer.addEventListener('mouseleave', () => {
        btnsContainer.classList.remove('defocus');
        buttons.forEach(btn => btn.classList.remove('focused'));
    });
});
