
### Setting up the database
```bash
apt-get install postgresql
sudo -i -u postgres
```

```sql
CREATE DATABASE trackr;
CREATE USER trackr WITH ENCRYPTED PASSWORD 'yourpassword';
GRANT ALL PRIVILEGES ON DATABASE trackr TO trackr;
```
don't forget to add 'POSTGRESQL_USER = trackr' and 'POSTGRESQL_PASSWORD = yourpassword' to your .env file
