# v13-geckos-team-03

Add-project-description-here | Voyage-13 | https://chingu.io/ | Twitter: https://twitter.com/ChinguCollabs

## backend

user in dev db with some meta records:

woobles@balala.com - password is password

## Authentication

On sucessfully logging in a cookie is attached to the response and is stored in the browser automatically.

This can be attached to requests made in the browser adding `'credentials: 'indlude` to the fetch options:

```js
const res = await fetch(`${BACKEND_URL}/api/logout`, {
  method: "GET",
  credentials: "include"
});
```

## /api/user-film-meta

#### GET /api/user-film-meta

Return all `userFilmMeta` records for the logged in user.

#### POST /api/user-film-meta

Creates a `userFilmMeta` record for logged in user storing movie database id.

```js
body: {
  filmId: ????
}
```

`filmId` is movie database film id

#### DELETE /api/user-film-meta

`docId` is value of `_id` for the record to be deleted (mongodb document id)

```js
body: {
  docId: ????
}
```
