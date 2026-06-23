document.addEventListener('DOMContentLoaded', function() {
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

    const hackyButton = document.getElementById('hacky-button');
    const hackyContainer = document.getElementById('hacky-container');

    hackyButton.addEventListener('click', function() {
        if (hackyContainer.style.display === 'grid') {
            hackyContainer.style.display = 'none';
        } else {
            hackyContainer.style.display = 'grid';
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

    const newPhotoButton = document.getElementById('new-photo-button');
    const newPhotoContainer = document.getElementById('new-photo-container');

    newPhotoButton.addEventListener('click', function() {
        if (newPhotoContainer.style.display === 'block') {
            newPhotoContainer.style.display = 'none';
        } else {
            newPhotoContainer.style.display = 'block';
        }
    });

    const anotherPhotoButton = document.getElementById('another-photo-button');
    const anotherPhotoContainer = document.getElementById('another-photo-container');

    anotherPhotoButton.addEventListener('click', function() {
        if (anotherPhotoContainer.style.display === 'block') {
            anotherPhotoContainer.style.display = 'none';
        } else {
            anotherPhotoContainer.style.display = 'block';
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

    const funButton = document.getElementById('fun-button');
    const funVideo = document.getElementById('fun-video');

    funButton.addEventListener('click', function() {
        if (funVideo.style.display === 'block') {
            funVideo.style.display = 'none';
            funVideo.pause();
        } else {
            funVideo.style.display = 'block';
            funVideo.play();
        }
    });

    const newVideoButton = document.getElementById('new-video-button');
    const newVideo = document.getElementById('new-video');

    newVideoButton.addEventListener('click', function() {
        if (newVideo.style.display === 'block') {
            newVideo.style.display = 'none';
            newVideo.pause();
        } else {
            newVideo.style.display = 'block';
            newVideo.play();
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
            textureLoader.load('images/download (1).jpg', function(texture) {
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
                '3d/ISS_stationary.glb',
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


    const cornbutton = document.getElementById('cornbutton');
    const corntainer = document.getElementById('corn');
    const cornpic = document.getElementById('cornpic');
    const cornpic2 = document.getElementById('cornpic2');

    cornbutton.addEventListener('click', function() {
        if (corntainer.style.display === 'none') {
            corntainer.style.display = 'grid';
            cornpic.style.display = 'grid';
            cornpic2.style.display = 'grid';
        } else {
            corntainer.style.display = 'none';
            cornpic.style.display = 'none';
            cornpic2.style.display = 'none';
        }
    });

    const fishpic = document.getElementById('fishpic');
    const fishbutton = document.getElementById('button2');
    const fishtext = document.getElementById('text2');

    fishbutton.addEventListener('click', function() {
        if (fishpic.style.display === 'none') {
            fishpic.style.display = 'grid';
            fishtext.style.display = 'grid';
        } else {
            fishpic.style.display = 'none';
            fishtext.style.display = 'none';        }
    });

    const silverpic = document.getElementById('silverpic');
    const silverbutton = document.getElementById('button');
    const silvertext = document.getElementById('text');

    silverbutton.addEventListener('click', function() {
        if (silverpic.style.display === 'none') {
            silverpic.style.display = 'grid';
            silvertext.style.display = 'grid';
        } else {
            silverpic.style.display = 'none';
            silvertext.style.display = 'none';        }
    });

    const bizpic = document.getElementById('bizimage');
    const bizbutton = document.getElementById('bizbutton');

    bizbutton.addEventListener('click', function() {
        if (bizpic.style.display === 'none') {
            bizpic.style.display = 'grid';
        } else {
            bizpic.style.display = 'none';        }
    });

    const macbutton = document.getElementById('macbutton');
    const macvideo = document.getElementById('macvideo');

    macbutton.addEventListener('click', function() {
        if (macvideo.style.display === 'none') {
            macvideo.style.display = 'grid';
        } else {
            macvideo.style.display = 'none';        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        const blackCat = document.getElementById('black-cat');
    
        blackCat.addEventListener('click', function() {
            alert('Thank you daemon. you found aemon. hip hip............................horay hip hip............................horay hip hip............................horay');
        });
    });
});