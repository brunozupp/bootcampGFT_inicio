package aulas.trabalhandoComDatas.javaDate;

import java.time.Instant;
import java.util.Date;

public class Exercicio001 {


    public static void main(String[] args) {

        //Exercicio001 e = new Exercicio001();

        //e.checaLong(1563385317992L);

        Date birthDate = new Date(687745265435L);

        Date specificDate = new Date(338516613111L);

        System.out.println(birthDate.toInstant());
        System.out.println(specificDate.toInstant());

        if(birthDate.after(specificDate)) {
            System.out.println("Minha data é posterior");
        } else {
            System.out.println("Minha data é anterior");
        }
    }


    /**
     * Exercicio 1
     *
     * Você tem um epoch (formato long) converta no formato Date
     *
     * Epoch 1563385317992
     *
     * Ponto de atenção: como você está manipulando um numero do tipo long, dependendo da maneira que você estiver
     *                   manipulando essa informação, você precisa colocar a letra l no final do numero
     *
     *
     *
     * @param epoch
     * @return
     */
    public Date checaLong(long epoch) {

        Date date = new Date(1563385317992L);

        System.out.println(date);


        return null;
    }

    /**
     *
     * @return
     */
    public long dateToLong() {



        return 0L;
    }

}
