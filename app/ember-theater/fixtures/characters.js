/*
  @property id {String} The id by which you'll reference this character. Not necessarily the same as the character's name.
  @property name {String} The character's name. It is to be used wherever the character is referenced to the user.
  @property height {Number} The character's height. What percentage of the screen height is fills.
  @property defaultExpressionId {String} The id of the expression that this character will use by default.

  Example:

  {
    id: 'steven',
    name: 'Steven',
    height: 60,
    defaultExpressionId: 'steven'
  }
*/

export default [{
  id: 'bitsy',
  name: 'Bitsy',
  height: 70,
  defaultExpression: 'neutral',
  expressions: {
    neutral: 'bitsy-neutral',
    happy: 'bitsy-happy',
    laughing: 'bitsy-laughing',
    bored: 'bitsy-bored',
    angry: 'bitsy-angry',
    sad: 'bitsy-sad',
    blush: 'bitsy-blush',
    embarrassed: 'bitsy-embarrassed',
    panic: 'bitsy-panic',
    surprised: 'bitsy-surprised'
  }
}, {
  id: 'emma',
  name: 'Emma',
  height: 90,
  defaultExpression: 'neutral',
  expressions: {
    neutral: 'emma-neutral',
    happy: 'emma-happy',
    laughing: 'emma-laughing',
    bored: 'emma-bored',
    angry: 'emma-angry',
    sad: 'emma-sad',
    blush: 'emma-blush',
    embarrassed: 'emma-embarrassed',
    panic: 'emma-panic',
    surprised: 'emma-surprised'
  }
}];
