<template>
  <div class="selects">
    <div>
      <form>
        <div>
        <h1 class="title">Escolha seu Estado</h1>
      </div>
    <div>
        <select class="bg-white">
          <option v-for="(distritos) in estados" :key="distritos.id">
            <td @click="selectState(state)">{{distritos.nome}}</td>
          </option>> 
        </select>
    </div>
      </form>
    </div>

    <div>
      <form>
        <div>
          <h1 class="title">Escolha sua Cidade</h1>
        </div>
        <div>
        <select class="bg-white">
          <option v-for="municipio in municipio" :key="municipio.id" >
            <td @click="selectStates(state)">{{municipio.nome}}</td>
          </option>>
        </select>
        </div>
        </form>
    </div>
  </div>
</template>

<script>
import EstadoBusiness from "@/EstadoBusiness.js"
import CidadeBusiness from "@/CidadeBusiness.js"

import { ref } from "vue"

export default {
  name: 'App',
      async mounted() {
      await this.listarEstados(),
      await this.listarMunicipios()
  },
  data() {
      return {
          estados: [],
          municipio: []
      };
  },
  methods: {
    async listarEstados() {
      const estados = await EstadoBusiness.getEstados()
        if (estados) {
          this.estados = estados
          
          }
        else {
          console.log("Erro ao carregar estados...")    
          }
        },
        selectState(state) {
          this.stateSelected = state
        },
    async listarMunicipios() {
      const municipio = await CidadeBusiness.getCidades()
        if (municipio) {
          this.municipio = municipio
          }
        else {
          console.log("Erro ao carregar cidades...")    
          }
        },
        selectStates(state) {
          this.stateSelected = state
        },
      },
      props: ["cid"],
        setup() 
        {
          const show = ref(false);
          return {
            show
          }
        }
   }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
};

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url(https://aerospaceamerica.aiaa.org/wp-content/uploads/2022/09/Flight-Path_0000_iStock-1085287936-1200x675.jpg);
    background-size: cover;
}

.globe {
  margin: 200px 200px;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background-image: url(https://tecterra.com.br/wp-content/uploads/2018/10/mapa-3d.jpg);
    background-size: cover;
    box-shadow: -25px -25px 25px rgb(3, 16, 36) inset, 10px 10px 30px white inset, 0px 0px 20px #3a96ff;
    animation: rotate 35s linear infinite;
}
@keyframes rotate{
    to{background-position: 100%;}
}
.bg-white {
    --tw-bg-opacity: 1;
    background-color: #2c3e68;
    border: 15px #2c3e68 solid;
    width: 140px;
    color: white;

}
.pai {
  position: relative;
}
.selects{
  width: 150px;
  height: 100px;
  /* Centralizar na vertical */
  position: absolute;
  top: 40%;
  left: 85%;
}

.title{
  font-size: 15px;
  margin-bottom: 15px;
}


</style>