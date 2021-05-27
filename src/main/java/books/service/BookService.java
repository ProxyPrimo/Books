package books.service;

import books.data.BookEntity;
import books.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class BookService {
    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<BookEntity> getAllBooks() {
        return bookRepository.findAll();
    }

    @Transactional
    public BookEntity create(BookEntity bookEntity) {
        return bookRepository.saveAndFlush(bookEntity);
    }

    public BookEntity edit(Long id, BookEntity bookEntity) {
        BookEntity dbBook = bookRepository.findById(id).orElseThrow();
        dbBook.setAuthor(bookEntity.getAuthor());
        dbBook.setTitle(bookEntity.getTitle());
        dbBook.setIsbn(bookEntity.getIsbn());

        return bookRepository.saveAndFlush(dbBook);
    }

    public void delete(Long id) {
        bookRepository.deleteById(id);
    }
}
