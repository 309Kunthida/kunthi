<template>
  <div class="htmlClass">
    <h1>{{ title }}</h1>
    <form>
      <input type="studentcode" id="firstName" v-model="firstName" />
      <input type="nickname" id="secondName" v-model="secondName" />
      <input type="firstname" id="secondName" v-model="secondName" />
      <input type="lastname" id="secondName" v-model="secondName" />
      <button @click="submitForm()" class="submitForm">Submit</button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'InputPage',
  data() {
    return {
      title: 'ชื่อ',
      firstName:'กุลธิดา',
      secondName:'',
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit form')
    },
  }
}
</script>

<style scoped></style>