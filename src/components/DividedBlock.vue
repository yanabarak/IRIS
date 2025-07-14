<template>
  <div class="row">
    <div class="col-12 col-md-auto tree-structure">
      <span class="red-color">SOCIALLY HUMANITARIAN / LINGUISTICS</span><br />
      <span class="five-color" @click="selectItem('THEORY')">--THEORY</span><br />
      <span class="five-color" @click="selectItem('FOUNDATIONS')">&nbsp;&nbsp;--FOUNDATIONS</span
      ><br />
      <span class="sec-color" @click="selectItem('Alphabet')"
        >&nbsp;&nbsp;&nbsp;&nbsp;--Alphabet</span
      ><br />
    </div>

    <div class="col mt-3">
      <div v-if="selectedItem === 'THEORY'" class="content">
        <b-breadcrumb>
          <b-breadcrumb-item>SOCIALLY HUMANITARIAN / LINGUISTICS</b-breadcrumb-item>
          <b-breadcrumb-item active>THEORY</b-breadcrumb-item>
        </b-breadcrumb>
        <br />
        THEORY info
      </div>
      <div v-if="selectedItem === 'FOUNDATIONS'" class="content">
        <b-breadcrumb>
          <b-breadcrumb-item>SOCIALLY HUMANITARIAN / LINGUISTICS</b-breadcrumb-item>
          <b-breadcrumb-item @click="selectItem('THEORY')">THEORY</b-breadcrumb-item>
          <b-breadcrumb-item active>FOUNDATIONS</b-breadcrumb-item>
        </b-breadcrumb>
        <br />FOUNDATIONS info
      </div>
      <div v-if="selectedItem === 'Alphabet'" class="content">
        <b-breadcrumb>
          <b-breadcrumb-item>SOCIALLY HUMANITARIAN / LINGUISTICS</b-breadcrumb-item>
          <b-breadcrumb-item @click="selectItem('THEORY')">THEORY</b-breadcrumb-item>
          <b-breadcrumb-item @click="selectItem('FOUNDATIONS')">FOUNDATIONS</b-breadcrumb-item>
          <b-breadcrumb-item active>Alphabet</b-breadcrumb-item>
        </b-breadcrumb>
        <br />
        Alphabet info Alphabet info
      </div>

      <div v-if="!selectedItem" class="text-muted"></div>
    </div>

    <div class="back-arrow">
      <router-link to="/dashboard">
        <b-icon icon="arrow-left-square" class="icon-style"></b-icon>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    },
  },
};
</script>
