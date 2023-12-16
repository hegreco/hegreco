from flask import Flask

app = Flask(__name__, static_folder='/')

@app.route('/')
def homepage():
    return app.send_static_file('index.html')

@app.route('/fotos')
def fotos():
    return app.send_static_file('index_dogs.html')

@app.route('/user')
def cumprimento():
    boas_vindas = '<h1>Olá, Programadores</h1>'
    link = '<p><a href="user/Usuario">Clique Aqui!</a></p>'
    return boas_vindas + link

@app.route('/user/<nome>')
def user(nome="Usuário"):
    personalizar = f'<h1>Olá, {nome}!</h1>'
    instrucao = '<p>Altere o nome no <em>endereço do browser</em> / e recarregue a pagina.</p>'
    return personalizar + instrucao

if __name__ == '__main__':
    app.run(debug=True)
