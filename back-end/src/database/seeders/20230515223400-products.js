module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        id: 1,
        name: "Agenda com caneta Pollen",
        url_image: "http://localhost:3000/Produtos/agenda.jpg",
        pollens: 70,
      },
      {
        id: 2,
        name: "Caneca 400ml Pollen",
        url_image: "http://localhost:3000/Produtos/Caneca_de_porcelana.png",
        pollens: 50,
      },
      {
        id: 3,
        name: "Copo térmico de inox 500ml",
        url_image: "http://localhost:3000/Produtos/Copo_Termico_Inox.png",
        pollens: 70,
      },
      {
        id: 4,
        name: "Garrafa de Inox 500ml",
        url_image: "http://localhost:3000/Produtos/garrafa.jpg",
        pollens: 50,
      },
      {
        id: 5,
        name: "Abelhinha BEES de pelúcia",
        url_image: "http://localhost:3000/Produtos/pelucia.webp",
        pollens: 60,
      },
      {
        id: 6,
        name: "Power Bank 10000mAh Pollen",
        url_image: "http://localhost:3000/Produtos/power.jpeg",
        pollens: 70,
      },
      {
        id: 7,
        name: "Mochila Antifurto Pollen",
        url_image: "http://localhost:3000/Produtos/mochila.jpg",
        pollens: 100,
      },
      {
        id: 8,
        name: "Kit dia-a-dia Pollen (Moleskine, Garrafa Térmica e Mochila Eco)",
        url_image: "http://localhost:3000/Produtos/kit.jpg",
        pollens: 150,
      },
      {
        id: 9,
        name: "Kit Executivo Pollen (Moleskine, Caneta e Porta-Cartão Anti RFID)",
        url_image: "http://localhost:3000/Produtos/kit2.jpg",
        pollens: 150,
      },
      {
        id: 10,
        name: "Geladeira Portátil Capacidade 6 Latas",
        url_image: "http://localhost:3000/Produtos/geladeira.jpg",
        pollens: 2000,
      },
    ], { timestamps: false });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};