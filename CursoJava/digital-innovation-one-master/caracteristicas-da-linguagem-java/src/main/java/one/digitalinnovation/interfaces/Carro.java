package one.digitalinnovation.interfaces;

public interface Carro extends Automovel{

    String marca(); // public é o acesso

    Double valor();

    // Não preciso sobrescrever método default
    default void ligar() {

        System.out.println("Ligando o carro!");
    }

    default String codigoRenavan() {
        return "6533jijiio";
    }

}
