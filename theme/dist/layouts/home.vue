<template>  
  <div class="wrap">
    <div class="container">
      <HomeProfile />
      <div class="main">
        <HomeProjects
          v-if="$themeConfig.projects"
          :projects="$themeConfig.projects"
        />
        <HomeSkills v-if="$themeConfig.skills" :skills="$themeConfig.skills" />
        <HomePosts v-if="page.posts" id="posts" :posts="page.posts" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeProjects from '../components/HomeProjects.vue';
import HomePosts from '../components/HomePosts.vue';
import HomeProfile from '../components/HomeProfile.vue';
import HomeSkills from '../components/HomeSkills.vue';
export default {
  components: {
    HomeProjects: HomeProjects,
    HomePosts: HomePosts,
    HomeProfile: HomeProfile,
    HomeSkills: HomeSkills
  },
  props: ['page'],
  head: function head() {
    return {
      title: this.$siteConfig.title,
      meta: [{
        property: 'og:title',
        content: this.$siteConfig.title
      }, {
        property: 'og:description',
        content: this.$siteConfig.description
      }, {
        property: 'og:image',
        content: this.$themeConfig.profilePicture
      }]
    };
  }
};
</script>