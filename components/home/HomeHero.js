app.component('home-hero', {
    props: {
        "title": {
            type: String,
            required: true
        },
        "main-text": {
            type: String,
            required: true
        }
    },
    template:
    /* html */
    `
    <div class="bg-light text-secondary px-4 py-5 text-center">
        <div class="py-5">
            <h1 class="display-5 fw-bold text-black">{{ title }}</h1>
            <div class="col-lg-6 mx-auto">
                <p class="fs-5 mb-4">
                    {{ mainText }}
                </p>
            </div>
        </div>
    </div>
    `,
})