import pymysql
from app import app
from config import mysql
from flask import jsonify
from flask import flash, request

@app.route('/create', methods=['POST'])
def create_TesteApp():
    try:        
        _json = request.json
        _senha = _json['senha']
        _email = _json['email']
        if _senha and _email and request.method == 'POST':
            conn = mysql.connect()
            cursor = conn.cursor(pymysql.cursors.DictCursor)		
            sqlQuery = "INSERT INTO TesteApp(senha, email) VALUES(%s, %s)"
            bindData = (_senha, _email)            
            cursor.execute(sqlQuery, bindData)
            conn.commit()
            respone = jsonify('Employee added successfully!')
            respone.status_code = 200
            return respone
        else:
            return showMessage()
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()          
     
@app.route('/get')
def emp():
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT id, senha, email FROM TesteApp")
        TesteAppRows = cursor.fetchall()
        respone = jsonify(TesteAppRows)
        respone.status_code = 200
        return respone
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()  

@app.route('/get/')
def TesteApp_details(TesteApp_id):
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT id, senha, email FROM TesteApp WHERE id =%s", TesteApp_id)
        TesteAppRow = cursor.fetchone()
        respone = jsonify(TesteAppRow)
        respone.status_code = 200
        return respone
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
        if _senha and _email and _id and request.method == 'PUT':			
            sqlQuery = "UPDATE TesteApp SET senha=%s, email=%s WHERE id=%s"
            bindData = (_senha, _email, _id,)
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute(sqlQuery, bindData)
            conn.commit()
            respone = jsonify('Employee updated successfully!')
            respone.status_code = 200
            return respone
        else:
            return showMessage()
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close() 

@app.route('/delete/', methods=['DELETE'])
def delete_TesteApp(id):
	try:
		conn = mysql.connect()
		cursor = conn.cursor()
		cursor.execute("DELETE FROM TesteApp WHERE id =%s", (id,))
		conn.commit()
		respone = jsonify('Employee deleted successfully!')
		respone.status_code = 200
		return respone
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
    respone = jsonify(message)
    respone.status_code = 404
    return respone
        
if __name__ == "__main__":
    app.run(host="192.168.0.117", debug=True)