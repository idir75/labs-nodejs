Lab
- Création d'une application web avec node.js

Objectif
- Ce lab a pour objectif l'initialisation d'un projet node.js en utilisant les frameworks express (node pour applications web), ejs (moteur de template) et semantic UI (CSS)

Etapes
- Créer le fichier server.js
- Initialiser le projet avec la commande : npm Init
  - Cela a pour conséquence la création du fichier package.json contenant la description du projet
  - Il contient notamment la commande de démarrage du serveur : node server.js
- Installation du micro-framework express.js
  - npm i --save express
- l'option --save indique qu'on souhaite installer le package localement (uniquement pour le projet)
- Installation de nodemon pour redémarrer le serveur automatiquement après chaque modification
  - npm i --save nodemon
- pour lancer le serveur
  - npm run start
- Installation du moteur de tempate ejs
  - npm i -save ejs
- Installation du framework CSS semantic UI
- Chargement des données statiques dans node/express
  - app.use(express.static('public'))
    - Préciser à Express quel répertoire contient les fichiers statiques (dans notre exemple c'est le répertoire 'public'
    - Il est possible d'associer un mot-clé avec tout le répertoire des fichiers statiques. Dès que le mot-clé est utilisé, Express sait qu'il s'agit de ressources statiques.
- Insallation du package body-parser
  - npm i --save body-parser
- Installation de express session
  - npm i -save express-sessions
- Utilisation de la session
  - Sauvegarder des données dans la session : equest.session.error
  - Accès aux données sauvegardées dans la session : equest.session.error
- Création d'un middleware de gestion de sessions
  - Fichier de définition du middleware : middlewares/flash.js
  - Déclaration du middleware
    - module.exports = function (request, response, next)
  - Ajout d'une méthode dans la request
    - request.flash = function (type, content)
  - Ajout d'une clé dans response.locals
    -   response.locals.VARIABLE_NAME = value
  - Accès du contenu correspondant à la clé
    - response.locals.VARIABLE_NAME.PROPERTY_NAME
- Installaton de mongodb
  - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
  - 
- Installation du module mongodb
  - npm i --save mongodb
