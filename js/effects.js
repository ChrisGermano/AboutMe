var camera, scene, renderer;
var geometry, material, mesh;
var loader = new THREE.OBJLoader();

var light;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 0.4;

    scene = new THREE.Scene();

    light = new THREE.PointLight(0xFFFFFF);
    light.position.x = 0;
    light.position.y = 0;
    light.position.z = 0.4;
    scene.add(light);

    loader.load(
      './obj/moon.obj',
      function(object) {
        scene.add(object);
      },
      function(xhr) {
        console.log((xhr.loaded/xhr.total * 100) + "% loaded");
      },
      function(error) {
        console.log("An error happened");
      }
    )

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

}

function animate() {

    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render( scene, camera );

}
