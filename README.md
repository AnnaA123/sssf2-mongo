# sssf2-mongo

---

http://book-app.jelastic.metropolia.fi/station

- GET all stations
- POST a station (Title, Town, AddressLine1, StateOrProvince, Postcode, lat, lng)

book-app.jelastic.metropolia.fi/station/:id

- GET station by id (i.e. http://book-app.jelastic.metropolia.fi/station/5e590b0a7536c009841db2df)
- DELETE station by id

http://book-app.jelastic.metropolia.fi/station?sort=5&limit=10

- (GET) sort 5 and limit 10 stations (amounts can be changed)

book-app.jelastic.metropolia.fi/station?town=

- GET all stations in a town (i.e. http://book-app.jelastic.metropolia.fi/station?town=Espoo)

---

(Currently not working):

book-app.jelastic.metropolia.fi/cat

- GET all cats
- POST a cat (name, age, genre)

book-app.jelastic.metropolia.fi/cat/:id

- GET one cat by id

book-app.jelastic.metropolia.fi/cat?genre=

- GET all cats of a certain genre (i.e. book-app.jelastic.metropolia.fi/cat?genre=robot)
