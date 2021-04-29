<template>
  <div><Table border :columns="columns5" :data="Fromdata"></Table></div>
</template>
<script>
export default {
  data() {
    return {
      columns5: [
        {
          title: 'City',
          key: 'city',
          sortable: true,
        },
        {
          title: 'CoffeeAmount',
          key: 'CoffeeAmount',
        },
        {
          title: 'OrderName',
          key: 'name',
        },
        {
          title: 'Email',
          key: 'mail',
          sortable: true,
        },
      ],
      Fromdata: [],
    };
  },
  created() {
    this.Fromdata = JSON.parse(localStorage.getItem('formValidate'));
    console.log(this.Fromdata);
  },
};
</script>
