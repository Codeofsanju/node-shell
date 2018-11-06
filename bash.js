const pwd=require('./pwd');
const ls=require('./ls');

function bash(){
    process.stdout.write('prompt > ');
    process.stdin.on('data', (data) =>{
        let cmd = data.toString().trim();
        // process.stdout.write('You typed: ' + cmd);
        cmd = cmd.toLowerCase();
        if(cmd === 'ls'){
            ls();    
        }
        else if(cmd === 'pwd'){
            console.log(pwd(process));
        }
        else if(cmd === 'kill' || cmd === 'exit'){
            process.exit();
        }
        process.stdout.write('\nprompt > ');

    });

} 

function lsHelper(process) {
    //console.log(process);
    console.log('mainModule.path:',mainModule.path);
}



console.log(bash());

