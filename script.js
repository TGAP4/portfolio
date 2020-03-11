const submitForm = () => {
    const contactForm = document.getElementById('contactForm');
    const data = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        message: document.getElementById('message')
    };
    const popup = document.getElementById('popup');
    let send = true;
    const asdf = [];
    for (x in data) {
        if (data[x].value === '') {
            data[x].placeholder = 'Required*';
            data[x].classList.add('missingInput');
            send = false;
            popup.style.visibility = 'visible';
            popup.style.color = '#dd2e2e';
            popup.innerHTML = 'Please fill out all fields before submitting.';
        } else {
            asdf.push(data[x].value)
        }
    }
    if (send) {
        fetch('https://stormy-chamber-64963.herokuapp.com/submit', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(asdf)
        })
        .catch(err => console.log);
        popup.style.visibility = 'visible';
        popup.style.color = '#009701';
        popup.innerHTML = 'Thank you for your message!  I will get back to you shortly.'
        contactForm.reset();
        data.name.placeholder = 'Name';
        data.name.classList.remove('missingInput');
        data.email.placeholder = 'Email';
        data.email.classList.remove('missingInput');
        data.message.placeholder = 'Message';
        data.message.classList.remove('missingInput');
    }
}

const jumpTo = (targetId) => {
    const target = document.getElementById(targetId).offsetTop;
    let repetitions = 0;
    let diff = target - document.documentElement.scrollTop;
    if (diff === 0) {
        return;
    }
    else if (diff > 0) {
        const scroll = setInterval(() => {
            if (++repetitions >= 50) {
                clearInterval(scroll);
            } else {
                window.scrollBy(0, Math.round(diff/(5 * Math.pow(1.2, repetitions))));
            }
        }, 10);
    } else {
        const scroll = setInterval(() => {
            if (++repetitions >= 50) {
                clearInterval(scroll);
            } else {
                window.scrollBy(0, Math.round(diff/(5 * Math.pow(1.2, repetitions))));
            }
        }, 10);
    }
}
