const { WordRepository } = require('../repositories/word.repository');

const wordRepo = new WordRepository();

class WordService {
  getAllWords(conditions = {}) {
    return wordRepo.getAllByConditions(conditions);
  }

  createOneWord(data) {
    return wordRepo.insertOne(data);
  }

  createManyWord(data) {
    return wordRepo.insertMany(data);
  }

  updateWordById(id, data) {
    return wordRepo.updateById(id, data);
  }

  deleteWordById(id) {
    return wordRepo.deleteById(id);
  }
}

module.exports = {
  WordService,
};
