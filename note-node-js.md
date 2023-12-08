(En résumé, Node.js est efficace pour les applications orientées événements qui nécessitent une gestion efficace des opérations d'I/O. Son approche non bloquante permet de gérer de nombreuses connexions simultanées sans surcharger le système, ce qui en fait un choix populaire pour les applications web en temps réel, comme les applications de chat ou les jeux en ligne.)


nodejs : c'est une single-thread, basé sur un modèle d'I/O non bloquant piloté par évenement.

nodejs est parfait pour créer des application gormandes en données rapides et évolutives.

(Des entreprises comme Netflix, Ebay ont commencé à utiliser node en production)

on utilise nodejs pour : 
API avec une base de données ( de préférence Nosql )
Streaming (pensez à youtube,Netflix)
application de chat en temps réel 
Application Web coté serveur.

a neut pas utiliser avec les application avec un traitement coté serveur lourd (php,python,ruby).

pour pouvoir utiliser node.js on utilise pas les navigateur mais les terminal (exemple: dans le terminal pour on ecrit node suivie du nom du fichier) (exemple perso : node index.js)

avec node.js on peut crée c'est propre modules, pour commencer on va crée un dossier avec le modules et ensuite en fonction de ce qu'on veut faire on crée un fichier comme par exemple pour le calc on crée un fichier avec le nom calc.js.

ensuite on doit importer le fichier 


La fonction slugify dans Node.js est généralement utilisée pour convertir une chaîne de texte en une forme adaptée à une URL. Un "slug" est une chaîne de caractères qui est souvent utilisée dans les URL pour représenter le titre ou la description d'une ressource de manière conviviale pour les moteurs de recherche et les utilisateurs.