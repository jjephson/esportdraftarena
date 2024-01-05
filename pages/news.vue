<template>
	<section>
		<h2>News page</h2>
		<section class="news-list">
			<ul>
				<li v-for="(article, index) in newsArticles" :key="index">
					<h3>{{ article.title }}</h3>
					<p>{{ article.content }}</p>
					<NuxtLink :to="article.link">Read the article</NuxtLink>
					<span class="news-info">| {{ article.date }}</span>
				</li>
			</ul>
			<ul class="small-list">
				<li v-for="(articleSmall, index) in newsArticlesSmall" :key="index">
					<h3><NuxtLink :to="articleSmall.link">{{ articleSmall.title }}</NuxtLink></h3>
				</li>
			</ul>
			<NuxtLink to="/">Show more</NuxtLink>
		</section>
	</section>
</template>

<script setup>
	definePageMeta({
		layout: 'default'
	});

	const newsArticles = ref([
		{
			title: "This is a news article in the archive",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			link: "/",
			date: "2024-01-05"
		},
		{
			title: "This is a news article in the archive",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			link: "/",
			date: "2024-01-05"
		},
		{
			title: "This is a news article in the archive",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			link: "/",
			date: "2024-01-05"
		},
		{
			title: "This is a news article in the archive",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			link: "/",
			date: "2024-01-05"
		},
		{
			title: "This is a news article in the archive",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			link: "/",
			date: "2024-01-05"
		}
	]);

	const newsArticlesSmall = ref([
		{
			title: "This is a news article in the archive",
			link: "/",
		},
		{
			title: "This is a news article in the archive",
			link: "/",
		},
		{
			title: "This is a news article in the archive",
			link: "/",
		},
		{
			title: "This is a news article in the archive",
			link: "/",
		},
		{
			title: "This is a news article in the archive",
			link: "/",
		},
		{
			title: "This is a news article in the archive",
			link: "/",
		},
		{
			title: "This is a news article in the archive",
			link: "/",
		},
		{
			title: "This is a news article in the archive",
			link: "/",
		},
		{
			title: "This is a news article in the archive",
			link: "/",
		},
		{
			title: "This is a news article in the archive",
			link: "/",
		},
	]);

</script>

<style scoped>
	.news-list {
		margin: 40px 0 0;
	}
	.news-list ul {
		margin: 0 0 40px;
	}
	.news-list li {
		margin: 0 0 40px;
	}
	 .news-info {
		font-size: 1.4rem;
	}
	.small-list li {
		margin: 0 0 20px;
	}
	
</style>