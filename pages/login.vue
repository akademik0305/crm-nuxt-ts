<script lang="ts" setup>
// import uuid
import { v4 as uuid } from 'uuid'

// import stores
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store'

// change page title
useSeoMeta({
	title: 'Login | CRM System',
})

// input variables
const emailRef = ref('')
const nameRef = ref('')
const passwordRef = ref('')

// stores
const authStore = useAuthStore()
const isLoadingStore = useIsLoadingStore()
// router
const router = useRouter()

// user login
const login = async () => {
	isLoadingStore.set(true)

	const acc = await account.createEmailPasswordSession(
		emailRef.value,
		passwordRef.value
	)
	console.log(acc)

	const response = await account.get()
	console.log(response)

	if (response) {
		authStore.set({
			email: response.name,
			name: response.name,
			status: response.status,
		})
	}

	emailRef.value = ''
	passwordRef.value = ''
	nameRef.value = ''

	await router.push('/')
	isLoadingStore.set(false)
}

// user register
const register = async () => {
	await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value)
	login()
}
</script>
<template>
	<div class="flex items-center justify-center min-h-screen w-full">
		<div class="rounded bg-sidebar w-1/4 p-5">
			<h2 class="text-2xl text-center font-bold mb-5">Login</h2>

			<form>
				<UiInput
					placeholder="Email"
					type="email"
					class="mb-3"
					v-model="emailRef"
				/>
				<UiInput
					placeholder="Password"
					type="password"
					class="mb-3"
					v-model="passwordRef"
				/>
				<UiInput
					placeholder="Name"
					type="name"
					class="mb-3"
					v-model="nameRef"
				/>
				<div class="flex items-center justify-center gap-5">
					<UiButton type="button" @click="login">Login</UiButton>
					<UiButton type="button" @click="register">Register</UiButton>
				</div>
			</form>
		</div>
	</div>
</template>
<style></style>
