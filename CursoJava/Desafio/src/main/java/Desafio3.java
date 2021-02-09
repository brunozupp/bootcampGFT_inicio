import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Desafio3 {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        Integer nota = Integer.parseInt(br.readLine());

        if(nota <= 0) {
            System.out.println("E");
        } else if(nota >= 1 && nota <= 35) {
            System.out.println("D");
        } else if(nota >= 36 && nota <= 60) {
            System.out.println("C");
        } else if(nota >= 61 && nota <= 85) {
            System.out.println("B");
        } else if(nota >= 86 && nota <= 100) {
            System.out.println("A");
        }

    }
}
