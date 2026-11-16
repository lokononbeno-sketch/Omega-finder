# Ω OMEGA FINDER

**Personal Edition** — assistant privé pour organiser les pistes de récupération de ses anciens comptes sociaux, avec Facebook comme priorité.

## État actuel — version 0.1.0

Cette première livraison contient une interface responsive :
- formulaire de recherche par e-mail, téléphone et nom de profil ;
- validation locale des champs ;
- présentation explicite des limites de la première version ;
- manifeste web permettant de préparer l'installation comme application web.

**Aucune recherche Facebook réelle n'est effectuée.** Le formulaire ne transmet et ne sauvegarde aucune donnée.

## Limites et règles de sécurité

Facebook ne fournit pas à une application indépendante un accès libre à sa base de comptes ni à la date de dernière activité des profils. Les futures fonctions devront s'appuyer uniquement sur les mécanismes officiels de récupération, les autorisations proposées par les plateformes et les données auxquelles le propriétaire a légitimement accès.

Le projet ne doit jamais :
- deviner, tester, collecter ou stocker des mots de passe ;
- contourner les protections ou limites de Facebook ;
- rechercher des coordonnées privées ou des comptes sans autorisation ;
- prétendre connaître la dernière activité sans source fiable.

## Lancer localement

Ouvre le fichier index.html dans un navigateur ou sers le dossier avec un serveur web statique.

## Déploiement web

Le site peut être publié sur un hébergement statique, par exemple GitHub Pages. Pour l'instant, il ne contient ni serveur, ni base de données, ni authentification. **Ne saisis pas de véritables données personnelles dans une version publique.**

## Prochaines étapes

1. Mettre le dépôt GitHub en privé.
2. Ajouter une authentification réservée au propriétaire.
3. Concevoir une méthode de récupération Facebook officielle et vérifiable.
4. Ajouter un stockage chiffré seulement si nécessaire.
5. Préparer l'emballage Android avec Capacitor et tester l'APK.

## Structure

- index.html — structure de l'interface
- style.css — design responsive violet et sombre
- app.js — validation locale du formulaire
- manifest.json — métadonnées d'installation web
- README.md — documentation du projet
