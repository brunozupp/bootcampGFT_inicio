import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Desafio1 {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        Integer number = Integer.parseInt(br.readLine());

        for (int i =  2; i <=  number; i++) {
            if (i % 2 == 0) System.out.println(i);
        }
    }
}
