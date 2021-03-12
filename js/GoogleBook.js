function searchGoogleBooks(){
    var txtSearch = document.querySelector("#txtSearch")
    if(txtSearch.value == ""){
        document.querySelector("#mainDiv").classList.add("hasError")
        document.querySelector("#mainDiv").innerHTML = "No search keyword provided.."
        return;
    }
    document.querySelector("#mainDiv").classList.remove("hasError")

    fetch('https://www.googleapis.com/books/v1/volumes?q='+ txtSearch.value + "&startIndex=0&maxResults=20")
    .then(response => response.json())
    .then(json => {
        var list = `<div class="row col-sm-5">Found ${json.totalItems} books </div>
        <div class="row">`
        for(let i = 0; i < json.items.length; i++){
            console.log(json.items[i].volumeInfo.title)
            var bookInfo = json.items[i].volumeInfo;
            var template = `<u1 class="col-sm-12 col-md-6 col-xl-4">`;
            template += `<a class="list-group-item list-group-item-action active" href="${json.items[i].selfLink}">${bookInfo.title} </a>`
            template += `<li class="list-group-item">Author(s): ${bookInfo.authors}</li>`
            template += `<li class="list-group-item">Publisher: ${bookInfo.publisher}</li>`
            template += `<li class="list-group-item">Published Date: ${bookInfo.publishedDate}</li>`
            template += `<li class="list-group-item">Page Count: ${bookInfo.pageCount}</li>`
            template += `<li class="list-group-item">Average Rating: ${bookInfo.averageRating}</li>`
            template += '</u1>'
            list += template;
        }
        list += `</div>`
        document.getElementById("mainDiv").innerHTML = list;
    });
}
