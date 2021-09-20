<template>
	<home-section>
		<template #title> <LayersIcon /> Projects </template>
		<div class="columns is-multiline projects">
			<div
				v-for="project in projects"
				:key="project.name"
				class="column is-half"
			>
				<ProjectCard :project="project" />
			</div>
		</div>
	</home-section>
</template>

<script>
import { LayersIcon } from 'vue-feather-icons'
import ProjectCard from './ProjectCard.vue'
export default {
	components: {
		LayersIcon: LayersIcon,
		ProjectCard: ProjectCard,
	},
	data() {
		return {
			projects: [
				{
					name: 'Yui',
					description:
						' A soon to be multiplayer anime song quiz game! (Work in progress)',
					language: 'vue',
					stars: 3,
					url: 'https://github.com/yanyamz/Yui',
					website: 'https://aniopeningsonline.netlify.app',
				},
				{
					name: 'Nice Commerce',
					description: 'A fully-responsive landing page',
					language: 'vue',
					stars: 0,
					url: 'https://github.com/yanyamz/Nice_Commerce',
					website: 'https://nice-commerce.netlify.app/',
				},
				{
					name: 'Key Visual Arts',
					description: 'A fully-responsive landing page',
					language: 'vue',
					stars: 1,
					url: 'https://github.com/yanyamz/Key_Visual_Arts',
					website: 'https://keyvisualarts.netlify.app/',
				},
				{
					name: 'Planet Viewer',
					description: 'Fully responsive complete website',
					language: 'vue',
					stars: 0,
					url: 'https://github.com/yanyamz/Planet_Viewer',
					website: 'https://planet-viewer.netlify.app/mercury',
				},
				{
					name: 'Trivia.io',
					description: 'A multiplayer quiz to take with your friends',
					language: 'vue',
					stars: 0,
					url: 'https://github.com/yanyamz/Trivia.io',
					website: 'https://triviabrain.herokuapp.com/',
				},
			],
		}
	},
}
</script>
