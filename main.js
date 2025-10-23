const firstButton = document.getElementById('first');
const singersContainer = document.getElementById('singers-container');
const greenJacketGuyButton = document.getElementById('green_jacket_guy');

firstButton.addEventListener('click', function() {
    if (singersContainer.style.display === 'grid') {
        singersContainer.style.display = 'none';
        greenJacketGuyButton.hidden = true;
    } else {
        singersContainer.style.display = 'grid';
        greenJacketGuyButton.hidden = false;
    }
});

const greenShirtContainer = document.getElementById('green-shirt-container');

greenJacketGuyButton.addEventListener('click', function() {
    if (greenShirtContainer.style.display === 'grid') {
        greenShirtContainer.style.display = 'none';
    } else {
        greenShirtContainer.style.display = 'grid';
    }
});

const motivationButton = document.getElementById('motivation');
const video = document.getElementById('motivation-video');
const audio = document.getElementById('motivation-audio');

motivationButton.addEventListener('click', function() {
    if (video.style.display === 'block') {
        video.style.display = 'none';
        video.pause();
        audio.pause();
    } else {
        video.style.display = 'block';
        video.play();
        audio.play();
    }
});

video.addEventListener('play', () => {
    audio.currentTime = video.currentTime;
});

video.addEventListener('pause', () => {
    audio.pause();
});

video.addEventListener('seeking', () => {
    audio.currentTime = video.currentTime;
});

const insideJokeButton = document.getElementById('inside_joke');
const threedContainer = document.getElementById('threed-container');
const zoomSlider = document.getElementById('zoom-slider');
const loadingMessage = document.getElementById('loading-message');

insideJokeButton.addEventListener('click', function() {
    if (threedContainer.style.display === 'block') {
        threedContainer.style.display = 'none';
        zoomSlider.style.display = 'none';
    } else {
        threedContainer.style.display = 'block';
        zoomSlider.style.display = 'block';
        loadingMessage.style.display = 'block';

        let camera;

        // Prevent multiple renders
        if (threedContainer.children.length > 0) {
            loadingMessage.style.display = 'none';
            camera = threedContainer.userData.camera;
            camera.position.z = zoomSlider.value;
            return;
        }

        // Scene
        const scene = new THREE.Scene();

        // Add background
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load('download (1).jpg', function(texture) {
            scene.background = texture;
        });

        // Camera
        camera = new THREE.PerspectiveCamera(75, threedContainer.clientWidth / threedContainer.clientHeight, 0.1, 1000);
        camera.position.z = zoomSlider.value; // Initial zoom

        // Store camera and scene for later updates
        threedContainer.userData = { scene, camera };

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(threedContainer.clientWidth, threedContainer.clientHeight);
        threedContainer.appendChild(renderer.domElement);
        
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 2);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 1);
        scene.add(directionalLight);

        // GLTF Loader
        const loader = new THREE.GLTFLoader();
        loader.load(
            'ISS_stationary.glb',
            function (gltf) {
                loadingMessage.style.display = 'none';
                const model = gltf.scene;
                scene.add(model);

                // Animation
                function animate() {
                    requestAnimationFrame(animate);

                    model.rotation.y += 0.01;

                    renderer.render(scene, camera);
                }

                animate();
            },
            undefined,
            function (error) {
                loadingMessage.style.display = 'none';
                console.error(error);
            }
        );

        // Slider event listener
        zoomSlider.addEventListener('input', function() {
            camera.position.z = this.value;
        });
    }
});