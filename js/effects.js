var camera, scene, renderer;
var loader = new THREE.OBJLoader();
var mLoader = new THREE.MTLLoader();

var light;

var eyeball = null;
const initEyeScale = 0.2;
var eyeScale = initEyeScale;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 0.4;

    scene = new THREE.Scene();

    light = new THREE.PointLight(0x444444);
    light.position.x = 0;
    light.position.y = 0;
    light.position.z = 0.4;
    scene.add(light);

    var mtlLoader = new THREE.MTLLoader();
    var url = "../obj/eyeball.mtl";
    mtlLoader.load( url, function( materials ) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );
        objLoader.load( '../obj/eyeball.obj', function ( object ) {

            eyeball = object;

            eyeball.scale.set(initEyeScale,initEyeScale,initEyeScale);
            eyeball.position.z = -1;

            scene.add( eyeball );

        }, function() {}, function() {} );

    });

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

}

function animate() {

    requestAnimationFrame( animate );

    renderer.render( scene, camera );

}

var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // it's up to you how you will create THREE.Plane(), there are several methods
var raycaster = new THREE.Raycaster(); //for reuse
var mouse = new THREE.Vector2();       //for reuse
var intersectPoint = new THREE.Vector3();//for reuse

function onmousemove(event) {
  //get mouse coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);//set raycaster
  raycaster.ray.intersectPlane(plane, intersectPoint); // find the point of intersection
  if (eyeball)
    eyeball.lookAt(intersectPoint); // face our arrow to this point
}

function onmousedown(event) {
  if (eyeball !== null) {
    eyeScale += 0.01;
    eyeball.scale.set(eyeScale,eyeScale,eyeScale)
  }
}

function onmouseup(event) {
  if (eyeball !== null) {
    eyeScale = initEyeScale;
    eyeball.scale.set(initEyeScale,initEyeScale,initEyeScale);
  }
}

window.addEventListener("mousemove", onmousemove, false);
window.addEventListener("mousedown", onmousedown, false);
window.addEventListener("mouseup", onmouseup, false);
