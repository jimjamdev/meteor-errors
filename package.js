Package.describe({
    name: 'cogo:errors',
    version: '0.0.2',
    // Brief, one-line summary of the package.
    summary: 'Error package for Meteor',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/jimmyjamieson/meteor-errors.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api, where) {
    api.versionsFrom('1.1.0.2');
    api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
    api.addFiles(['errors.js', 'errorsList.html', 'errorsList.js'], 'client');
    if (api.export)
        api.export('Errors');
});

Package.onTest(function(api) {
    api.use('tmeasday:errors', 'client');
    api.use(['tinytest', 'test-helpers'], 'client');

    api.addFiles('errors-tests.js', 'client');
});