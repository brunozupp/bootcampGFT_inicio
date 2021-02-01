namespace Modulo5.Herança
{
    public class Ponto
    {
        public int x, y;
        private int distancia;

        public Ponto(int x, int y)
        {
            this.x = x;
            this.y = y;
        }

        // Quem herdar dessa classe vai ter acesso. Mesmo se eu instanciar um objeto Ponto, não terei acesso
        // a essa função
        protected void CalcularDistancia()
        {
            //Faz alguma coisa...
            CalcularDistancia2();
        }

        private void CalcularDistancia2()
        {
            //Faz alguma coisa...
        }

        // Virtual indica que eu posso sobrescrever (override) na classe que herdar essa classe
        public virtual void CalcularDistancia3()
        {
            //Faz alguma coisa...
        }
    }
}