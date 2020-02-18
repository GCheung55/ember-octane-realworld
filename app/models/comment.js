import Model, { attr, belongsTo } from '@ember-data/model';

export default class CommentModel extends Model {
  @attr('string') body;
  @attr('date') createdAt;
  @attr('date') updatedAt;

  @belongsTo('profile') author;
  @belongsTo('article') article;
}
