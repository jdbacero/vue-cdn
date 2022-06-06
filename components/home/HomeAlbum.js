app.component('home-album', {
    data() {
        return {
            imgs: []
        }
    },
    methods: {
        addImg(data) {
            this.imgs.push(data)
        }
    },
    template:
    /* html */
    `
    <section class="py-5 text-center container">
        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">Album Placeholder</h1>
                <p class="lead text-muted">Enter a title and description for a picture and add!</p>


                <home-album-add @add-new-img="addImg"></home-album-add>
                
            </div>
        </div>
    </section>

    <div class="album py-5 bg-dark">
        <div class="container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <home-album-image v-for="(img, index) in imgs" :key="index" :title="img.imgtitle" :description="img.imgdesc"></home-album-image>
            </div>
        </div>
    </div>

    `,
})