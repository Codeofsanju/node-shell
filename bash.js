function bash(){
    process.stdout.write('prompt > ');
    process.stdin.on('data', (data) =>{
        let cmd = data.toString().trim();
        // process.stdout.write('You typed: ' + cmd);
        cmd = cmd.toLowerCase();
        if(cmd === 'ls'){
            lsHelper();
        }
        else if(cmd === 'pwd'){
            console.log(pwdHelper(process));
        }
        else if(cmd === 'kill' || cmd === 'exit'){
            process.exit();
        }
        process.stdout.write('\nprompt > ');

    });

} 

function lsHelper() {
    console.log(process);
}

function pwdHelper(process){
    return process.mainModule.filename;
}

console.log(bash());

