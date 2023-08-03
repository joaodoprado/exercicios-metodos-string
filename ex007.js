const email = '.@'
const indexPonto = email.indexOf('.')
const lastIndexPonto = email.lastIndexOf('.')

if(email.includes('@') && email.includes('.')) {
    if (lastIndexPonto < email.length && "." !== email[0]) {
        console.log('E-mail válido')
    } else{
        console.log('E-mail inválido')
    }
}
