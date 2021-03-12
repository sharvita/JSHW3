app.component('book-display', {
    props: {
        book: {
            type: String,
            required: true,
            default: null
        }
    },
    template:
        /*html*/ 
        ` <u1 class="col-sm-12 col-md-6 col-xl-4">
            <a class="list-group-item list-group-item-action active" :href="this.bookObj.selfLink">{{this.bookObj.volumeInfo.title}} </a>
            <li class="list-group-item">Author(s): {{this.bookObj.volumeInfo.authors}}</li>
            <li class="list-group-item">Publisher: {{this.bookObj.volumeInfo.publisher}}</li>
            <li class="list-group-item">Published Date: {{this.bookObj.volumeInfo.publishedDate}}</li>
            <li class="list-group-item">Page Count: {{this.bookObj.volumeInfo.pageCount}}</li>
            <li class="list-group-item">Average Rating: {{this.bookObj.volumeInfo.averageRating}}</li>
        </u1>`,

    computed:{
        bookObj(){
            if(this.book != null)
                return JSON.parse(this.book)
            else
                return null;
        } 
    }
})