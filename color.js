console.clear();

let root = document.getElementsByTagName('html')[0];
let color = document.querySelectorAll('input[type=color]');

// update the global css var based on the input's hex color value
for ( const prop of Object.keys(color) ) {
  const radio = color[prop];
  radio.addEventListener( 'change', (ev) => {
    root.style.setProperty( '--base-ui-color', ev.target.value );
  });
}