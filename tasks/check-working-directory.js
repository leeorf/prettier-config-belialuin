const { exec } = require('child_process');

exec("git status --porcelain", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    if (stdout) {
      console.error('Mudanças detectadas\n', stdout)
      throw new Error(`Parece que o seu working directoy não está limpo. Por favor commit suas mudanças! `)
    }
})