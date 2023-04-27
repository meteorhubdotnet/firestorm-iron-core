Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-core',
  summary: 'Fork of iron:core for Firestorm',
  version: '1.0.15',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-core'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@2.11.0');

  // dependencies
  api.use('underscore');
  api.use('ejson'); // for cloning

  // remove migrated version
  // api.use('cmather:iron-core@0.2.0', {weak: true});

  // api.addFiles('lib/version_conflict_error.js');
  api.addFiles('lib/iron_core.js');

  // symbol exports
  api.export('Iron');
});

