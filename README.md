# v13-geckos-team-03

Add-project-description-here | Voyage-13 | https://chingu.io/ | Twitter: https://twitter.com/ChinguCollabs

## backend

user in dev db with some meta records:

woobles@balala.com
password

### Get Hearts

GET /api/user-film-meta

returns hearts for logged in user

### Toggle Hearts

save a heart:

POST -> /api/user-film-meta
-> body: { filmId: filmId }

remove a heart:

DELETE -> /api/user-film-meta - body = { film_id: film_id }
