const { Dealer } = require("../models");

class Controller {
  static getDealer(req, res) {
    Dealer.findAll()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
  static async getById(req, res) {
    const { id } = req.params;
    try {
      const Dealers = await Dealer.findByPk({
        where: {
          id: id,
        },
      });
      response = Dealers;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
    res.status(200).json(response);
  }
  static addDealer(req, res) {
    const body = req.body;
    const { title, description } = body;

    Dealer.create({
      title,
      description,
    })
      .then((post) => {
        res.status(201).json(post);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
  static async updateData(req, res) {
    try {
      const { id } = req.params;
      const { title, status, description } = req.body;

      const Dealer = await Dealer.findByPk(id);
      if (Dealer) {
        await Dealer.update({ title, status, description });
        res.status(200).json("Data Dealer berhasil di update!");
      } else {
        res.status(404).json("Motor dengan id tersebut tidak ditemukan!");
      }
    } catch (error) {
      res.status(500).json("Terjadi kesalahan saat mengupdate data");
    }
  }
  static async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const Dealer = await Dealer.findByPk(id);
      if (Dealer) {
        await Dealer.update({ status });
        res.status(200).json("Data Dealer berhasil di update!");
      } else {
        res.status(404).json("Motor dengan id tersebut tidak ditemukan!");
      }
    } catch (error) {
      res.status(500).json("Terjadi kesalahan saat mengupdate data");
    }
  }
  static async deleteData(req, res) {
    const id = Number(req.params["id"]);
    await Dealer.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(`Data Dengan id ${id} telah di hapus`);
  }
}

module.exports = Controller;
