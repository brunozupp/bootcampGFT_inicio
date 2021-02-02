using CursoAPI.Controllers;
using CursoMVC.Models;
using Microsoft.EntityFrameworkCore;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace CursoTest
{
    public class CategoriasControllerTest
    {
        private readonly Mock<DbSet<Categoria>> _mockSet;
        private readonly Mock<ApplicationContext> _mockContext;
        private readonly Categoria _categoria;

        public CategoriasControllerTest()
        {
            _mockSet = new Mock<DbSet<Categoria>>();
            _mockContext = new Mock<ApplicationContext>();
            _categoria = new Categoria { Id = 1, Descricao = "Teste Categoria" };

            // O categorias do mockContext se refere ao mockSet
            _mockContext.Setup(m => m.Categorias).Returns(_mockSet.Object);

            // É preciso ensinar o que os métodos farão
            _mockContext.Setup(m => m.Categorias.FindAsync(1)).ReturnsAsync(_categoria);

            _mockContext.Setup(m => m.SetModified(_categoria));

            _mockContext.Setup(m => m.SaveChangesAsync(It.IsAny<CancellationToken>()))
                .ReturnsAsync(1);
        }

        [Fact]
        public async Task Get_Categoria()
        {
            var service = new CategoriasController(_mockContext.Object);

            await service.GetCategoria(1);

            // Vai verificar se executou o FindAsync uma única vez na
            // implementação que está lá na variável service que está
            // na minha controller da API
            _mockSet.Verify(m => m.FindAsync(1), Times.Once());
        }

        [Fact]
        public async Task Put_Categoria()
        {
            var service = new CategoriasController(_mockContext.Object);

            await service.PutCategoria(1, _categoria);

            _mockContext.Verify(m => m.SaveChangesAsync(It.IsAny<CancellationToken>()), 
                Times.Once());
        }

        [Fact]
        public async Task Post_Categoria()
        {
            var service = new CategoriasController(_mockContext.Object);

            await service.PostCategoria(_categoria);

            _mockSet.Verify(x => x.Add(_categoria), Times.Once);

            _mockContext.Verify(m => m.SaveChangesAsync(It.IsAny<CancellationToken>()), 
                Times.Once()); ;
        }

        [Fact]
        public async Task Delete_Categoria()
        {
            var service = new CategoriasController(_mockContext.Object);

            await service.DeleteCategoria(1);

            _mockSet.Verify(m => m.FindAsync(1), Times.Once());

            _mockSet.Verify(x => x.Remove(_categoria), Times.Once());

            _mockContext.Verify(m => m.SaveChangesAsync(It.IsAny<CancellationToken>()), 
                Times.Once());
        }
    }
}
