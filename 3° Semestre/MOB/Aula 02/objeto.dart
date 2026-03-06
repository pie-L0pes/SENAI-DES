class animal{
  int id=1;
  String nome="";
  String especie="";
  String raca="";
  double peso=0.0;

  //metodos
  animal(this.id, this.nome, this.especie, this.raca, this.peso);
  String tudojunto(){
    return "$id, $nome, $especie, $raca, $peso";
  }
}

void main(){
  //objeto 
  animal boi = new animal(1, "Bovino","bovino", "nelori", 500);
  animal vaca = new animal(2, "Vaca","bovina", "nelori", 400);
  animal mula = new animal(3, "Cavala","Mula", "Indefinido", 200);
  animal gato = new animal(4, "Agatha","Felis", "Siames", 3);
  animal cachorro = new animal(5, "Nala","Canis", "Xitus", 5);

  print(boi.tudojunto());
  print(vaca.tudojunto());
  print(boi.tudojunto());
  print(boi.tudojunto());
  print(boi.tudojunto());
}