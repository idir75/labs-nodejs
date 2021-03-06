Objectif du lab
- Ce lab a pour objectif la création d'une petite application web avec Node.js en utilisant les frameworks Express (Node pour applications web), MongoDB pour la persistence des données, EJS (moteur de templates) et semantic UI (CSS)

Etapes
- Créer le fichier server.js
- Initialiser le projet avec la commande : npm init
  - Cela a pour conséquence la création du fichier package.json contenant la description du projet
  - Il contient notamment la commande de démarrage du serveur : node server.js
- Installation du micro-framework express.js
  - npm i --save express
- l'option --save indique qu'on souhaite installer le package localement (uniquement pour le projet)
- Installation de nodemon pour redémarrer le serveur automatiquement après chaque modification
  - npm i --save nodemon
- pour lancer le serveur
  - npm run start
- Installation du moteur de tempate EJS
  - npm i -save ejs
- Installation du framework CSS semantic UI
- Chargement des données statiques
  - app.use(express.static('public'))
    - Préciser à Express quel répertoire contient les fichiers statiques (dans notre exemple c'est le répertoire 'public')
    - Il est possible d'associer un mot-clé avec tout le répertoire des fichiers statiques. Dès que le mot-clé est utilisé, Express sait qu'il s'agit de ressources statiques.
- Insallation du package body-parser
  - npm i --save body-parser
- Installation de express session
  - npm i -save express-sessions
- Utilisation de la session
  - Sauvegarder des données dans la session : request.session.SESSION_KEY (SESSION_KEY clé d'une donnée en session)
  - Accès aux données sauvegardées dans la session : request.session.SESSION_KEY
- Création d'un middleware de gestion des sessions
  - Fichier de définition du middleware : middlewares/flash.js
  - Déclaration du middleware
    - module.exports = function (request, response, next)
  - Ajout d'une méthode dans la request
    - request.flash = function (type, content)
  - Ajout d'une clé dans response.locals
    -   response.locals.SESSION_KEY = value
  - Accès au contenu correspondant à la clé
    - response.locals.SESSION_KEY.PROPERTY_NAME
- Installaton de MongoDB
  - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
- Installation du module MongoDB
  - npm i --save mongodb
- Création de la base de données MongoDB
  - config\mongodb_create_db.js
- Création de la collection : messages
  - mongodb_create_collection.js
- Insertion et récupération des messages
  - message.js
- Installation du package moment
  - npm i --save moment
- Configuration de la locale
 - moments.js
- Affichage du detail d'un message
  - show.ejs

Ressources
- Introduction à Express.js
  - https://www.grafikart.fr/formations/nodejs/express
  - https://www.youtube.com/watch?v=Q8wacXNngXs
- MongoDB
  - Installation https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
  - MongoDB avec NodeJS https://www.w3schools.com/nodejs/nodejs_mongodb.asp
