const createScene = function () {
    const canvas = document.getElementById("renderCanvas");
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(0, -1, 0), scene);
   
    light.intensity = 0.7;
    light.diffuse = new BABYLON.Color3(1, 1, 1);
    light.specular = new BABYLON.Color3(0.5, 0.5, 0.5);

    BABYLON.SceneLoader.ImportMeshAsync("", "/", "model.glb").then(function (result) {
        const modelMeshes = result.meshes;
        // Perform operations on the loaded model here
    });
    return scene;
};

const scene = createScene();
scene.createDefaultCameraOrLight(true, true, true);
scene.activeCamera.attachControl(canvas, true);
engine.runRenderLoop(function () {
    scene.render();
});