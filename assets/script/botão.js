const whatsappButton = document.getElementById('whatsappButton');
const whatsappPopup = document.getElementById('whatsappPopup');

whatsappButton.addEventListener('click', () => {
    whatsappPopup.style.display = whatsappPopup.style.display === 'none' || whatsappPopup.style.display === '' ? 'block' : 'none';
});
