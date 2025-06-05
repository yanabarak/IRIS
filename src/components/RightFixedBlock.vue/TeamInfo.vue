<template>
  <div class="classic_block">
    <h6>
      <b-icon icon="people"></b-icon>

      Team Info
    </h6>
    <ul class="team-list d-flex gap-2 flex-wrap">
      <li v-for="user in team" :key="user.image">
        <b-dropdown left v-b-popover.hover.top="`${user.name} - ${user.position}`">
          <template #button-content>
            <div class="box image rounded-circle">
              <img :src="user.image" :alt="user.name" />
            </div>
          </template>
          <router-link to="/basket-menu" class="dropdown-item">
            <b-icon icon="chat"></b-icon>Chat
          </router-link>
          <router-link to="/personal-details" class="dropdown-item">
            <b-icon icon="person"></b-icon>Page
          </router-link>
        </b-dropdown>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [
        {
          name: 'John Doe',
          position: 'Project Manager',
          image: 'https://picsum.photos/id/237/200/300',
        },
        {
          name: 'Jane Smith',
          position: 'Lead Developer',
          image: 'https://picsum.photos/id/234/200/300',
        },
        {
          name: 'John Doe',
          position: 'Project Manager',
          image: 'https://picsum.photos/id/236/200/300',
        },
      ],
    };
  },
};
</script>
