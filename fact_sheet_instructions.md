# fact-sheet

Créer un programme qui va demander à l'utilisateur diverses informations et les afficher.

prompt, objet

L'utilisateur va renseigner :
- son age
- un nom ( pseudo, prénom ...)
- un hobby

Par ex: *Vous vous appelez Roger, vous avez 48 ans et vous aimez PMU avec les copains !.*

tips:
```js
const userInfos = { alias : ""}
userInfos.alias = "jako";
```

## V1 

Stocker ses informations dans un objet puis les afficher en une seule fois.

## V2

V1
+
ajouter une validation des données :
- être majeur pour remplir le questionnaire
- un minimum de 4 caractères pour le nom

Le prompt non validé doit se répéter

## V3

V2
+
hobby devient un Array et peut recevoir plusieurs données
