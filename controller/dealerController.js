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
      const Dealers = await merek.findByPk({
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
    const { model, description } = body;

    Dealer.create({
      model,
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
      const { model, status, description } = req.body;

      const merek = await Dealer.findByPk(id);
      if (merek) {
        await merek.update({ model, status, description });
        res.status(200).json("Data merek berhasil di update!");
      } else {
        res.status(404).json("Barang dengan model tersebut tidak ditemukan!");
      }
    } catch (error) {
      res.status(500).json("Terjadi kesalahan saat mengupdate data");
    }
  }
  static async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const merek = await Dealer.findByPk(id);
      if (merek) {
        await merek.update({ status });
        res.status(200).json("Data Dealer berhasil di update!");
      } else {
        res.status(404).json("Barang dengan model tersebut tidak ditemukan!");
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
