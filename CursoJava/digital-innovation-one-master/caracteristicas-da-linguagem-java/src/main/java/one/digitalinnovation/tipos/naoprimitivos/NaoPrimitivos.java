package one.digitalinnovation.tipos.naoprimitivos;

public class NaoPrimitivos {

    public static void main(String[] args) {

        String texto = "Meu texto para apresentação"; //Sequência de caracteres

        Void v; //Tipo válido

        // Objeto principal do java, todos os outros objetos extendem ele
        Object o = new Object();

        // O Integer extende Number
        Number numero = Integer.valueOf(100);

        numero.toString();
    }

}
