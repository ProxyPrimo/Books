document.querySelector("#loadBooks").onclick = () => {
    fetch("/books")
        .then(res => res.json())
        .then(res => {
            let body = '';
            res.forEach(b => {
                body += `
            <tr>
                <td>${b.title}</td>
                <td>${b.author}</td>
                <td>${b.isbn}</td>
                <td>
                    <button class="btn-edit" data-id="${b.id}">Edit</button>
                    <button class="btn-delete" data-id="${b.id}">Delete</button>
                </td>
            </tr>`;
            });

            document.querySelector("#main-tbody").innerHTML = body;

            [...document.querySelectorAll(".btn-delete")].forEach(btn => {
                btn.onclick = e => {
                    e.preventDefault();
                    const id = e.target.getAttribute("data-id");
                    fetch(`/books/${id}`, {
                        method: "DELETE"
                    }).then(x => {
                        document.querySelector("#loadBooks").onclick();
                    })
                }
            });

            [...document.querySelectorAll(".btn-edit")].forEach(btn => {
                btn.onclick = e => {
                    e.preventDefault();
                    const id = e.target.getAttribute("data-id");

                    fetch(`/books/${id}`)
                        .then(res => res.json())
                        .then(book => {
                            document.querySelector("#title").value = book.title;
                            document.querySelector("#author").value = book.author;
                            document.querySelector("#isbn").value = book.isbn;
                            document.querySelector("#bookId").value = book.id;

                            document.querySelector("#edit-btn").style = "display: block";
                            document.querySelector("#create-btn").style = "display: none";
                        })
                }
            })
        })
};

document.querySelector("#create-btn").onclick = e => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    const body = {
        title
        , author
        , isbn
    };

    fetch("/books", {
        body: JSON.stringify(body)
        , method: 'POST'
        , headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(() => {
            document.querySelector("#loadBooks").onclick();
        })
}

document.querySelector("#edit-btn").onclick = e => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    const bookId = document.querySelector("#bookId").value;

    const body = {
        title
        , author
        , isbn
    };

    fetch(`/books/${bookId}`, {
        body: JSON.stringify(body)
        , method: 'PATCH'
        , headers: {
            "Content-type": "application/json"
        }
    }).then(() => document.querySelector("#loadBooks").onclick())
}


document.querySelector("#loadBooks").onclick();