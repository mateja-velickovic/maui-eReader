import express from 'express'
import { auth } from '../auth/auth.mjs'
import { User, Comment, Book } from '../db/sequelize.mjs' // Assuming you have a User model defined in sequelize.mjs

const usersRouter = express()

usersRouter.get('/:id', auth, async (req, res) => {
  try {
    console.log(`Fetching user with ID: ${req.params.id}`)
    const user = await User.findByPk(req.params.id)
    if (user === null) {
      const message = "Le user demandé n'existe pas. Merci de réessayer avec un autre identifiant."
      console.log(message)
      return res.status(404).json({ message })
    }
    console.log(`User found: ${user.username}`)
    res.json(user)
  } catch (error) {
    const message = "Le user n'a pas pu être récupéré. Merci de réessayer dans quelques instants."
    console.error(`Error fetching user: ${error.message}`)
    res.status(500).json({ message, data: error.message })
  }
})

usersRouter.get('/:id/comments', auth, async (req, res) => {
  try {
    console.log(`Récupération des commentaires pour l'utilisateur avec l'ID: ${req.params.id}`)
    // Utilisez l'alias correct pour l'association Sequelize entre User et Comment
    const comments = await Comment.findAll({
      where: { userId: req.params.id },
      include: [{ model: User, as: 'user' }], // Utilisez l'alias 'user' au lieu de 'User'
      attributes: { exclude: ['password'] } // Exclure le mot de passe de la réponse
    })
    if (comments.length === 0) {
      const message = 'Aucun commentaire trouvé pour cet utilisateur.'
      console.log(message)
      return res.status(404).json({ message })
    }
    console.log(`Commentaires trouvés pour l'utilisateur avec l'ID: ${req.params.id}`)
    res.json(comments)
  } catch (error) {
    const message =
      "Les commentaires n'ont pas pu être récupérés. Veuillez réessayer dans quelques instants."
    console.error(`Erreur lors de la récupération des commentaires: ${error.message}`)
    res.status(500).json({ message, data: error.message })
  }
})

usersRouter.get('/:id/comment-count', auth, async (req, res) => {
  try {
    console.log(
      `Récupération du nombre de commentaires pour l'utilisateur avec l'ID: ${req.params.id}`
    )
    // Compter le nombre de fois que l'ID de l'utilisateur apparaît dans la table des commentaires
    const commentCount = await Comment.count({
      where: { userId: req.params.id }
    })
    console.log(
      `Nombre de commentaires pour l'utilisateur avec l'ID ${req.params.id}: ${commentCount}`
    )
    res.json({ commentCount })
  } catch (error) {
    const message =
      "Le nombre de commentaires n'a pas pu être récupéré. Veuillez réessayer dans quelques instants."
    console.error(`Erreur lors de la récupération du nombre de commentaires: ${error.message}`)
    res.status(500).json({ message, data: error.message })
  }
})

usersRouter.get('/:id/book-count', auth, async (req, res) => {
  try {
    console.log(`Récupération du nombre de livre pour l'utilisateur avec l'ID: ${req.params.id}`)
    // Compter le nombre de fois que l'ID de l'utilisateur apparaît dans la table des commentaires
    const bookCount = await Book.count({
      where: { userId: req.params.id }
    })
    console.log(
      `Nombre de commentaires pour l'utilisateur avec l'ID ${req.params.id}: ${bookCount}`
    )
    res.json({ bookCount })
  } catch (error) {
    const message =
      "Le nombre de commentaires n'a pas pu être récupéré. Veuillez réessayer dans quelques instants."
    console.error(`Erreur lors de la récupération du nombre de commentaires: ${error.message}`)
    res.status(500).json({ message, data: error.message })
  }
})

export { usersRouter }
