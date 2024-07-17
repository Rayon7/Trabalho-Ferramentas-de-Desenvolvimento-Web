document.addEventListener("DOMContentLoaded", function() {
    showSection('sobre-mim'); // Mostra a seção "Sobre Mim" por padrão
  });
  // Função para mostrar uma seção específica e ocultar as outras
  function showSection(sectionId) {
    // Seleciona todas as seções com a classe 'secao-conteudo'
    var sections = document.querySelectorAll('.secao-conteudo');
     // Remove a classe 'active' de todas as seções para ocultá-las
    sections.forEach(function(section) {
      section.classList.remove('active');
    });
      // Adiciona a classe 'active' à seção correspondente ao ID fornecido
    document.getElementById(sectionId).classList.add('active');
  }
  