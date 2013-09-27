/*
 * Grunt-Multi: Run Grunt task with multi-configuration.
 */
var FS = require( 'fs' );
var PATH = require( 'path' );
var KEEN = require('keen.io');

module.exports = function (grunt) {


    // 获取配置
    var CONFIG = grunt.config( 'keen' );

    // 若添加了条件来确定是否发送数据
    if( CONFIG.forbid ){
        if( grunt.util._.isFunction( CONFIG.forbid ) ){
            if( CONFIG.forbid() ){
                return;
            }
        }
        else {
            return;
        }
    }

    var COMMAND = process.argv[ 2 ];

    // 配置KEEN
    var keen = KEEN.configure({
        projectId: CONFIG.projectId,
        writeKey: CONFIG.writeKey
    });

    var home =  process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
    var IdentifyPATH = PATH.resolve( home, '.grunt-keen-identity' );

    // 检查identify是否存在
    if( !FS.existsSync( IdentifyPATH ) ){
        FS.writeFileSync( IdentifyPATH, Date.now() + Math.random() );
    }
    var Identity = FS.readFileSync( IdentifyPATH).toString();

    var DEFAULT_DATA = {
        userId: Identity,
        command: COMMAND ? COMMAND : 'grunt',
        argv: process.argv.slice( 2 ),
        env: {
            OS: process.platform
        }
    };

    if( CONFIG.data ){
        DEFAULT_DATA = grunt.util._.merge( DEFAULT_DATA, CONFIG.data );
    }

    keen.addEvent( CONFIG.eventName, DEFAULT_DATA );
};


