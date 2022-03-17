<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">
        Lista de Clubes
        </h2>
          <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </v-container>
</template>

<script>
export default {
    name: 'ClubesLista'
    data () {
        return:
            clubeslista: []
    }
    created() {
        fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
            .then(resposta => resposta.json())
            .then(json => {
                this.clubeslista = json
            });
            console.log(this.clubeslista);
    }
}
</script>

<style scoped>

</style>