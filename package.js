Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-core',
  summary: 'Fork of iron:core for Firestorm',
  version: '1.0.0',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-core'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@2.2');

  // dependencies
  api.use('underscore');
  api.use('ejson'); // for cloning

  // remove migrated version
  // api.use('cmather:iron-core@0.2.0', {weak: true});

  // api.add_files('lib/version_conflict_error.js');
  api.add_files('lib/iron_core.js');

  // symbol exports
  api.export('Iron');
});

Package.on_test(function (api) {
  api.use('meteorhubdotnet:firestorm-iron-core');
  api.use('tinytest');
  api.use('test-helpers');
  api.add_files('test/iron_core_test.js');
});
