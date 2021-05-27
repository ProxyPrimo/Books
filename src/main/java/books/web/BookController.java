package books.web;

import books.data.BookEntity;
import books.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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
    @ResponseStatus(HttpStatus.CREATED)
    private BookEntity create(@RequestBody BookEntity bookEntity) {
        return bookService.create(bookEntity);
    }

    @PatchMapping("/books/{id}")
    private BookEntity edit(@PathVariable Long id, @RequestBody BookEntity bookEntity) {
        return bookService.edit(id, bookEntity);
    }

    @DeleteMapping("/books/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    private void delete(@PathVariable Long id) {
        bookService.delete(id);
    }

    @GetMapping("/books/{id}")
    private BookEntity get(@PathVariable Long id) {
        return bookService.get(id);
    }
}
