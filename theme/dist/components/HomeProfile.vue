<template>
	<div class="sticky profile">
		<div class="profile-content">
			<h1 class="site-title">
				{{ $siteConfig.title }}
			</h1>
			<div class="site-description">
				{{ $siteConfig.description }}
			</div>
			<nav v-if="$themeConfig.nav" class="nav">
				<ul>
					<li v-for="item in $themeConfig.nav" :key="item.link">
						<saber-link :to="item.link">
							<CornerDownRightIcon />{{ item.text }}
						</saber-link>
					</li>
				</ul>
			</nav>
			<div class="profile-meta-items">
				<div class="profile-meta-item">
					<GithubIcon />
					<a
						target="_blank"
						rel="noopener noreferrer"
						:href="`https://github.com/${$themeConfig.github}`"
						>@{{ $themeConfig.github }}</a
					>
				</div>
				<div v-if="$themeConfig.twitter" class="profile-meta-item">
					<TwitterIcon />
					<a
						target="_blank"
						rel="noopener noreferrer"
						:href="`https://twitter.com/${$themeConfig.twitter}`"
						>@{{ $themeConfig.twitter }}</a
					>
				</div>
				<div v-if="$themeConfig.hireable" class="profile-meta-item">
					<BriefcaseIcon />Available for hire
				</div>
			</div>
			<a
				v-if="$themeConfig.sponsorLink"
				rel="noopener noreferrer"
				target="_blank"
				class="sponsor-link"
				:href="$themeConfig.sponsorLink"
				:title="$themeConfig.sponsorTip"
			>
				<HeartIcon />Sponsor
			</a>
		</div>
	</div>
</template>

<script>
import {
	GithubIcon,
	BriefcaseIcon,
	TwitterIcon,
	HeartIcon,
	CornerDownRightIcon,
} from 'vue-feather-icons'
export default {
	components: {
		GithubIcon: GithubIcon,
		BriefcaseIcon: BriefcaseIcon,
		TwitterIcon: TwitterIcon,
		HeartIcon: HeartIcon,
		CornerDownRightIcon: CornerDownRightIcon,
	},
}
</script>

<style scoped>
.profile {
	width: var(--profile-width);
	padding-right: 30px;
	top: 60px;
}

@media (max-width: 768px) {
	.profile {
		display: flex;
		padding-right: 0;
		width: 100%;
		position: static;
		position: initial;
		padding-bottom: 30px;
		margin-bottom: 30px;
		border-bottom: 1px solid var(--border-color);
	}

	.profile .profile-content {
		padding-left: 20px;
		width: calc(100% - 60px);
	}

	.profile .site-title {
		line-height: 1;
		margin-top: 0;
		margin-bottom: 0;
	}

	.profile .site-description {
		margin-top: 0;
	}

	.profile .profile-meta-items {
		margin-top: 10px;
	}
}

.profile-picture {
	width: 200px;
	height: 200px;
	background-color: var(--card-bg);
	background-size: cover;
	border-radius: 6px;
}

@media (max-width: 768px) {
	.profile-picture {
		width: 60px;
		height: 60px;
	}
}

.site-title {
	font-weight: 400;
	margin: 20px 0 10px 0;
	font-size: 2rem;
}

.profile-meta-items {
	margin-top: 25px;
}

.profile-meta-items a {
	color: var(--profile-link-color);
}

.profile-meta-items a:hover {
	color: var(--profile-link-hover-color);
}

.profile-meta-item {
	display: flex;
	align-items: center;
	margin-top: 3px;
}

.profile-meta-item svg {
	width: 1rem;
	height: 1rem;
	margin-right: 10px;
}

.sponsor-link {
	display: flex;
	margin-top: 20px;
	border: 1px solid var(--button-border-color);
	border-radius: 4px;
	text-align: center;
	align-items: center;
	justify-content: center;
	padding: 10px 0;
	font-size: 1.2rem;
	width: 100%;
	color: var(--profile-link-color);
}

.sponsor-link svg {
	width: 1rem;
	height: 1rem;
	margin-right: 5px;
}

.sponsor-link:hover {
	border-color: var(--button-hover-border-color);
}

.sponsor-link:hover svg {
	color: red;
	fill: red;
}

.nav ul {
	margin: 20px 0 0 0;
	padding-left: 0;
	list-style: none;
}

.nav li a {
	display: flex;
	border-radius: 4px;
	align-items: center;
	color: var(--nav-link-color);
}

.nav li a:hover {
	color: var(--nav-link-hover-color);
}

.nav li a.router-link-exact-active {
	color: var(--nav-link-active-color);
}

.nav li svg {
	width: 1rem;
	height: 1rem;
	margin-right: 5px;
}
</style>
