<script setup lang="ts">
// import stores
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store'

// stores
const authStore = useAuthStore()
const isLoadingStore = useIsLoadingStore()
const router = useRouter()

// logout function
const logout = async () => {
	isLoadingStore.set(true)

	account.deleteSession('current')
	authStore.clear()
	await router.push('/login')
	isLoadingStore.set(false)
}
</script>

<template>
	<aside class="bg-sidebar px-5 py-8 h-full relative w-full">
		<NuxtLink to="" class="block mb-10">
			<NuxtImg src="/logo.svg" alt="" width="120px" class="mx-auto" />
		</NuxtLink>

		<button
			class="absolute top-2 right-3 transition-colors hover:text-primary"
			@click="logout"
		>
			<!-- ICON -->
			<Icon name="line-md:logout" size="22" />
		</button>

		<!-- menu -->
		<LayoutMenu />
		<!-- menu -->
	</aside>
</template>

<style scoped></style>
