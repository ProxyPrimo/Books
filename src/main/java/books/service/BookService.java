package books.service;

import books.data.BookEntity;

import java.util.List;

public interface BookService {
    List<BookEntity> getAllBooks();

    BookEntity create(BookEntity bookEntity);

    BookEntity edit(Long id, BookEntity bookEntity);

    void delete(Long id);

    BookEntity get(Long id);

}
