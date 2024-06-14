// created a function that reflashes the meanings of the built-in global functions;
function mixBuiltins() {
    window.alert = confirm;
    window.confirm = prompt;
    window.prompt = alert;
}
// example of usage;
mixBuiltins();

alert('This is new alert');
prompt('This is new prompt');
confirm('This is new confirm');