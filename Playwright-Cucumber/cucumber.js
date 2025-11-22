
module.exports ={
    default:{
        paths:["src/features"],
        require:["src/Steps/*.ts","Hooks/Hooks.ts","World/CustomWorld.ts"],
        requireModule:['ts-node/register'],
        formatOptions:{
            snippetInterface:"async-await"
        },
        format:[
            "progress",
            "html:report/cucumber-report.html",
        ],
        timeout:180000,
        tags:'@smoke',
        dryRun : false,
        retry:2,
        parallel : 4
    }
}