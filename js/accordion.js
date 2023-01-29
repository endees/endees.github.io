var accordionItem = document.querySelectorAll('.accordion-item');
var accordionContent = document.querySelectorAll('.accordion-item_content');
var accordionButton = document.querySelectorAll('.accordion-btn');

for (let i = 0; i < accordionButton.length; i++) {
    accordionButton[i].addEventListener('click', () => {

        accordionButton[i].classList.toggle('open');
        
        if (accordionContent[i].style.maxHeight) {
            accordionContent[i].style.maxHeight = null;
        } else {
            accordionContent[i].style.maxHeight = accordionContent[i].scrollHeight + "px";
        }
    })
}