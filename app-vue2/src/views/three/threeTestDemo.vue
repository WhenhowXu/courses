<template>
  <div ref="containerRef" class="container"></div>
</template>
<script>
import * as THREE from "three";
export default {
  name: "ThreeTestDemo",
  methods: {
    initDemo() {
      const camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        10
      );
      camera.position.z = 1;

      const scene = new THREE.Scene();

      const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      const material = new THREE.MeshNormalMaterial();

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      function animation(time) {
        mesh.rotation.x = time / 2000;
        mesh.rotation.y = time / 1000;

        renderer.render(scene, camera);
      }
      renderer.setAnimationLoop(animation);
      const container = this.$refs.containerRef;
      container.appendChild(renderer.domElement);
    },
  },
  mounted() {
    this.initDemo();
    window.addEventListener("resize", this.initDemo, false);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.initDemo, false);
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
}
</style>
