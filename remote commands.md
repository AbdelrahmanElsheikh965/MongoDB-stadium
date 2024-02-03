# Mongo Data tools import/restore commands

## import on remote replica set

```
mongoimport --host  URL:PORT --db DB_Name --collection COLLECTION_NAME --type json --file TARGET_FILE_PATH/FILE.json --jsonArray --authenticationDatabase admin --ssl --username YOUR_USERNAME --password YOUR_PASSWORD
```

## restore on remote replica set

```
mongorestore --host URL:PORT --db DB_Name --dir BSON_Files_Directory_Path --authenticationDatabase admin --ssl --username YOUR_USERNAME --password YOUR_PASSWORD
```

