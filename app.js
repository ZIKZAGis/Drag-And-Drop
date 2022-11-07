const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')


const dragStart = (evt) => {
    evt.target.classList.add('hold')
    evt.target.textContent = 'Полет нормальный!'
    setTimeout(() => evt.target.classList.add('hide'), 0)
}

const dragEnd = (evt) => {
    evt.target.className = 'item'
    evt.target.textContent = 'Перетащи меня'
}

item.addEventListener('dragstart', dragStart)

item.addEventListener('dragend', dragEnd)


const dragover = (evt) => {
    evt.preventDefault()
}

const dragenter = (evt) => {
    evt.target.classList.add('hovered')
}

const dragleave = (evt) => {
    evt.target.classList.remove('hovered')
}

const dragdrop = (evt) => {
    evt.target.append(item)
    evt.target.classList.remove('hovered')
}

placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
})