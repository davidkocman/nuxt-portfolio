<template>
	<div class="content">
		<section class="skills">
			<h3 class="section-heading">Skills</h3>
			<div class="wrapper">
				<a
					href="https://javascript.info/"
					target="_blank"
					class="javascript"
					title="JavaScript is the programming language of HTML and the Web."
					rel="noreferrer"
				>
					javascript
					<fa :icon="['fab', 'js']" />
				</a>
				<a
					href="https://www.w3schools.com/html/"
					target="_blank"
					class="html"
					title="HTML is the standard markup language for Web pages."
					rel="noreferrer"
				>
					html
					<fa :icon="['fab', 'html5']" />
				</a>
				<a
					href="https://twig.symfony.com/"
					target="_blank"
					class="twig"
					title="Twig is a modern template engine for PHP."
					rel="noreferrer"
				>
					twig
					<fa :icon="['fab', 'symfony']" />
				</a>
				<a
					href="https://sass-lang.com/"
					target="_blank"
					class="scss"
					title="CSS with superpowers."
					rel="noreferrer"
				>
					css/scss
					<fa :icon="['fab', 'sass']" />
				</a>
				<a
					href="https://gulpjs.com/"
					target="_blank"
					class="gulp"
					title="A toolkit to automate & enhance your workflow."
					rel="noreferrer"
				>
					gulp
					<fa :icon="['fab', 'gulp']" />
				</a>
				<a
					href="https://webpack.js.org/"
					target="_blank"
					class="webpack"
					title="Webpack is a static module bundler for modern JavaScript applications."
					rel="noreferrer"
				>
					webpack
					<fa :icon="['fab', 'js']" />
				</a>
				<a
					href="https://git-scm.com/"
					target="_blank"
					class="git"
					title="Git is a free and open source distributed version control system."
					rel="noreferrer"
				>
					git
					<fa :icon="['fab', 'git-alt']" />
				</a>
				<a
					href="https://vuejs.org/"
					target="_blank"
					class="vuejs"
					title="The Progressive JavaScript Framework"
					rel="noreferrer"
				>
					vue.js
					<fa :icon="['fab', 'vuejs']" />
				</a>
				<a
					href="https://www.atlassian.com/software/jira"
					target="_blank"
					class="jira"
					title="Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management."
					rel="noreferrer"
				>
					jira
					<fa :icon="['fab', 'jira']" />
				</a>
				<a
					href="https://www.docker.com/"
					target="_blank"
					class="docker"
					title="Docker is a set of platform as a service products that uses OS-level virtualization to deliver software in packages called containers."
					rel="noreferrer"
				>
					docker
					<fa :icon="['fab', 'docker']" />
				</a>
				<a
					href="https://bitbucket.org/product"
					target="_blank"
					class="bitbucket"
					title="Bitbucket is a web-based version control repository"
					rel="noreferrer"
				>
					bitbucket
					<fa :icon="['fab', 'bitbucket']" />
				</a>
			</div>
		</section>
		<section class="interests">
			<h3 class="section-heading">Interests & Hobbies</h3>
			<div class="wrapper">
				<div class="item">
					<h3 class="title web">
						<fa :icon="['fas', 'code']" />
						<span>Web development</span>
					</h3>
					<p>
						I love what I do. Most of the time... Learning process
						that never ends.
					</p>
				</div>
				<div class="item">
					<h3 class="title design">
						<fa :icon="['fas', 'gem']" />
						<span>Web design</span>
					</h3>
					<p>Very passionate at it but not good at it.</p>
				</div>
				<div class="item">
					<h3 class="title gaming">
						<fa :icon="['fas', 'gamepad']" />
						<span>Gaming</span>
					</h3>
					<p>
						From time to time I just have to turn off and play some
						Battlefield or build a city on Earth or Mars.
					</p>
				</div>
				<div class="item">
					<h3 class="title hiking">
						<fa :icon="['fas', 'hiking']" />
						<span>Hiking</span>
					</h3>
					<p>
						Because of all the paths you take in life, make sure a
						few of them are dirt.
					</p>
				</div>
				<div class="item">
					<h3 class="title skiing">
						<fa :icon="['fas', 'skiing']" />
						<span>Skiing</span>
					</h3>
					<p>There is no such thing as too much snow.</p>
				</div>
				<div class="item">
					<h3 class="title biking">
						<fa :icon="['fas', 'bicycle']" />
						<span>Biking</span>
					</h3>
					<p>Cycling and enjoying the scenery is what I really love.</p>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	head: {
		title: "David Kocman - skills & interests",
		meta: [
			{
				hid: "description",
				name: "description",
				content: "David Kocman - skills & interests",
			},
		],
	},
};
</script>
<style lang="scss">
@import "~/assets/scss/components/skills.scss";
@import "~/assets/scss/components/interests.scss";
</style>