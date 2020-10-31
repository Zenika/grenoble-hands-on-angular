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
