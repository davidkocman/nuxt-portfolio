<template>
	<div class="content pt-0">
		<section class="hero">
			<div class="title">
				<h1 class="h1">I'm david kocman<span class="blink">_</span>
				</h1>
				<h2 class="h2">
					<span>&lt;web developer /&gt;</span> based in Bratislava
				</h2>
			</div>
		</section>
		<section class="about">
			<h3 class="section-heading">About</h3>
			<div class="wrapper">
				<div class="image">
					<img
						src="~/assets/images/me-small.png"
						alt="david kocman"
						class="small"
						width="100px"
						height="102px"
					/>
				</div>
				<div class="text">
					<p>
						Hello! I’m David Kocman. Web developer from Slovakia,
						Bratislava. I have experience in web site development
						most of the time as a front end developer. Feel free to
						contact me about interesting job offers or unique
						projects.
					</p>
					<p class="email">
						E-mail:&nbsp;
						<span>{{ email }}</span>
					</p>
				</div>
			</div>
		</section>
		<section class="experiences">
			<div class="column">
				<h3 class="section-heading">Experience</h3>
				<ul>
					<li class="date">February 2021 - June 2022</li>
					<li class="title">Frontend Developer - Petit Press, a.s.</li>
					<li class="info">
						HTML & CSS/SCSS, Twig templating, JavaScript - VUE,
						RESTful Services and APIs, docker
					</li>
				</ul>
				<ul>
					<li class="date">July 2018 - January 2021</li>
					<li class="title">Frontend Developer - News and Media Holding a.s.</li>
					<li class="info">
						HTML & CSS/SCSS, JavaScript, RESTful Services and APIs,
						twig, docker
					</li>
				</ul>
				<ul>
					<li class="date">June 2017 - June 2018</li>
					<li class="title">
						Javascript developer - MATERNA, Information &
						Communications
					</li>
					<li class="info">ServiceNow administration and scripting in JavaScript</li>
				</ul>
				<ul>
					<li class="date">October 2015 - May 2017</li>
					<li class="title">Web Developer - GVC Holdings PLC</li>
					<li class="info">HTML & CSS, JavaScript-jQuery</li>
				</ul>
			</div>
			<div class="column">
				<h3 class="section-heading">Education</h3>
				<ul>
					<li class="date">2011 - 2013</li>
					<li class="title">
						University of Economics in Bratislava Faculty of
						Business Informatics
					</li>
					<li class="info">
						Master degree - Managerial decision making and
						information technology
					</li>
				</ul>
				<ul>
					<li class="date">2008 - 2011</li>
					<li class="title">
						Pan European University, Bratislava Faculty of
						Informatics
					</li>
					<li class="info">Bachelor degree - Applied Informatics</li>
				</ul>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	data () {
		return {
			age: null,
			email: "hello@davidkocman.sk",
		};
	},
	created () {
		let birth = "1985/12/29";
		let parts = birth.split("/").map(Number);
		let ageDif = Date.now() - new Date(parts[0], parts[1] - 1, parts[2]);
		let ageDate = new Date(ageDif);
		let age = Math.abs(ageDate.getUTCFullYear() - 1970);
		this.age = age;
	},
};
</script>
<style lang="scss">
@import "~/assets/scss/components/hero.scss";
@import "~/assets/scss/components/about.scss";
@import "~/assets/scss/components/experiences.scss";
</style>
