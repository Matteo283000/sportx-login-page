function seConnecter() {
    const email = document.querySelectorAll('input')[0].value;
    const password = document.querySelectorAll('input')[1].value;

    if (!email || !password) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    console.log('Connexion avec :', email, password);
    alert('Connexion réussie !');
}