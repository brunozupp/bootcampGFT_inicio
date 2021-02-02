using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CursoMVC.Models
{
    public class ApplicationContext : DbContext
    {
        public virtual DbSet<Categoria> Categorias { get; set; }

        public virtual DbSet<Produto> Produtos { get; set; }

        // Responsável por configurar o Entity Framework
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.UseSqlServer("Server=DESKTOP-M2I96DS\\SQLEXPRESS;Database=CursoMvcBootcamp;Trusted_Connection=True;");

            //base.OnConfiguring(optionsBuilder);
        }

        public virtual void SetModified(object entity)
        {
            Entry(entity).State = EntityState.Modified;
        }
    }
}
