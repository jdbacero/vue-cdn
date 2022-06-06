app.component('home-album-add', {
    template:
    /* HTML */
    `
    <div class="input-group">
        <form class="album-form" @submit.prevent="onSubmit">
            <div class="input-group">
                <span class="input-group-text">Placeholder Picture Title</span>
                <input type="text" aria-label="Title" class="form-control" v-model="imgtitle">
                <br>
                <span class="input-group-text">Placeholder Picture Description</span>
                <input type="text" aria-label="Description" class="form-control" v-model="imgdesc">

                </div>
            <p>
                <button href="#" class="btn btn-primary my-2" type="submit" value="Submit">Add a placeholder photo!</button>
            </p>
        </form>
    </div>
    `,
    
    data() {
        return {
            imgtitle: "",
            imgdesc: "",
        }
    },
    methods: {
        onSubmit() {
            if(this.imgtitle === "" || this.imgdesc === "") {
                alert("Please fill out all the fields.")
                return
            }

            let newImg = {
                imgtitle: this.imgtitle,
                imgdesc: this.imgdesc
            }
            this.$emit('add-new-img', newImg)
            this.imgtitle = ""
            this.imgdesc = ""
        }
    },
})