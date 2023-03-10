from app import app
from flaskext.mysql import MySQL

mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'grupotoyoserra_toyo'
app.config['MYSQL_DATABASE_PASSWORD'] = 'GPTS!!022@ggkk!'
app.config['MYSQL_DATABASE_DB'] = 'grupotoyoserra_app'
app.config['MYSQL_DATABASE_HOST'] = '189.1.48.20'
mysql.init_app(app)

# mysql = MySQL()
# app.config['MYSQL_DATABASE_USER'] = 'root'
# app.config['MYSQL_DATABASE_PASSWORD'] = 'toyoserra'
# app.config['MYSQL_DATABASE_DB'] = 'rest-api'
# app.config['MYSQL_DATABASE_HOST'] = 'localhost'
# mysql.init_app(app)