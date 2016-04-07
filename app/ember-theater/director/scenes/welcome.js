import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Welcome',

  start: async function(script) {
    script.Backdrop('classroom');
    const bitsy = script.Character('bitsy').position('offLeft', 0).position('center', 1500).namePosition('right');
    await bitsy.Text('theaters.welcome.bitsyGreeting');

    const emma = script.Character('emma').position('offLeft', 0).position('centerLeft', 1500);
    bitsy.delay(100).position('centerRight', 400);
    await emma.Text('theaters.welcome.emmaGreeting');

    await bitsy.Text('theaters.welcome.bitsyMakeGames');
    await emma.Text('theaters.welcome.emmaMakeGames');

    bitsy.expression('panic');
    await bitsy.Text('theaters.welcome.bitsyShock');
    bitsy.expression('laughing');
    await bitsy.Text('theaters.welcome.bitsyFun');
    emma.expression('laughing');
    await emma.Text('theaters.welcome.emmaFun');

    bitsy.expression('happy');
    emma.expression('neutral');
    await bitsy.Text('theaters.welcome.bitsyNext');
    emma.position('offLeft', 1000);
    bitsy.delay(100).position('offLeft', 1300);
  }
});
