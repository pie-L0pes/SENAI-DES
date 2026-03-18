import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(title: 'IMC', home: App()));
}

//stl -> estatica
//stf -> dinamica

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  String? nome;
  double peso = 0.0;
  double altura = 0.0;
  double imc = 0.0;
  String? resultado;

  void calcular(){
    imc = peso/ (altura * altura);
    resultado = "$nome seu IMC é ${imc.toStringAsFixed(1)}";
  }

  void alert(BuildContext context, String msg) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("Mensagens"),
          content: Text(msg),
          actions: [
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text("Ok"),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            spacing: 20.0,
            children: [
              Text(
                "Indicide de massa Corpórea",
                style: TextStyle(
                  fontSize: 20.0,
                  color: Color.fromARGB(255, 28, 119, 92),
                ),
              ),
              TextField(
                decoration: InputDecoration(labelText: "Nome"),
                onChanged: (value) {
                  nome = value;
                },
              ),
              TextField(
                decoration: InputDecoration(labelText: "Peso"),
                onChanged: (value) {
                  peso = double.parse(value);
                },
              ),
              TextField(
                decoration: InputDecoration(labelText: "Altura(m)"),
                onChanged: (value) {
                  altura = double.parse(value);
                },
              ),
              ElevatedButton(
                onPressed: () {
                  calcular();
                  alert(context, "$resultado");
                },
                child: Text("ok"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
