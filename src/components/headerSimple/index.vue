
<template>
  <header id="headSimple">
    <a href="#"<img src="#" alt="LOGO"></a>
    <span class="icon"></span>
    <h1>{{title || ''}}</h1>
  </header>
</template>



<script>
export default {
  props: ['title']
};
</script>


<style scoped>
#headSimple {
  width: 1000px;
  min-width: 1000px;
  margin: 0 auto;
  height: 88px;
  background-color: #fff;
}
#headSimple img {
  width: 196px;
  height: 58px;
  margin-left: 50px;
  margin-top: 16px;
}
.icon {
  display: inline-block;
  width: 2px;
  height: 50px;
  background-color: #dadada;
  margin-top: 6px;
  margin-left: 12px;
}
h1 {
  display: inline-block;
  font-size: 22px;
  vertical-align: top;
  margin-left: 12px;
  margin-top: 34px;
}
</style>
