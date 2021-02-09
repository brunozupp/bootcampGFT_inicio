package one.digitalinnovation.tipos.tipagem;

// Criar variáveis e atribuir seus tipos de forma implicita (var)
public class TipoInferido {

    public static void main(String[] args) {

        var numero = Integer.valueOf("123456");

        var texto = "O Numero é : " ;

        System.out.println(texto + numero);

    }

}
