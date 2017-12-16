Lab
- Création d'une application web avec node.js

Objectif
- Ce lab a pour objectif l'initialisation d'un projet node.js en utilisant les frameworks express (node pour applications web), ejs (moteur de template) et semanticui (css)

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
- Installation du framework CSS semanticui
- Chargement des données statiques dans node/express : app.use(express.static('public'))
  - Préciser à Express quel répertoire contient les fichiers statiques (dans notre exemple c'est le répertoire 'public'
  - Il est possible d'associer un mot-clé avec tout le répertoire des fichiers statiques. Dès que le mot-clé est utilisé, Express sait qu'il s'agit de ressources statiques.
