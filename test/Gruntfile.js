module.exports = function (grunt) {

    /**
     * 对每个具体任务进行配置
     */
    grunt.initConfig({

        keen: {
            projectId: "5243b86373f4bb052d00000b",
            writeKey: "a3738c3ed18ecc950a1f029dd45b0e0af900fcc6ab7dd7cb20f7fc0c5e4819030a575609ae3d1d4366e6ba8fce0a33f9d5f714aec6cd2d71247cf3650ece5f44a51a09d91a97e9d020e2acd47f0ad42d33fde9ffa34544024ee24a7e35619e7d34e6921f8a6d84109198ac5b38754f12",
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