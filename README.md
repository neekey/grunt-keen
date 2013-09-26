# grunt-keen

A grunt plugin to simplify your [keen.io](http://keen.io) use with your grunt-command tool.

## How to use

Just config `keen`, no need to run `keen` as a task, it will run whenever you execute `grunt`.

### Configs

- `projectId` The projectId for your keen project.
- `writeKey` The writeKey for your keen project.
- `data` Additional data you want to push to Keen. By default, this plugin will push these fields for you:
    - `userId` Every time this plugin executing, it will check if a `.grunt-keen-identity` file is in your HOME directory, then read the unique IDENTITY from this file. If it doesn't exist, make one and generate a new IDENTITY as userId and save to this file.
    - `command` The grunt command you use.
    - `argv` The arguments you specified with grunt command.
    - `env` Environment info. For now only OS.
- `eventName` Event Collection name.
- `forbid`  You can set this to `true` to disabled `grunt-keen`, or you can use a Function, return `true` or `false` depend or your situation.

## Example

```js
grunt.initConfig({

   keen: {
       projectId: "*****",
       writeKey: "*****",
       data: {
           repoInfo: {
               URL: 'http://github.com/neekey/grunt-keen',
               author: 'neekey',
               email: 'ni184775761@gmail.com'
           },
           other: {
               styleEngine: 'SASS'
           }
       },
       forbid: function(){
           return false;
       },
       eventName: 'test'
   }
});
```

Enjoy!