function imageDisplay(valueSlider) {
    let images = document.querySelectorAll('[id^="img"]')
    for (let i = 0; i < images.length; i++) {
        let image = images[i]
        

        if (i <= valueSlider) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none'
        }
    }
}