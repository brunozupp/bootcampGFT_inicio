package aulas.trabalhandoComDatas.javaLocalDate;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

/**
 * Exemplo de como manipular LocalDateTime
 */
public class Exemplo014 {
    public static void main(String[] args) {

        LocalDateTime agora = LocalDateTime.now();

        System.out.println(agora);
        // 2019-07-15T00:02:16.076

        LocalDateTime futuro = agora.plusHours(1).plusDays(2).plusSeconds(12);

        System.out.println(futuro);
        // 2019-07-17T01:02:28.076

        LocalDateTime exercise = LocalDateTime.of(LocalDate.of(2010,05,15), LocalTime.of(10,0,0));
        exercise = exercise.plusYears(4).plusMonths(6).plusHours(13);
        System.out.println(exercise);
    }
}
