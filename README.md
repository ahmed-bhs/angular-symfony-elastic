<h1>Facets de recherche angular et symfony</h1>
Version numéro 1:

<img src="https://i.imgur.com/NB1rgpm.png"/>

Version numero 2:

<img src="https://i.imgur.com/a1D5zYp.png"/>


Une petite application de facettes qui tourne principalement sur le couplage Symfony 4.1 Elasticserach 6.5 et Angular 7 notamment RXJS ... On parlera aujourd'hui technique, métier, architecture et performance... Je ai testé en quelques minutes sur une base d'un million de documents indexés et franchement le resultat était vraiement bluffant !  c'est tellemnt extra ordinaire résultat.
Bah pour les gens qui connais Une facette Je vais pas m'embettre trop, ca existe sur google
 ca rassemblle exactement à ca.... 
 En gros c'est une interface d'outils qui permet d'affiner un résultat de recherche. Imaginez un site marchand. Vous cherchez un ou plusieurs mots, par exemple : une tabllette de marque appel qui provient du Fnac comme fournisseur. Donc ou veudrais avoir notre produit qui est de catgéorie életorménagie et qui provient de Fnac ou bien d'autres fournisseur particuliers.

L'app nous fournit une liste des éléments correspondants et en général ajoute des critaires à fur et à musure pour vous aider à affiner votre recherche avec des filtres une barre de recherche, des outils de trie eetc...
Pour ce faire il y a pas mal de possiblité, personnlement j'ai choisi le stack technique symfony pour L'api et angular pour lapartie client..

L'API : 
Symfony comme API RESTFULL ,je dis bien restfull qui respecte les 5 valuers de ridrachardson pour l'architecture REST.

J'utiliser cependant:
FOSRESTBundle hateos Bzinga- Serialiszation JMS serilaizeur ...
- Lexik jwt pour l'authentification pour le gurad authentification et les autorisations, avec les cookies JWT afind 'éviter

- JWT refresh pour le refech de token..

- la bib Elastica php pour l'intégration d'elasticsearch avec symfony...
- Le caching avec doctrine et des requettes http
- Une architecture logiciel proche de DRY en se basant sur les prinicpes solides de la programtions orienté objets.
-------------------
Pour la partie client afin de consomer notre API j'ai eu recour au framework angular provenant de Google  dont sa dernière veriosn 6 et j'était vraiment surpris, vu que j'ai travaillé avec angylar Js la version 1 autrement dis...et franchment le framework a beaucoup bien évoluer pour faciliter la vie d'un dev et oufrir une experience génial.


- Le framework profite de la rigueur et flexibilité du langage TypeScript. Ecosystème très riche...
La navigation est fluidifiée grâce notamment à la synchronisation bidirectionnelle spécifique à ce framework.
- c'est vrmnt est une excellent solution pour créer des interfaces de hautes gammes et plus flexible plus moderene qui s'adapete à 2019 hhh a oui nous somme en 2019 il faudrait pas oublier ...putain les jours passes trsè vites 
Bref, quand l’utilisateur final utilise l’application il a un sentiment de réelle efficacité dans l’exécution des requêtes. Les réponses arrivent très rapidement. Sachant qu’aujourd’hui un utilisateur estime qu’une seconde est le temps d’attente admissible pour qu’une action s’exécute sur son application.

J'ai implémentés cependant
- 3 modules CORs, APP, sharing ...
-----
J'ai suit une Architectue qui se base sur l' Event sourcing dans la politique de CQRS avec des event Emetteur...afin de communiquer les donner entre differetns composant angular.
J'ai mais en place :
Composant:
pipe
Directive
Service pour la recupération des article
Un intercepteur de requette, un guard..
Lazy loading pour l'affichges d'imahges

-----------------------------------------------------------
Parlant métier et Fontionnalités: 
1- Authentification<br>
2- Inscription<br>
3- Dés que l'utilisateur sera authetntifié il aura la possibilité de consulter notre facetes de recherche.<br>

4- Paginer les artilces ..<br>
5- Faire des Trie<br>
6- LAncer uneRechercher, bien ééviemaent notre resultat provient d'elastic search suite à une indexsation deja faite. Là où cela devient très fort, c'est que cette recherche s'exécute en temps réel, qui arrivent en permanence et avec un temps de réponse assez incroyable.<br>
7- Vous remarquez ici que la chaine recheré et selectionné en surbriallance ce qu'on appelle highlighting en es.<br>
8- Filter par catgéorie, par fornisseur avec la possiblités de choisir plusieurs fornisseur concernée, 
Et du coup pour tester l'application apars les tests fonctionnels implémenté sous notre API symfony, j'ai mis en place environ 10000 articles fictives ce qu'on appelles des fixtures, afin d'assurer que tout fonctionne correctement de l'application.<br>
9- autocmpletion au niveau de notre bare de recherche.<br>
10- Un filtre par intervalle de PRIX.<br>
11 vous pouvez annuler le filtreappliquer ou bien la recherche qui était lacné.<br>
12- Dans la même requête, vous pouvez associer plusieurs facettes d'un seul coup.<br>

-----------------------

Perfermance :<br>
1- On recoit notre requette dans une durée de temps qui ne dépasse meme pas les 100 ms et ca en locl en mode mode developpement <br>
2- la requettes est en cache grace..<br>
3- la destruction des souscription au niveau dd'angular & était deja mis en place pour..<br>


