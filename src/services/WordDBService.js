import { DataBaseService } from "./DataBaseService";
import { collections } from "../constants/collections";
import { classToObject } from "../helpers/util.helper";
import { GroupDBService } from "./GroupDBService";

export class WordDBService {
  static getUserWords(user) {
    return DataBaseService.getDocumentsWhere(
      collections.words,
      "ownerId",
      user.id
    );
  }

  static async getGroupWords(user, groupId) {
    try {
      const allWords = await WordDBService.getUserWords(user);
      return allWords.filter((word) => groupId === word.groupId);
    } catch (e) {
      throw e;
    }
  }

  static async createWord(word, group) {
    try {
      //todo transaction
      await DataBaseService.updateDocument(
        classToObject(word),
        collections.words,
        word.id
      );

      if (!group) throw new Error("no group");
      const newGroup = { ...group, wordCounter: group.wordCounter + 1 };
      await GroupDBService.editGroup(newGroup);
      return newGroup;
    } catch (e) {
      throw e;
    }
  }

  static editWord(word) {
    return DataBaseService.updateDocument(
      classToObject(word),
      collections.words,
      word.id
    );
  }

  static removeWord(word) {
    return DataBaseService.removeDocument(collections.words, word);
  }

  static async searchWord(user, text) {
    try {
      if (!text) return [];
      const allWords = await WordDBService.getUserWords(user, text);
      return allWords.filter(
        (word) => text === word || text.includes(word) || word.includes(text)
      );
    } catch (e) {
      throw e;
    }
  }
}
