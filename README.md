<h1>Facettes de recherche Angular et Symfony</h1>
Version numéro 1:

<img src="https://i.imgur.com/NB1rgpm.png"/>

Version numéro 2:

<img src="https://i.imgur.com/a1D5zYp.png"/>


Une petite application de facettes qui tourne principalement sur le couplage Symfony 4.1 Elasticserach 6.5 et Angular 7 notamment RXJS ...
Testé en quelques sur une base d'un million de documents indexés et franchement le résultat était vraiment bluffant ! 

En gros, une facette c'est une interface d'outils qui permet d'affiner un résultat de recherche. Imaginez un site marchand. Vous cherchez un ou plusieurs mots, par exemple : une tabllette de marque appel qui provient du Fnac comme fournisseur. Donc ou veudrais avoir notre produit qui est de catégorie électroménagère et qui provient de Fnac ou bien d'autres fournisseurs particuliers.

L'application nous fournit une liste des éléments correspondants et en général ça donne la possibilité d'ajouter des critères à fur et à mesure pour vous aider à affiner votre recherche avec des filtres une barre de recherche, des outils de trier eetc...
Pour ce faire il y a pas mal de possibilité, personnellement j'ai choisi le stack technique Symfony pour L'api et Angular pour lapartie client..

L'API : 
Symfony comme API RESTFULL ,je dis bien restfull qui respecte les 5 valeurs du modèle de Richardson pour l'architecture REST.

J'utilise cependant :

FOSRESTBundle hateos Bzinga- Serialiszation JMS serilaizeur ...
- Lexik jwt pour l'authentification pour le gurad authentification et les autorisations, avec les cookies JWT afind 'éviter

- JWT refresh pour le refesh de token..

- la bib Elastica php pour l'intégration d'elasticsearch avec symfony...
- Le caching avec doctrine et des requettes http
- Une architecture logiciel proche de DRY en se basant sur les principes solides de la programmations oo.
-------------------
Pour la partie client afin de consommer notre API j'ai eu recour au framework angular provenant de Google  dont sa dernière version 6 et j'étais vraiment surpris, vu que j'ai travaillé avec angylar Js la version 1 autrement dis...et franchment le framework a beaucoup bien évoluer pour faciliter la vie d'un dev et offrir une expérience génial.


- Le framework profite de la rigueur et flexibilité du langage TypeScript. Écosystème très riche...
La navigation est fluidifiée grâce notamment à la synchronisation bidirectionnelle spécifique à ce framework.
- c'est vrmnt est une excellent solution pour créer des interfaces de hautes gammes et plus flexible plus moderne.
Bref, quand l’utilisateur final utilise l’application il a un sentiment de réelle efficacité dans l’exécution des requêtes. Les réponses arrivent très rapidement. Sachant qu’aujourd’hui un utilisateur estime qu’une seconde est le temps d’attente admissible pour qu’une action s’exécute sur son application.

J'ai implémenté cependant
- 3 modules CORs, APP, sharing ...
-----
J'ai suivi une Architectue qui se base sur l' Event sourcing dans la politique de CQRS avec des event Emetteur...afin de communiquer les donner entre différents composant angular.
J'ai mais en place :
Composant:
pipe
Directive
Service pour la récupération des article
Un intercepteur de requête, un guard..
Lazy loading pour l'affichage d'images

-----------------------------------------------------------
Parlant métier et Fonctionnalités : 

1- Authentification<br>
2- Inscription<br>
3- Dés que l'utilisateur sera authetntifié il aura la possibilité de consulter notre facetes de recherche.<br>

4- Paginer les artilces ..<br>
5- Faire des Trie<br>
6- LAncer uneRechercher, bien évidemment notre résultat provient d'elastic search suite à une indexsation deja faite. Là où cela devient très fort, c'est que cette recherche s'exécute en temps réel, qui arrivent en permanence et avec un temps de réponse assez incroyable.<br>
7- Vous remarquez ici que la chaine recherchée et sélectionné en surbrillance ce qu'on appelle highlighting en es.<br>
8- Filter par catégorie, par fournisseur avec la possibilités de choisir plusieurs fournisseurs concernés, 
Et du coup pour tester l'application apars les tests fonctionnels implémenté sous notre API symfony, j'ai mis en place environ 10000 articles fictifs ce qu'on appelle des fixtures, afin d'assurer que tout fonctionne correctement de l'application.<br>
9- autocomplétion au niveau de notre bare de recherche.<br>
10- Un filtre par intervalle de PRIX.<br>
11 vous pouvez annuler le filtre, appliquer ou bien la recherche qui était lancé.<br>
12- Dans la même requête, vous pouvez associer plusieurs facettes d'un seul coup.<br>

-----------------------

Performance :<br>
1- On reçoit notre requête dans une durée de temps qui ne dépasse même pas les 100 ms et ca en local en mode  developpement <br>
2- les requêtes sont mis en cache grace..<br>
3- la destruction des souscriptions au niveau d'Angular & était deja mis en place pour..<br>



