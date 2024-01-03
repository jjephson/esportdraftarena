<template>
	<NuxtLayout>
		<section class="signup">
			<section class="content-area">
				<article>
					<h1>Draft your esport team</h1>
					<p>Assemble your esports team, organize practice sessions, compete in leagues, and stand a chance to win fantastic prizes.</p>
				</article>
			</section>
			<section class="login-area">
				<article>
					<form @submit.prevent="" role="form">
						<NuxtPicture src="logo.GIF" alt="Esport Draft Arena" class="picture" />
						<p>Sign up with your email and username.</p>
						<div>
							<label for="username" class="visuallyhidden">Username:</label>
							<input type="text" id="username" placeholder="Username" required>
						</div>						
						<div>
							<label for="email" class="visuallyhidden">Email:</label>
							<input type="text" id="email" placeholder="Email" required>
						</div>
						<div>
							<label for="password" class="visuallyhidden">Password:</label>
							<input type="password" id="password" placeholder="Password" required>
						</div>
						<div>
							<label for="password2" class="visuallyhidden">Repeat password:</label>
							<input type="password2" id="password2" placeholder="Repeat password" required>
						</div>
						<button type="submit">Sign up</button>
						<p class="signup-link">Already a member? <NuxtLink to="/login">Login in here!</NuxtLink></p>
					</form>
				</article>
			</section>
			
		</section>
	</NuxtLayout>
</template>
  
<script setup>
	definePageMeta({
		layout: 'login'
	})

	// import { ref } from 'vue';
	

	// const client = useSupabaseClient();
	// const email = ref();
	// const password = ref();
	// const errorMsg = ref();
	// const successMsg = ref();

	// async function signUp() {
	// 	try {
	// 		const {data, error} = await client.auth.signUp({
	// 			email: email.value,
	// 			password: password.value,
	// 		});
	// 		if (error) throw error;
	// 		successMsg.value = "Check your email";
	// 	} catch (error) {
	// 		errorMsg.value = error.message;
	// 	}
	// }
</script>

<style scoped>
	.signup {
		display: flex;
		flex-wrap: wrap;
		min-height: 100vh;
	}
	.content-area {
		display: flex;
		flex: 1 0 50%;
		align-items: center;
		justify-content: center;
		background-color: #fff;
	}
	.content-area article {
		width: 60%;
		background: #fff;
		color:#000;
		text-align: center;
	}
	.content-area h1 {
		font-size: 4rem;
		text-transform: uppercase;
	}
	
	.login-area {
		display: flex;
		align-items: center;
		flex: 1 0 50%;
		justify-content: center;
		color: #000;
		background: #000 url(../assets/images/register.jpg) 50% no-repeat;
		background-size: cover;
	}
	.login-area h1 {
		font-size: 4rem;
		text-transform: uppercase;
	}
	.login-area article {
		width: 360px;
		padding: 20px 20px;
		background: rgba(255, 255, 255, 1);
		border-radius: 3px;
		border: 1px solid #fff;
	}
	.login-area label {
		margin: 0 0 5px;
	}
	.login-area input {
		padding: 7px 10px;
		margin: 5px 0 20px;
		border: 1px solid gray;
		border-radius: 3px;
		width: 100%;
		text-align: initial;
	}
	.login-area button:focus,
	.login-area input:focus {
		border-color: #000;
	}
	.login-area button {
		padding: 7px 10px;
		border: 1px solid gray;
		border-radius: 3px;
		color:#fff;
		background-color: cornflowerblue;
		width: 100%;
		text-align: center;
	}
	.login-area form {
		text-align: center;
	}
	.picture {
		display: inline-block;
		margin: 0 0 20px;
	}
	.signup-link {
		margin: 15px 0 0;
	}
	
</style>