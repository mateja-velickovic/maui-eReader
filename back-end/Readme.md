# Application backend "Passion Lecture"

Le but de cette application backend est de fournir une API REST pour permettre la gestion du site "Passion lecture".

## Définition des routes

| Verbe HTTP | URI                        | JSON                                 | Description                                       |
| ---------- | -------------------------- | ------------------------------------ | ------------------------------------------------- |
| GET        | /api/books/                |                                      | Obtenir la liste des livres                       |
| GET        | /api/books/:id/            |                                      | Obtenir un livre                                  |
| GET        | /api/books/:id/comments/   |                                      | Obtenir tous les commentaires d'un livre          |
| GET        | /api/books/:id/notes/      |                                      | Obtenir toutes les notes d'un livre               |
| POST       | /api/books/                | { title: '', numberOfPages: '', etc} | Ajouter un nouveau livre avec catégorie et auteur |
| POST       | /api/books/:id/comments/   | { comment: ''}                       | Commenter un livre                                |
| POST       | /api/books/:id/notes/      | { note: ''}                          | Evaluer un livre                                  |
| PUT        | /api/books/:id/            | { title: '', numberOfPages: '', etc} | Modifier un livre                                 |
| DELETE     | /api/books/:id/            |                                      | Supprimer un livre                                |
| GET        | /api/categories/           |                                      | Obtenir la liste des catégories                   |
| GET        | /api/categories/:id        |                                      | Obtenir une catégorie                             |
| GET        | /api/categories/:id/books/ |                                      | Obtenir tous les livres de cette catégorie        |
| GET        | /api/authors/              |                                      | Obtenir la liste des auteurs                      |
| GET        | /api/authors/:id/          |                                      | Obtenir un auteur                                 |
| GET        | /api/authors/:id/books/    |                                      | Obtenir tous les livres de cet auteur             |
| GET        | /api/users/:id/books/      |                                      | Obtenir tous les livres d'un utilisateur          |
