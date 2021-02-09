import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Desafio2 {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        Integer idadeDias = Integer.parseInt(br.readLine());

        int anos = idadeDias / 365;
        idadeDias -= anos * 365;

        int meses = idadeDias / 30;
        idadeDias -= meses * 30;

        int dias = idadeDias;

        System.out.println(anos + " ano(s)");
        System.out.println(meses + " mes(es)");
        System.out.println(dias + " dia(s)");
    }
}
