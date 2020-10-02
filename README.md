# Instructions

## Build app

```
npm install
npm run lint
npm run serve
```

### Customize configuration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Step 1 : Afficher la météo du jour pour Grenoble

- Sur la page d'une ville récupérer et afficher la météo du jour.
- Le page d'une ville correspond au composant `City` 
- Utiliser le service d'API pour récupérer la météo en function des coordonnées GPS de Grenoble lorsque le composant est créé (https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks)
- Binder les données de la météo du jour avec le template (https://vuejs.org/v2/guide/instance.html#Data-and-Methods)

## Step 2 : Afficher la météo du jour pour toutes les villes Zenika

- Utiliser les getters `Vuex` pour récupérer les coordonnées de la ville récupérée des `props` du composant (https://vuex.vuejs.org/guide/getters.html)
- Appeler le service d'API avec ces coordonnées

## Step 3 : Afficher la météo des 8 prochains jours pour chaque ville

- Via le service d'API récupérer maintenant la météo des 8 prochains jours
- Binder les données avec le template 

## Step 4 : Avoir la possibilité de passer en Fahrenheit

- Ajouter des radios boutons, checkbox ou n'importe quoi d'autre pour choisir l'unité à afficher 
- Créer une méthode VueJS pour retourner les degrees dans la bonne unité (https://vuejs.org/v2/api/#methods)
- Appliquer la fonction de conversion `F = C * 9/5 + 32`

## Step 5 : Ajouter un page pour enregistrer une nouvelle ville

- Créer un nouveau composant dans le dossier `views`
- Créer dans le router une route liée à ce composant 
- Modifier le store pour créer une action et une mutation (https://vuex.vuejs.org/guide/actions.html)
- Créer un formulaire avec des inputs pour le nom de la vile, latitude et longitude
- Dispatcher l'action créée précédemment lors de l'envoi du formulaire 

## Step 6 : Avoir une nouvelle page avec le details tous les trois heures
