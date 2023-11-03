import { commonConst } from "../constants/commonConst";

export class WordModel {
  constructor(word) {
    if (!word.id) throw new Error("no word.id");
    if (!word.ownerId) throw new Error("no word.ownerId");
    this.id = word.id;
    this.ownerId = word.ownerId;

    this.groupId = word.groupId || "";
    this.word = word.word || "";
    this.translation = word.translation || "";
    this.description = word.description || "";
    this.example = word.example || "";
    this.pic = word.pic || commonConst.noPicWord;

    this.know = word.know || false;
    this.createdAt = word.createdAt || Date.now();
    this.repeatedAt = word.repeatedAt || Date.now();
    this.repeatCount = word.repeatCount || 0;
    this.custom = "";
  }

  id;
  ownerId;
  createdAt;
  word;
  pic;
  know;
  example;
  description;
  translation;
  repeatCount;
  groupId;
  custom;
}
