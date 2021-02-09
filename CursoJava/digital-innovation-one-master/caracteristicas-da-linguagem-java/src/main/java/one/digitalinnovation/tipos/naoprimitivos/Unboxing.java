package one.digitalinnovation.tipos.naoprimitivos;

public class Unboxing {

    // Dado uma classe, uma intenção de instânciar um wrapper primitivo, eu consigo adicionar
    // a um tipo primitivo

    // Autoboxing -> passo o valor puro para um tipo de objeto definido
    // Unboxing -> constroi o objeto, mas atribui a um tipo primitivo

    public static void main(String[] args) {
        int i = new Integer(3);

        int inteiro = Integer.valueOf(1024);

        //boolean b = new Boolean(true);
        boolean b2 = Boolean.TRUE;
        boolean b3 = Boolean.getBoolean("false");

    }

}
