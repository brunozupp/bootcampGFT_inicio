package one.digitalinnovation.tipos.primitivos;

public class DefaultValues {

    public static void main(String[] args) {

        final Default d = new Default();

        // Vai retornar 0 pois não atribui e colocou o valor default
        System.out.println(d.getI());

        // Vai retornar false pois não atribui e colocou o valor default
        System.out.println(d.isActive());

    }
}

class Default {
    
    int i;
    boolean active;

    public int getI() {
        return i;
    }

    public boolean isActive() {
        return active;
    }
}
