<template>
  <div class="profile-container">
    <div class="profile-box">
      <div class="profile-pic"></div>
      <p class="profile-name">ZENMAI ZAMURAI</p>
    </div>
    <div class="profile-info-box">
      <div class="profile-info-list">
        <div class="profile-kind">Tweet</div>
        <div class="profile-kind">TODO</div>
        <div class="profile-kind">FIRST</div>
      </div>
      <div class="profile-info-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default"
};
</script>

<style>
.profile-container {
  margin-top: 56px;
  padding: 18px 24px 0 24px;
}

.profile-box {
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile-pic {
  margin-bottom: 30px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: gray;
}

.profile-name {
  color: #ffffff;
  font-family: Helvetica;
  font-size: 28px;
  font-weight: bold;
}

.profile-info-box {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-info-list {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  width: 100vw;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5), 0 4px 9px -3px rgba(0, 0, 0, 0.5);
}

.profile-kind {
  flex-grow: 1;
  opacity: 0.7;
  color: #ffffff;
  font-family: Helvetica;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
}

.profile-info-content {
  height: 303px;
  width: 304px;
  border-radius: 7px;
  background-color: rgba(43, 88, 118, 0.6);
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5);
}
</style>
