document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header');
    header.style.backgroundColor = '#333';
    header.style.color = '#fff';
    header.style.padding = '10px';
    header.style.textAlign = 'center';

    const buttons = ['Home', 'About', 'Contact', 'Service'];
    buttons.forEach(buttonText => {
        const button = document.createElement('button');
        button.textContent = buttonText;
        button.style.margin = '0 10px';
        button.style.padding = '10px 20px';
        button.style.border = 'none';
        button.style.backgroundColor = '#555';
        button.style.color = '#fff';
        button.style.cursor = 'pointer';
        button.addEventListener('click', () => {
            alert(`${buttonText} button clicked!`);
        });
        header.appendChild(button);
    });

    document.body.insertBefore(header, document.body.firstChild);
});
