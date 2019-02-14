function showData(data) {
    alert(data);
}

function countBirds() {
    for (var i = 1; i <= 5; i++) {
        showData('Bird number = ' + i + ' is in the sky');
    }
}

eventFromJS.onclick = function () {
    showData('eventFromJS is clicked by the user');
}
area.onmousedown = function () {
    this.value = 'mouseDown'
}
area.onmouseup = function () {
    this.value = 'mouseup'
}

focusButton.onclick = function () {
    focusText.value = 'In focus event by user';

    setTimeout(function () {
        focusText.focus();
        focusText.value = 'Out of focus event by user';
    }, 2000);
}


formValidationAge.onblur = function () {
    if (isNaN(this.value)) {
        this.classList.add('error')
        formValidationAge.focus();
    } else {
        this.classList.remove('error')
        formValidationName.focus();
    }
}