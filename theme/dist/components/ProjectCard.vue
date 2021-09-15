<template>
    <div class="card project" rel="noopener noreferrer">
        <div class="project-title">{{ project.name }}</div>
        <div class="project-description">{{ project.description }}</div>
        <div class="project-meta">
            <span v-if="project.language" class="project-language">
                <CodeIcon />
                {{ project.language }}
            </span>
            <span class="project-stars">
                <StarIcon />
                {{ project.stars }}
            </span>
            <span class="project-link">
                <a
                    :href="project.website"
                    class="project-website is-link is-clickable"
                    target="_blank"
                >
                    live
                </a>
            </span>
            <span class="project-link">
                <a
                    :href="project.url"
                    class="project-website is-link"
                    target="_blank"
                >
                    code
                </a>
            </span>
        </div>
    </div>
</template>

<script>
import { CodeIcon, StarIcon } from 'vue-feather-icons'
export default {
    components: {
        CodeIcon: CodeIcon,
        StarIcon: StarIcon,
    },
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    mounted() {
        console.log(this.project)
    },
}
</script>

<style scoped>
.project-title {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.project-description {
    margin-bottom: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.project-meta {
    display: flex;
}

.project-meta > span {
    display: flex;
    align-items: center;
}

.project-meta > span svg {
    width: 1rem;
    height: 1rem;
    margin-right: 5px;
}

.project-meta > span:not(:last-child) {
    margin-right: 15px;
}
</style>
