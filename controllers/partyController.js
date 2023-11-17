const PartyModel = require("../models/Party");

const checkPartyBudget = (budget, services) => {
  const priceSum = services.reduce((sum, service) => sum + service.price, 0);
  if (priceSum > budget) {
    return false;
  }
  return true;
};

const partyController = {
  create: async (req, res) => {
    try {
      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        services: req.body.services,
      };
      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({ message: " not enough budget!!!" });
        return;
      }
      const response = await PartyModel.create(party);
      res
        .status(201)
        .json({ response, message: "Party created successfully!!!" });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const parties = await PartyModel.find();
      res.json(parties);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const party = await PartyModel.findById(id);
      res.json(party);
    } catch (error) {
      res.status(404).json({ message: "Party not found!!!" });
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const party = await PartyModel.findById(id);
      const deletedParty = await PartyModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ deletedParty, message: "Party deleted successfully" });
    } catch (error) {
      res.status(404).json({ message: "Party not found!!!" });
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        services: req.body.services,
      };
      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({ message: " not enough budget!!!" });
        return;
      }
      const updatedParty = await PartyModel.findByIdAndUpdate(id, party);
      res.status(200).json({ party, msg: "Party updated successfully!!!" });
    } catch (error) {
      res.status(404).json({ message: "Party not found!!!" });
    }
  },
};

module.exports = partyController;
