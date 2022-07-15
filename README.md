# Nicknames API
An API for my Nicknames App. The purpose is to fetch german words by type. 

## Use
Visit https://nicknames-api.herokuapp.com/ to get some words. The available endpoints are listed below.

## Endpoints

### GET `/api/adjective`
Fetch an adjective.

Example response:
```
{
  "success": true,
  "data": {
    "word": "mehrgeschossig"
  }
}
```
### GET `/api/compound`
Fetch a compound phrase that can be joined to a subject.

Example response:
```
{
  "success": true,
  "data": {
    "word": "Erstickungs"
  }
}
```
### GET `/api/subject`
Fetch a subject, including the genus of the word.

Example response:
```
{
  "success": true,
  "data": {
    "word": "Diskette",
    "genus": 1
  }
}
```
Genus types are:
- 0: masculine
- 1: feminine
- 2: neutral
