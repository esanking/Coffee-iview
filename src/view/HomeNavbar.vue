<template>
  <div>
    <Layout class="layout">
      <Header class="Header">
        <Row type="flex" justify="center" class="openMenu">
          <div class="MenuIcon" @click="open"><Icon type="md-menu"
           style="color: white; font-size: 36px;" /></div>
          <Menu mode="horizontal" :theme="theme1" active-name="1" class="Menu">
            <router-link to="/"
              ><MenuItem name="1">
                <Icon type="ios-paper" />
                咖啡故事
              </MenuItem></router-link
            >
            <router-link to="/Order">
              <MenuItem name="2">
                <Icon type="ios-people" />
                咖啡購買
              </MenuItem></router-link
            >
            <router-link to="/OrderList">
            <MenuItem name="3">
              <Icon type="ios-construct" />
              購買紀錄
            </MenuItem>
            </router-link>
            <MenuItem>
              <ButtonGroup>
                <Button shape="circle" type="primary">註冊</Button>
                <Button shape="circle" type="primary">登入</Button>
              </ButtonGroup>
            </MenuItem>
          </Menu>
        </Row>
      </Header>
      <Content class="Content">
        <router-view></router-view>
      </Content>
      <Footer>
        <BackTop :height="100" :bottom="100">
          <Icon type="md-arrow-round-up" style="color: #6882d6; font-size:36px;" />
    </BackTop>
        <Row type="flex" justify="space-around">
          <div class="Footer">
            <ul style="font-size: 18px; list-style-type: none">
              <li>
                <Icon type="ios-call" />
                <b>05-1234567</b>
              </li>
              <li>
                <Icon type="ios-mail" />
                <b> CoffeeStore@gmail.com</b>
              </li>
              <li>
                <Icon type="md-clock" />
                <b>週一~週日 9:00~17:00</b>
              </li>
              <li>
                <b>僅做為個人學習使用，非商業用途。</b>
              </li>
            </ul>
          </div>
        </Row>
      </Footer>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theme1: 'dark',
      Header: '',
    };
  },
  methods: {
    open() {
      const Header = document.querySelector('.Header');
      Header.classList.toggle('open');
      console.log('123');
    },
  },
};
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.Content {
  padding-top: 64px;
  flex: 1;
}
.Menu {
  height: 100%;
  @media(max-width: 767px) {
    display: none;
  }
}
.open .Menu {
  display: flex;
  @media(max-width: 767px){
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}
.open .openMenu {
  display: flex;
  @media(max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.Header {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 2;
}
.MenuIcon {
  display: none;
  @media(max-width: 767px) {
    display: block;
  }
}
</style>
