# ML - votre premier projet avec Tensorflow pour détecter les "du coup" !

Ce repo contient les fichiers de travail qui m'ont permis de construire un détecteur du tic de langage "du coup" à partir d'une captation audio réalisée via une page web, dans un navigateur.

J'ai présenté ce projet lors d'un "Dej'Tech" organisé par ma société [Delia Technologies](https://delia.tech) le 25 mars 2022, [diffusé en direct sur LinkedIn](https://www.linkedin.com/video/event/urn:li:ugcPost:6910159634284650496/) et sur [Youtube](https://www.youtube.com/watch?v=31-w2fRWabk&t=130s&ab_channel=DeliaTechnologies).

Les slides de cette présentation sont présents ici :
- [au format PPTX](https://github.com/JulienGremillot/du_coup/raw/6bb6324464e20b9069846b002457414b5b5cd16b/ML%20_%20votre%20premier%20projet%20avec%20Tensorflow%20pour%20d%C3%A9tecter%20les%20_du%20coup_%20_.pptx)
- [au format PDF](https://github.com/JulienGremillot/du_coup/blob/6bb6324464e20b9069846b002457414b5b5cd16b/ML%20_%20votre%20premier%20projet%20avec%20Tensorflow%20pour%20d%C3%A9tecter%20les%20_du%20coup_%20_.pdf)

## Les notebooks

J'ai inclus ici mes 3 notebooks de travail, dont l'historique pourra témoigner des différentes pistes que j'ai pu étudier pour arriver au résultat présenté.
- [du_coup.ipynb](https://github.com/JulienGremillot/du_coup/blob/main/du_coup.ipynb) dans lequel j'ai testé plusieurs approches Tensorflow - la dernière version de ce notebook utilise du transfer learning basé sur le modèle [Yamnet](https://tfhub.dev/google/yamnet/1) pour faire des prédictions sur 2 classes : "du coup" ou "pas du coup".
- [du_coup_tf_lite.ipynb](https://github.com/JulienGremillot/du_coup/blob/main/du_coup_tf_lite.ipynb) dans lequel j'ai fait des essais avec Tensorflow Lite - le modèle produit est paramétrer pour distinguer les "du coup" par rapport au "background" (un fond sonore) - mais je n'ai pas trop persévéré sur cette piste.
- [du_coup_tfjs.ipynb](https://github.com/JulienGremillot/du_coup/blob/main/du_coup_tfjs.ipynb) est celui utilisant Tensorflow Lite que j'ai utilisé pour ma présentation.

## Les données

Les notebooks mentionnés ci-dessus récupèrent les fichiers WAV en se connectant sur mon compte Google Drive qui contient les fichiers.
Je mets les fichiers [à disposition ici](https://drive.google.com/file/d/1q4VBXK441MmGUKL-co_l8K5q-k6n4Slk/view?usp=sharing) si vous souhaitez reproduire cette expérience, sachant que les fichiers du répertoire "unknown" sont issus du dataset [Voxforge](http://www.voxforge.org/fr) et que ces enregistrements sont [sous licence GPL](http://www.voxforge.org/home/docs/faq/faq/what-is-gpl).

## Le modèle

Les fichiers "metadata.json", "model.json" et les 2 fichiers ".bin" constituent le modèle Tensorflow.js qui est utilisé par les fichiers index.html & index.js pour lancer la détection.

Les fichiers codelab.html & codelab.js sont issus du codelab [TensorFlow.js - Audio recognition using transfer learning](https://codelabs.developers.google.com/codelabs/tensorflowjs-audio-codelab/index.html#0) permettant d'expérimenter avec le modèle [Speech Commands](https://github.com/tensorflow/tfjs-models/tree/master/speech-commands) à partir duquel j'ai réalisé le transfer learning pour ma détection de "du coup". De base, vous pouvez lui faire détecter les mots : "up", "down", "left", "right", "go", "stop", "yes", "no" ainsi que les chiffres de 0 à 9 en anglais ("zero" to "nine").
