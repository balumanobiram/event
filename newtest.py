import os
import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    client = app.test_client()
    yield client

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
