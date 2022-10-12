<script setup lang="ts">
import { useMouse } from "./Composables/mouse.js";
import i18n from "./language/i18n";
const { x, y } = useMouse();

// Handle change language vietnam
function vietnam() {
  var eng: any = document.getElementById("eng");
  var vn: any = document.getElementById("vn");
  i18n.global.locale = "vn";
  vn.style.display = "none";
  eng.style.display = "block";
}

// Handle change language english
function english() {
  var eng: any = document.getElementById("eng");
  var vn: any = document.getElementById("vn");
  i18n.global.locale = "en";
  vn.style.display = "block";
  eng.style.display = "none";
}
</script>
<template>
  <header>
    <div class="wrapper">
      <div class="card">
        <div class="card-top">
          <div class="top-back">
            <i class="far fa-sun"></i>
          </div>
          <div class="top-language">
            <div class="vn" id="vn" @click="vietnam">
              <img src="./assets/vietnam.png" />
            </div>
            <div class="eng" id="eng" @click="english">
              <img src="./assets/4060233.png" />
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="avatar">
            <div class="circle-big"></div>
            <div class="circle-small"></div>
            <img src="./assets/avatar.jpg" alt="" />
          </div>
          <div class="info">
            <div class="name">
              <span>{{ $t("common.name") }}</span>
            </div>
            <div class="job">
              <span>{{ $t("common.job") }}</span>
            </div>
            <div class="title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>

            <div class="button">
              <button>{{ $t("common.mouse") }} : {{ x }}, {{ y }}</button>
            </div>
            <div class="contact">
              <span><i class="fab fa-facebook"></i></span>
              <span><i class="fab fa-twitter"></i></span>
              <span><i class="fab fa-github"></i></span>
              <span><i class="fab fa-linkedin"></i></span>
              <span><i class="fab fa-instagram"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
:root {
  --primary: #26235c;
  --black: #333;
  --white: #fff;
  --boxshadow: 0px 10px 10px 10px rgba(0, 0, 0, 0.15);
}
.card {
  width: 340px;
  height: 450px;
  background: var(--white);
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -245px;
  margin-left: -170px;
  padding: 25px;
  box-shadow: var(--boxshadow);
  cursor: pointer;
}
.card-top {
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-top img {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.top-back {
  color: var(--primary);
}
.top-language {
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-content .avatar {
  display: flex;
  justify-content: center;
}
.card-content .avatar .circle-big {
  transition: all 1.5s ease-in-out;
  position: absolute;
  top: 50px;
  width: 157px;
  height: 157px;
  border-top: 3px solid var(--primary);
  border-right: 3px solid transparent;
  border-bottom: 3px solid var(--primary);
  border-left: 3px solid var(--primary);
  border-radius: 999px;
  margin-top: 10px;
}
.card-content .avatar .circle-small {
  transition: all 1.5s ease-in-out;
  position: absolute;
  top: 65px;
  width: 146px;
  height: 146px;
  border-top: 3px solid var(--primary);
  border-right: 3px solid var(--primary);
  border-bottom: 3px solid var(--primary);
  border-left: 3px solid transparent;
  border-radius: 999px;
}

.card-content .avatar img {
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 999px;
  top: 72px;
}
.card:hover .circle-small {
  transition: all 1.5s ease-in-out;
  transform: rotate(360deg);
}
.card:hover .circle-big {
  transition: all 1.5s ease-in-out;
  transform: rotate(-360deg);
}
.info {
  margin-top: 170px;
  text-align: center;
}
.info .name {
  font-size: 26px;
  font-weight: 500;
  color: #333;
}
.info .job {
  font-size: 18px;
  color: var(--primary);
}
.info .title {
  font-size: 14px;
  margin-top: 10px;
}
.button button {
  width: 280px;
  margin-top: 15px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: var(--primary);
  color: #fff;
}
.contact {
  margin-top: 20px;
  color: var(--primary);
  font-size: 25px;
}
.contact span {
  margin: 0px 15px;
}
#eng {
  display: none;
}
</style>
