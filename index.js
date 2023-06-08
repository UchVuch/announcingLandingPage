// функция, которая добавляет класс с анимацей, когда элемент пересекается с экраном просмотра
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('animate-fade-show');
        }
    });
}

const options = {
    threshold: [0.4]
}
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('[data-animate]');

for (let elm of elements) {
    observer.observe(elm);
}