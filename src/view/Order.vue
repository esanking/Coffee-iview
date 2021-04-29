<template>
  <Row type="flex" justify="center" style="width: 100%; padding-top: 20px;">
    <Form
    ref="formValidate"
    :model="formValidate"
    :rules="ruleValidate"
    :label-width="120"
  >
    <FormItem label="Name" prop="name">
      <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="E-mail" prop="mail">
      <Input
        v-model="formValidate.mail"
        placeholder="Enter your e-mail"
      ></Input>
    </FormItem>
    <FormItem label="City" prop="city">
      <Select v-model="formValidate.city" placeholder="Select your city">
        <Option value="Chiayi">Chiayi</Option>
        <Option value="Taipei">Taipei</Option>
        <Option value="Taichung">Taichung</Option>
      </Select>
    </FormItem>
    <FormItem label="CoffeeAmount" prop="CoffeeAmount">
      <InputNumber :max="10" :min="1" v-model="formValidate.CoffeeAmount"></InputNumber>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')"
        >Submit</Button
      >
      <Button @click="handleReset('formValidate')" style="margin-left: 8px"
        >Reset</Button
      >
    </FormItem>
  </Form>
  </Row>
</template>
<script>
export default {
  data() {
    return {
      favorite: [],
      formValidate: {
        name: '',
        mail: '',
        city: '',
        CoffeeAmount: '',
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur',
          },
        ],
        mail: [
          {
            required: true,
            message: 'Mailbox cannot be empty',
            trigger: 'blur',
          },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' },
        ],
        city: [
          {
            required: true,
            message: 'Please select the city',
            trigger: 'change',
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('OrderSuccess!');
          const vm = this;
          vm.Fromdata = JSON.parse(localStorage.getItem('formValidate')) || [];
          vm.Fromdata.push(this.formValidate);
          localStorage.setItem('formValidate', JSON.stringify(vm.Fromdata));
        } else {
          this.$Message.error('Fail!');
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>
