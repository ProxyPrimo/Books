package books.web;

import books.data.BookEntity;
import books.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/books")
    private List<BookEntity> getAll() {
        return bookService.getAllBooks();
    }

    @PostMapping("/books")
    private BookEntity create(@RequestBody BookEntity bookEntity) {
        return bookService.create(bookEntity);
    }
}
