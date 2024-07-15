import os
import pytest
from app import app, init_db, get_db_connection

@pytest.fixture
def app():
    os.environ['FLASK_ENV'] = 'testing'
    app.config['TESTING'] = True
    app.config['DATABASE_URL'] = 'postgresql://username:password@localhost:5432/test_todos_db'
    
    with app.app_context():
        init_db()
        yield app
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('DROP TABLE todos')
        conn.commit()
        cur.close()
        conn.close()

@pytest.fixture
def client(app):
    return app.test_client()

@pytest.fixture
def runner(app):
    return app.test_cli_runner()

def test_create_todo(client):
    response = client.post('/api/todos', json={
        'task': 'Test Task'
    })
    assert response.status_code == 201
    assert response.get_json()['task'] == 'Test Task'

def test_get_todos(client):
    response = client.get('/api/todos')
    assert response.status_code == 200
    assert type(response.get_json()) == list

def test_update_todo(client):
    response = client.post('/api/todos', json={
        'task': 'Test Task'
    })
    todo_id = response.get_json()['id']

    response = client.put(f'/api/todos/{todo_id}', json={
        'task': 'Updated Task'
    })
    assert response.status_code == 200
    assert response.get_json()['task'] == 'Updated Task'

def test_delete_todo(client):
    response = client.post('/api/todos', json={
        'task': 'Test Task'
    })
    todo_id = response.get_json()['id']

    response = client.delete(f'/api/todos/{todo_id}')
    assert response.status_code == 204
