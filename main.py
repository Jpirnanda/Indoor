from pymysql import cursors
from app import app
from config import mysql
from flask import jsonify
from flask import Flask, flash, request

@app.route('/create', methods=['POST'])
def create_TesteApp():
    try:        
        _json = request.json
        _senha = _json['senha']
        _email = _json['email']
        if _senha and _email and request.method == 'POST':
            conn = mysql.connect()
            cursor = conn.cursor()	
            sqlQuery = "INSERT INTO TesteApp(senha, email) VALUES(%s, %s)"
            bindData = (_senha, _email)            
            cursor.execute(sqlQuery, bindData)
            conn.commit()
            response = jsonify('Enviado com sucesso.')
            response.status_code = 200
            return response
        else:
            return showMessage()
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()          
     
@app.route('/TesteApp')
def TesteApp():
    try:
        conn = mysql.connect()
        cursor = conn.cursor(cursors.DictCursor)
        cursor.execute("SELECT id, senha, email FROM TesteApp")
        TesteAppRows = cursor.fetchall()
        response = jsonify(TesteAppRows)
        response.status_code = 200
        return response
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()  

@app.route('/TesteApp/')
def app_details(TesteApp_id):
    try:
        conn = mysql.connect()
        cursor = conn.cursor(cursors.DictCursor)
        cursor.execute("SELECT id, senha, email FROM TesteApp WHERE id =%s", TesteApp_id)
        TesteAppRow = cursor.fetchone()
        response = jsonify(TesteAppRow)
        response.status_code = 200
        return response
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close() 

@app.route('/update', methods=['PUT'])
def update_TesteApp():
    try:
        _json = request.json
        _id = _json['id']
        _senha = _json['senha']
        _email = _json['email']
        _phone = _json['phone']
        _address = _json['address']
        if _senha and _email and _phone and _address and _id and request.method == 'PUT':			
            sqlQuery = "UPDATE TesteApp SET senha=%s, email=%s WHERE id=%s"
            bindData = (_senha, _email, _id,)
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute(sqlQuery, bindData)
            conn.commit()
            response = jsonify('TesteApployee updated successfully!')
            response.status_code = 200
            return response
        else:
            return showMessage()
    except Exception as e:
        print(e)


@app.route('/delete/', methods=['DELETE'])
def delete_TesteApp(id):
	try:
		conn = mysql.connect()
		cursor = conn.cursor()
		cursor.execute("DELETE FROM TesteApp WHERE id =%s", (id,))
		conn.commit()
		response = jsonify('TesteApployee deleted successfully!')
		response.status_code = 200
		return response
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()
        
       
@app.errorhandler(404)
def showMessage(error=None):
    message = {
        'status': 404,
        'message': 'Record not found: ' + request.url,
    }
    response = jsonify(message)
    response.status_code = 404
    return response
        
if __name__ == "__main__":
    app.run()