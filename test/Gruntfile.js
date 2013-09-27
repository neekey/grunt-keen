module.exports = function (grunt) {

    /**
     * 对每个具体任务进行配置
     */
    grunt.initConfig({

        keen: {
            projectId: "**",
            writeKey: "**",
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

    grunt.task.loadTasks( '../tasks' );
    grunt.registerTask( 'default', [ 'dummy' ] );
    grunt.registerTask( '_no', [ 'dummy' ] );
    grunt.registerTask( 'dummy', function(){

        var done = this.async();

        setTimeout(function(){
            done();
        }, 2000 );
    });
};