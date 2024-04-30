#!/bin/bash

# Demander le chemin relatif du dossier à parcourir
read -p "Veuillez saisir le chemin relatif du dossier à parcourir : " dossier

# Vérifier si le dossier existe
if [ ! -d "$dossier" ]; then
    echo "Le dossier $dossier n'existe pas."
    exit 1
fi

# Se déplacer dans le dossier spécifié
cd "$dossier" || { echo "Impossible d'accéder au dossier $dossier."; exit 1; }

# Parcourir tous les fichiers du dossier
for fichier in *; do
    # Ajouter le fichier au dépôt Git
    git add "$fichier"
    # Effectuer un commit avec le nom du fichier comme message
    git commit -m "cleaning up du fichier $fichier"
done

