const form = document.getElementById('contactForm');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(e){
    e.preventDefault();
    const data = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })

    if (response.ok) {
        this.reset()
        alert('Thanks for contact me :)');
    }
}