<template>  
  <div class="post-meta">
    <span class="post-date">
      <CalendarIcon />
      {{ getDate(attributes.createdAt) }}
    </span>
  </div>
</template>

<script>
import { CalendarIcon } from 'vue-feather-icons';
export default {
  components: {
    CalendarIcon: CalendarIcon
  },
  props: {
    attributes: {
      type: Object,
      required: true
    }
  },
  methods: {
    getDate: function getDate(date) {
      var d = new Date(date);
      return "".concat(d.getFullYear(), "/").concat(d.getMonth() + 1, "/").concat(d.getDate());
    }
  }
};
</script>

<style scoped>
.post-meta {
  color: var(--text-color-lighter)
}
.post-meta > span {
    display: flex;
    align-items: center
  }
.post-meta > span svg {
      width: 0.875rem;
      margin-right: 5px;
    }
</style>