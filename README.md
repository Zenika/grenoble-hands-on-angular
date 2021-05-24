# Instructions

## Build app

```
npm install
npm start
```

### Customize configuration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Step 1 : Afficher la météo du jour pour Grenoble

- Sur la page d’une ville récupérer et afficher la météo du jour.
- Le page d’une ville correspond au composant `City` 
- Utiliser le [service weather](./src/app/shared/services/weather.service.ts) (`getCityTodayWeather`) pour récupérer la météo en function des coordonnées GPS de Grenoble lorsque le composant est créé : [`ngOnInit()`](https://angular.io/guide/lifecycle-hooks#lifecycle-event-sequence)
- Binder les données de la météo du jour avec le template (https://angular.io/guide/interpolation#interpolation-)

## Step 2 : Afficher la météo du jour pour toutes les villes Zenika

- Afficher toutes les villes sur la page d'accueil (https://angular.io/api/common/NgForOf)
- Utiliser les getters du [service cities](./src/app/shared/services/cities.service.ts) pour récupérer les coordonnées de la ville par son nom à partir des `params` de la route `cityName` (https://angular.io/guide/router#getting-route-information)
- Appeler le client HTTP via le *service weather* avec ces coordonnées (https://angular.io/guide/http#requesting-data-from-a-server)

## Step 3 : Afficher la météo des 8 prochains jours pour chaque ville

- Via le service weather, récupérer maintenant la météo des 8 prochains jours (`getCityNextWeekWeather`)
- Binder les données avec le template 

## Step 4 : Avoir la possibilité de passer en Fahrenheit

- Ajouter des radios boutons, checkbox ou n’importe quoi d’autre pour choisir l’unité à afficher 
- Créer une méthode ou un pipe pour retourner les degrés dans la bonne unité
- Appliquer la fonction de conversion `F = C * 9/5 + 32`

## Step 5 : Ajouter un page pour enregistrer une nouvelle ville

- Créer un nouveau composant dans le dossier `modules`
- Créer dans le router une route liée à ce composant 
- Modifier le service cities pour créer une méthode qui modifie la liste des villes
- Créer un formulaire avec des inputs pour le nom de la vile, latitude et longitude
- Appeler le service créé précédemment lors de l’envoi du formulaire 

## Bonus : Afficher la météo détaillée d'un ville

- Une seconde API sur `7timer` permet d'obtenir une météo plus détaillée avec une prévision toute les 3 heures (http://www.7timer.info/bin/civil.php?lon=0&lat=0&unit=metric&output=json)
- Créer un nouveau point d'entrée sur le service d'api pour consommer ces données
- Afficher le résultat de la météo détaillée sur la page de la ville
- Ajouter un bouton pour afficher le mode simple ou le mode détaillé 

# Instructions pour le Server-side Rendering

## Step 0 : Mettre à jour les dépendances

Avant de commencer, nous avons décidé de mettre à jour les dépendances de notre projet. On va donc passer de la v10 à la v12. On ne voudrait pas avoir trop de versions de retard et c'est toujours appréciables d'avoir les dernières nouveautés sous la main ;)

Nous avons effectué ce travail préparatoire pour vous éviter d'avoir à le faire.

Si vous voulez rejouer cette étape :
- https://update.angular.io/?v=10.1-12.0
- ou directement

```sh
ng update @angular/cli @angular/core
```

Vérifiez ensuite que votre application fonctionne toujours. 

À partir de maintenant, on prendra la page d'une ville comme base de référence pour ce TP plutôt que la racine de l'app.
Rendez vous sur la page d'une ville (ex: `/GRENOBLE`).

## Step 1 : Angular Universal

Pour ajouter Angular Universal :
```sh
ng add @nguniversal/express-engine
```

- essayez de lancer l'application en mode ssr via la nouvelle commande `npm run dev:ssr`, pas de soucis en cas d'échec, passez à la suite ;)
- commentez l'ensemble du contenu de la fonction `ngOnInit` du fichier `LMap.component.ts`
- vérifiez que l'application se lance correctement cette fois-ci : `npm run dev:ssr`
- trouvez un moyen de n'importer et de n'exécuter le code lié à la librairie `"leaflet"` uniquement coté client (indice: `PLATFORM_ID`)

## Step 2 : Service SEO

- injectez les services `Title` et `Meta` dans le composant `city.component.ts`
- affichez le nom de la ville comme titre (`<title>`) et un tag (`<meta>`) contenant une description adaptée au chargement de la page

## Step 3 : StateTransfer

La requête HTTP de récupération de prévisions météo s'exécute deux fois (une coté serveur, puis une fois coté client). Quel gâchis !

- trouvez un moyen de transférer les données coté client afin d'éviter d'avoir à re-exécuter une requête coté client. Il serait peut-être intéressant de sérialiser la réponse (tout est dans le titre 😉)

## Step 4 : StateTransfer, le retour

Sérialiser des réponses c'est bien, mais il serait préférable de ne pas avoir à le faire manuellement pour chaque service faisant des appels HTTP. 
Si seulement l'équipe d'Angular avait pensé à fournir un intercepteur http pour cela... 😏

- trouvez un moyen plus automatique de transférer les données

## Step 5 : Mettre un cache coté serveur

Les prévisions météo peuvent changer mais peut-être pas toutes les 5 minutes.
Plutôt que d'exécuter un nouveau rendu à chaque requête, il serait préférable de stocker temporairement le rendu de la page et de servir ce résultat pour les prochaines visites.

- mettez en place un cache "en mémoire" grâce au package `memory-cache` :

```sh
npm i memory-cache
```

Il est possible de passer un callback à la fonction `render` pour manipuler le html résultant du rendu :

```typescript
import * as cache from 'memory-cache';

// [...]

res.render(
  indexHtml,
  { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] },
  (_, html) => {
    cache.put(req.originalUrl, html); // mise en cache ici [1]
    res.send(html);
  }
);
```

- trouvez un moyen de retourner le html mis en cache en [1] quand celui-ci existe
- faites expirer ce cache au bout de `n` minutes/heures (au choix)

## Step 6 : Compression
Jusqu'ici, nos fichiers sont transmis non compressés. Afin d'améliorer la vitesse de téléchargement, il est préférable de diminuer leur taille en les compressant.

Il sera nécessaire de mettre les mains dans la config Webpack, et donc, pour cette étape, suivez le guide !

- installez quelques dépendances pour configurer Webpack
```sh
npm i brotli-webpack-plugin compression-webpack-plugin @angular-builders/custom-webpack:browser express-static-gzip
```
- changez le builder  par :
```json
"builder": "@angular-builders/custom-webpack:browser",
"options": {
  "customWebpackConfig": {
    "path": "./custom-webpack.config.js"
  },
  // ...
}
```

- créez le fichier `custom-webpack.config.js` avec le contenu suivant :
```javascript
const CompressionPlugin = require(`compression-webpack-plugin`);
const BrotliPlugin = require(`brotli-webpack-plugin`);

module.exports = {
  plugins: [
    new BrotliPlugin({
      asset: "[fileWithoutExt].[ext].br",
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
    }),
    new CompressionPlugin({
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      filename: "[path][base].gz",
    }),
  ],
};
```
- pour finir, remplacez la fonction `express.static` par `expressStaticGzip` et l'import qui va bien dans `server.ts` :
```typescript
import * as expressStaticGzip from 'express-static-gzip';

// [...]

expressStaticGzip(distFolder, {
  enableBrotli: true,
  orderPreference: ['br', 'gzip'],
  serveStatic: {
    maxAge: '1y',
  },
})
```

- relancez le tout et testez

Bravo vous êtes arrivés au bout de ce TP ! 👏
