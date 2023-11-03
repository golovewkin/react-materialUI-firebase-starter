import {commonConst} from "../constants/commonConst";

export class GroupModel {
  constructor (group) {
    if (!group.id) throw new Error('no group.id');
    if (!group.ownerId) throw new Error('no group.ownerId');
    this.id = group.id;
    this.ownerId = group.ownerId;

    this.name = group.name || '';
    this.description = group.description || '';
    this.pic = group.pic || commonConst.noPicGroup;
    this.createdAt = group.createdAt || Date.now();
    this.wordCounter = group.wordCounter || 0;
    this.cannotDelete = group.cannotDelete || false;
    this.custom = '';
  }

  id;
  ownerId;
  createdAt;
  name;
  description;
  pic;
  wordCounter;
  cannotDelete;
  custom;
}
