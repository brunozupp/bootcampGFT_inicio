namespace Modulo5.Herança
{
    // Todos os membros que sejam public, protected ou interno (estando no mesmo projeto)
    // seram herdados por essa classe, terei acesso a eles
    public class Ponto3D : Ponto
    {
        public int z;
        public Ponto3D(int x, int y, int z) : base(x, y)
        {
            this.z = z;
            CalcularDistancia();
        }

        public static void Calcular()
        {
            //Faz alguma coisa...
        }

        public override void CalcularDistancia3()
        {
            //Faz outra coisa ...
            base.CalcularDistancia3();
        }
    }
}