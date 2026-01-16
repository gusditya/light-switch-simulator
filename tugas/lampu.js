// UANG KELUARGA
function saklar(action, lamp) {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (toggle1.checked) {
        lampu1.src = "assets/images/on.png";
    } else {
        lampu1.src = "assets/images/off.png";
    }

    if (toggle2.checked) {
        lampu2.src = "assets/images/on.png";
    } else {
        lampu2.src = "assets/images/off.png";
    }

    if (toggle3.checked) {
        lampu3.src = "assets/images/on.png";
    } else {
        lampu3.src = "assets/images/off.png";
    }

    if (action == 'on') {
        if (lamp == 1) {
            lampu1.src = "assets/images/on.png";
        } if (lamp == 2) {
            lampu2.src = "assets/images/on.png";
        } if (lamp == 3) {
            lampu3.src = "assets/images/on.png";
        }
    }
    if (action == 'off') {
        if (lamp == 1) {
            lampu1.src = "assets/images/off.png";
        }
        if (lamp == 2) {
            lampu2.src = "assets/images/off.png";
        }
        if (lamp == 3) {
            lampu3.src = "assets/images/off.png";
        }
    }
}

function saklarAll() {
    let toggle4 = document.getElementById("default-toggle4");
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

if (toggle4.checked) {
        lampu1.src = "assets/images/on.png";
        lampu2.src = "assets/images/on.png";
        lampu3.src = "assets/images/on.png";
    } else {
        lampu1.src = "assets/images/off.png";
        lampu2.src = "assets/images/off.png";
        lampu3.src = "assets/images/off.png";
    }
}
// END UANG KELUARGA

// RUANG MAKAN
function saklarmakan(action, lamp) {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");

    if (toggle1.checked) {
        lampu1.src = "assets/images/on.png";
    } else {
        lampu1.src = "assets/images/off.png";
    }

    if (toggle2.checked) {
        lampu2.src = "assets/images/on.png";
    } else {
        lampu2.src = "assets/images/off.png";
    }

    if (action == 'on') {
        if (lamp == 1) {
            lampu1.src = "assets/images/on.png";
        } if (lamp == 2) {
            lampu2.src = "assets/images/on.png";
        }
    }
    if (action == 'off') {
        if (lamp == 1) {
            lampu1.src = "assets/images/off.png";
        }
        if (lamp == 2) {
            lampu2.src = "assets/images/off.png";
        }
    }
}

function saklarMAKAN() {
    let toggle4 = document.getElementById("default-toggle4");
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");

if (toggle4.checked) {
        lampu1.src = "assets/images/on.png";
        lampu2.src = "assets/images/on.png";
    } else {
        lampu1.src = "assets/images/off.png";
        lampu2.src = "assets/images/off.png";
    }
}

// TAMU
function saklartamu(action, lamp) {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");

    if (toggle1.checked) {
        lampu1.src = "assets/images/on.png";
    } else {
        lampu1.src = "assets/images/off.png";
    }

    if (toggle2.checked) {
        lampu2.src = "assets/images/on.png";
    } else {
        lampu2.src = "assets/images/off.png";
    }

    if (toggle3.checked) {
        lampu3.src = "assets/images/on.png";
    } else {
        lampu3.src = "assets/images/off.png";
    }

    if (toggle4.checked) {
        lampu4.src = "assets/images/on.png";
    } else {
        lampu4.src = "assets/images/off.png";
    }

    if (action == 'on') {
        if (lamp == 1) {
            lampu1.src = "assets/images/on.png";
        } if (lamp == 2) {
            lampu2.src = "assets/images/on.png";
        } if (lamp == 3) {
            lampu3.src = "assets/images/on.png";
        }
        if (lamp == 4) {
            lampu4.src = "assets/images/on.png";
        }
    }
    if (action == 'off') {
        if (lamp == 1) {
            lampu1.src = "assets/images/off.png";
        }
        if (lamp == 2) {
            lampu2.src = "assets/images/off.png";
        }
        if (lamp == 3) {
            lampu3.src = "assets/images/off.png";
        }
        if (lamp == 4) {
            lampu4.src = "assets/images/off.png";
        }
    }
}

function saklarTAMU() {
    let toggle4 = document.getElementById("default-toggle5");
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");

if (toggle4.checked) {
        lampu1.src = "assets/images/on.png";
        lampu2.src = "assets/images/on.png";
        lampu3.src = "assets/images/on.png";
        lampu4.src = "assets/images/on.png";
    } else {
        lampu1.src = "assets/images/off.png";
        lampu2.src = "assets/images/off.png";
        lampu3.src = "assets/images/off.png";
        lampu4.src = "assets/images/off.png";
    }
}
// END UANG KELUARGA