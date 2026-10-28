# Veille du portfolio v5

## 1. Mes sources

| Source                  | Langue   | Famille              | Pourquoi je la suis                                  |
| ----------------------- | -------- | -------------------- | ---------------------------------------------------- |
| CERT-FR (flux des avis) | français | sécurité             | les failles des logiciels que j'utilise              |
| Alsacréations           | français | média                | l'actualité du front-end en français                 |
| Blog de Node.js         | anglais  | officielle, sécurité | les versions LTS et les correctifs de sécurité       |
| Blog de Vite            | anglais  | officielle           | les versions de mon outil de construction            |
| JavaScript Weekly       | anglais  | lettre d'information | une sélection pour préparer la suite de la formation |

## 2. Mon outil de collecte

- Lecteur de flux : Thunderbird (flux du CERT-FR, d'Alsacréations, de Node.js et de Vite).
- Lettre d'information : JavaScript Weekly, reçue par courriel.
- Créneau : le lundi et le jeudi, de 8 h 45 à 9 h, avant de commencer la journée.

## 3. Ma première fiche de veille

### Vite 8 : `build.rollupOptions` devient `build.rolldownOptions`

- **Outil concerné** : Vite 8 (j'utilise la 8.3)
- **Type** : changement et dépréciation
- **Source** : guide de migration de Vite, https://vite.dev/guide/migration
  (annonce de Vite 8 : https://vite.dev/blog/announcing-vite8)
- **Date** : Vite 8 annoncé le 12 mars 2026 ; lu le 27 octobre 2026
- **Résumé** : Vite 8 construit les sites avec Rolldown, qui remplace Rollup et esbuild.
  L'option `build.rollupOptions` est renommée `build.rolldownOptions` ; l'ancien nom
  fonctionne encore mais sera supprimé.
- **Ce que cela change pour moi** : mon `vite.config.js` utilise déjà `rolldownOptions`.
  Si je copie un exemple plus ancien avec `rollupOptions`, je le renomme.

## 4. Audit des dépendances

Le 27 octobre 2026, dans `portfolio-v5` :

    npm audit
    found 0 vulnerabilities

Aucune faille connue aujourd'hui dans mes dépendances (toutes sont des outils de
développement : rien n'est envoyé au visiteur, à part le CSS construit). Ce résultat peut
changer sans que je modifie mon projet : je relancerai `npm audit` chaque semaine et avant
chaque mise en ligne. Si une faille apparaît : `npm audit fix`, lecture de la fiche de la
faille, puis la routine qualité ; jamais `--force` sans avoir lu ce qui change.
