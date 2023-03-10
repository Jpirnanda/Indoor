import _mysql_connector
import mysql.connector
import os

senha= "Jao"
email= "jao@irfsdfsdfsdanda"


conn = mysql.connector.connect(host='189.1.48.20',user="grupotoyoserra_toyo",password="GPTS!!022@ggkk!",database="grupotoyoserra_app")
print(conn)

mycursor = conn.cursor()

mycursor.execute("CREATE TABLE Teste (id serial primary key, name VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), address VARCHAR(255))")
#mycursor.execute("CREATE TABLE TesteApp (id int(11) NOT NULL,senha varchar(255),email varchar(255) NOT NULL)")
#mycursor.execute("ALTER TABLE emp ADD PRIMARY KEY (id);")
mycursor.execute("ALTER TABLE emp MODIFY id int(11) NOT NULL AUTO_INCREMENT;")

# mycursor.execute("INSERT INTO TesteApp (email,senha) VALUES (%s, %s)",
#      (email,senha))

# mycursor.execute("INSERT INTO TesteApp (email,senha) VALUES (%s, %s)",
#     (email,senha))

# mycursor.execute("INSERT INTO TesteApp (senha,email) VALUES (%s, %s)",
#      (email,senha))


mycursor.execute("SELECT * FROM emp")
myresult = mycursor.fetchall()
print(myresult)
conn.commit()
conn.close()